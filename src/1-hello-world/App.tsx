/**
 * In React, a component is any function that returns a React element
 * 
 * React elements are created by calls to "React.createElement". This
 * in practice is cumbersome so we use a special syntax called "jsx"
 * 
 *  <h1>Hi</h1>  =  React.createElement("h1", {}, "Hi")
 * 
 */

const staticHello = <h1>Hello World!</h1>

/**
 * In JSX, anything inside a pair of brackets is evaluated as 
 * a javascript expression. The result is then passed to the
 * component
 */

const name = "You!"
const jsxWithJs = <div>
    {40 + 2}
    {`Hi there, ${name}`}
    {staticHello}
</div>

/**
 * Components can receive any kind input. We call this input "props".
 * 
 * Components you define must start with uppercase. This is because 
 * lowercase components are reserved for html elements.
 */

type Props = Record<string, any>

const MyFirstComponent = (props: Props) => {
    return <p>I received the following props: {JSON.stringify(props)}</p>
}

const moreProps = {
    a: 42,
    b: 43,
}

const withSomeProps = <MyFirstComponent 
    numberProp={40 + 2} 
    templateString={`this is a template string`}
    stringProp="this is a string" 
    trueProp // Same as "trueProp={true}"
    booleanProp={false}
    arrayProp={[1,2,3]}
    objectProp={{ a: 42, b: 40 }}
    {...moreProps}
/>

/**
 * Excercise 1:
 * 
 * - To start things off, finish the definition of the HelloWord Component.
 *   Make it so it renders an h1 element that says "Hello [who]!" using the 
 *   "who" prop
 */

interface HelloWorldProps {
    who: string
}

const HelloWorld = ({ who }: HelloWorldProps) => <></>

/**
 * Excercise 2:
 * 
 * - Change the "App" component so it shows "Hello World!" and under it
 *   "Hello Universe!".
 * 
 *   Hint: React components can only return a single element. Use either
 *         a <div> element or a fragment (<></>) to return more than one 
 *         element
 */

const App = () => <HelloWorld who="World!"/>

export default App;
