/**
 * A polymorphic component is one that allows
 * to be represented by many or any other element
 * in the DOM. For example, this polymorphic button
 * may render any component in the DOM. This is 
 * mostly useful when building libraries.
 */

interface Props {
    as: React.ElementType<any>,
    onClick: () => void
}

export const PolymorphicButton = (props: Props) => {
    const { as: Component, onClick } = props

    return <Component onClick={onClick} />
}

const ClickableHeader = () => <PolymorphicButton as="h1" onClick={() => alert("Click!")}/>