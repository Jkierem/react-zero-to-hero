/**
 * There is a special prop called "children". This prop
 * represents whatever is inside the component:
 * 
 * ```
 * <Parent>
 *    <Child />
 * </Parent>
 * ```
 * 
 * In this case, the component "Parent" only has a single
 * child, conveniently named "Child". The Parent component
 * would receive the "children" prop as an array with a
 * single element inside (That element being the Child component).
 * All components receive a children prop, even in the single tag
 * form (i.e. <Component />). In those cases, the children prop
 * is set to an empty array
 * 
 * ```
 * <Component></Component> = <Component />
 * ```
 * 
 * Children can be either a single component or 
 * an array of components. This allows for creating
 * react components by simply iterating using 
 * the tools javascript provides.
 */

const ChildrenLogger = ({ children }: React.PropsWithChildren<{}>) => {
    console.log(children)
    return children
}

/**
 * Excercise 1:
 * 
 * - Finish the implementation of the list component
 *   so that it has an <li> element for each object in
 *   the "participants" array inside the <ul> element. 
 *   The <li> elements should have the name and score 
 *   of each participant as content
 * 
 *   Hint: arrays have a `map` function that you can use
 *         to create an array of `<li>` elements
 */

const participants = [
    { name: "Jose", score: 25 },
    { name: "Juan", score: 22 },
    { name: "Jaime", score: 15 },
    { name: "James", score: 12 },
]

const List = () => {
    return <ul>
        {/* fill in */}
    </ul>
}

const App = () => <List />

export default App;
