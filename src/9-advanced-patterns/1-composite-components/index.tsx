/**
 * Composite components are component that have
 * Sub components to be used in a certain way.
 * 
 * The most common example is a List component
 */

interface ItemProps {
    text: string
    value: string
}

const Item = ({ text, value }: ItemProps) => {
    return <li value={value}>{text}</li>
}

interface ListProps {
    children: React.ReactComponentElement<typeof Item, any>[]
}

const List = ({ children }: ListProps) => {
    return <ul>
        {children}
    </ul>
}

List.Item = Item;

export default List

/**
 * This allows to build something like this
 */

const DescriptiveList = <List>
    <List.Item text="hey" value="1"/>
    <List.Item text="hey" value="2"/>
    <List.Item text="hey" value="3"/>
    <List.Item text="hey" value="4"/>
</List>