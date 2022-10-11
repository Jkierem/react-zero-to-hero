/**
 * React cannot magically detect that a value
 * changed. So, it has two mechanisms to 
 * detect changes in a component. One is when
 * props change. The other one is by means
 * of a hook.
 * 
 * Here the counter component has an issue.
 * Even though the count variable cahnges on
 * each click, the ui won't update
 * 
 * Excercise 1:
 * 
 * - Fix the Counter component by using the 
 *   `useState` hook.
 * 
 * Hint: the common pattern for useState is:
 * 
 * ```
 * const [current, setValue] = useState(initialValue)
 * ```
 * 
 *  Where:
 *  - "current" is a variable with the current value
 *  - "setValue" is a function that changes the value
 *  - "initialValue" is the first value of "current"
 * 
 * The Rules of Hooks™
 * 
 * 1. Can only be called inside components 
 * 2. Can't be called inside loops, conditionals, or nested functions
 * 3. Must be called in every render and in the same order
 */

import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return <div>
        <h1>The count is: {count} </h1>
        <button onClick={() => setCount(x => x + 1)}>Increment</button>
    </div>
}

const App = () => <Counter />

export default App