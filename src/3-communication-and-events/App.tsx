/**
 * React supports attaching event handlers for all the html
 * events. The only difference being the names are cameCased
 * (i.e. "onclick" becomes "onClick"). For a detailed list
 * of all the events: https://reactjs.org/docs/events.html#supported-events
 * 
 * To handle an event just pass a function to the corresponding
 * prop
 */

interface ButtonProps {
    label?: string
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ label, onClick }: ButtonProps) => {
    return <button onClick={onClick} >{label}</button>
}

/**
 * There are two kinds of communication between components
 * in react
 * 
 * ### 1. Parent -> Child
 *   
 * A parent communicates with children by means of passing props
 * 
 * ### 2. Child -> Parent
 * 
 * A child can communicate with its' parent via callbacks
 * 
 */

const App = () => <></>

export default App