/**
 * React supports attaching event handlers for all the html
 * events. The only difference being the names are cameCased
 * (i.e. "onclick" becomes "onClick"). For a detailed list
 * of all the events: https://reactjs.org/docs/events.html#supported-events
 * 
 * To handle an event just pass a function to the corresponding
 * prop
 */

const ClickMe = () => <button onClick={() => alert("You clicked me!")}>Click me!</button>

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
 * In this example, the MessageContainer is parent to the Button component.
 * It passes down what label to use and a callback of what should
 * happen when the button is clicked. The Button in turn, communicates
 * by passing arguments to the callback
 */

interface MessageButtonProps {
    label: string
    onMessage: (msg: string) => void
}

const MessageButton = ({ label, onMessage }: MessageButtonProps) => {
    return <button 
        onClick={() => onMessage("Hey there. I've been clicked")} 
    >{label}</button>
}

const MessageContainer = () => {
    const handleMessage = (msg: string) => {
        alert(`Message received: ${msg}`)
    }

    return <MessageButton 
        label="Trigger Message" 
        onMessage={handleMessage}
    />
}

/**
 * Exercise 1:
 * 
 * - Implement the Button component so that it receives
 *   the message it should pass to the parent, without
 *   modifying button list.
 */

interface ButtonProps {
    label: string
    message: string
    onClick: (msg: string) => void
}

const Button = (props: ButtonProps) => <>{/* Finish Implementation */}</>

const ButtonList = () => {
    const data = [
        { label: "Print One", message: "One" },
        { label: "Print Two", message: "Two" },
        { label: "Print Three", message: "Three" },
        { label: "Print Four", message: "Four" },
        { label: "Print Five", message: "Five" },
    ]

    const handleClick = (msg: string) => {
        alert(`Message received: ${msg}`)
    }

    return <>
        {data.map((entry) => 
            <Button 
                {...entry}
                onClick={handleClick} 
            />
        )}
    </>
}

const App = () => <ButtonList />

export default App