/**
 * The useEffect hook
 * 
 * - This hook is used for one of three scenarios:
 * 
 *  1. Conditional logic inside render
 *  2. Subscription effects
 *  3. Mount/Unmount logic
 */

import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"

const AlertIfOdd = ({ n }: { n: number }) => {
    useEffect(() => {
        if( n % 2 === 1 ){
            alert("ONE!")
        }
    },[n])

    return <></>
}

const SubscriptionEffect = ({ time }: { time: number }) => {
    const [text, setText] = useState("Waiting...")

    useEffect(() => {
        const id = setTimeout(() => setText("Timedout!"), time)

        return () => clearTimeout(id)
    }, [time])

    return <p>{text}</p>
}

const AlertOnMountUnmount = () => {
    useEffect(() => {
        alert("MOUNT")
        return () => alert("UNMOUNT")
    },[])

    return <></>
}

/**
 * It's common to have components that fetch data in React.
 * The most common pattern is "render-as-you-fetch", meaning
 * we show some sort of intermediate UI while a request is 
 * loading. In this case we should show a <Loader /> component.
 * 
 * Exercise 1:
 * 
 * - Build the UserGreeting component that should have the following behavior:
 * 
 * 1. When mounting, should create a Promise that gets some information
 * 2. While the promise is pending, should show the <Loader /> component
 * 2. When the promise resolves, should display the information
 * 3. If the promise fails, it should display an error message
 * 
 * Hint: For simplicity, the getData function receives how it should resolve.
 *       It simulates fetching to an external API. Use the `useState` and 
 *       `useEffect` hooks to handle the request.
 */


 const rotationAnimation = keyframes`
     0% {
         transform: rotate(0deg);
     }
     100% {
         transform: rotate(360deg);
     }
 `
 
 const Loader = styled.div`
     width: 48px;
     height: 48px;
     border: 5px solid #000;
     border-bottom-color: transparent;
     border-radius: 50%;
     display: inline-block;
     box-sizing: border-box;
     animation: ${rotationAnimation} 1s linear infinite;
 `

type UserData = { name: string }
const getData = (result: "success" | "failure", milliseconds = 1000) => {

    const data: UserData = {
        name: "Tom Mock"
    }

    return new Promise<UserData>((res, rej) => {
        setTimeout(() => {
            result === "success" ? res(data) : rej(new Error("Oh no!"))
        }, milliseconds)
    })
}

type States = "loading" | "success" | "failure"

const UserGreeting = () => {
    const [state, setState] = useState<States>("loading")
    const [value, setValue] = useState<UserData | undefined>()
    const [error, setError] = useState<Error | undefined>()

    useEffect(() => {
        let mounted = true;
        getData("failure", 5000)
        .then((x) => {
            if( mounted) {
                setState("success")
                setValue(x)
            }
        })
        .catch((err) => {
            if( mounted ){
                setState("failure")
                setError(err)
            }
        })

        return () => {mounted = false}
    },[])

    if(state === "loading"){
        return <Loader />
    }

    return state === "failure" 
        ? <div>Lo siento. Error {error?.message}</div> 
        : <div>Hola {value?.name}</div>
}

const App = () => <UserGreeting />

export default App