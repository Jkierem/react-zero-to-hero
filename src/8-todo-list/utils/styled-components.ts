export const propWithDefault =
  <T, Key extends keyof T>(name: Key, fallback: T[Key]) =>
  ({ [name]: value = fallback }: T): T[Key] =>
    value

export const foldProp =
  <Props, Key extends keyof Props, Falsy, Truthy>(
    key: Key,
    onFalsy: (prop: Props) => Falsy,
    onTruthy: (prop: Props) => Truthy,
  ) =>
  (props: Props) =>
    props[key] ? onTruthy(props) : onFalsy(props)

  
export const boxShadow = (elevation: 0 | 1 | 2 | 3 ) => {
  const shadows = [
    `none`,
    `0px 2px 1px -1px rgba(0,0,0,0.2),
     0px 1px 1px 0px rgba(0,0,0,0.14),
     0px 1px 3px 0px rgba(0,0,0,0.12)`,
    `0px 3px 1px -2px rgba(0,0,0,0.2),
     0px 2px 2px 0px rgba(0,0,0,0.14),
     0px 1px 5px 0px rgba(0,0,0,0.12)`,
    `0px 3px 3px -2px rgba(0,0,0,0.2),
     0px 3px 4px 0px rgba(0,0,0,0.14),
     0px 1px 8px 0px rgba(0,0,0,0.12)`
  ] as [string, string, string, string]

  return shadows[elevation]
}