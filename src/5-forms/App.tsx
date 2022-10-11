/**
 * Exercise 1:
 * 
 * - Using the useState hook, finish the implementation of the 
 *   Form component. It should just be a simple username and 
 *   password form. Use the provided Input and Submit components
 * 
 * (Optional) Exercise 2: 
 *  
 * - Use the useReducer hook to implement the Form component
 */

import { useState } from "react"

type InputType = "button" 
    | "checkbox" | "color" | "date" | "datetime-local" | "email"
    | "file" | "hidden" | "image" | "month" | "number" | "password"
    | "radio" | "range" | "reset" | "search" | "submit" | "tel"
    | "text" | "time" | "url" | "week"

interface InputProps {
    name: string
    type?: InputType
    onChange: (newValue: string, name: string) => void
}

const Input = ({ name, onChange, type="text" }: InputProps) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        onChange(e.target.value, name)
    }

    return <input type={type} name={name} onChange={handleChange} />
}

const Submit = () => <input type="submit" />

interface FormProps {
    onSubmit: (formValues: any) => void
}

const Form = (props: React.PropsWithChildren<FormProps>) => {
    const [data, setData] = useState({ name: "", password: "" })

    const handleInput = (value: string, field: string) => {
        setData(data => ({...data, [field]: value }))
    }

    return <form onSubmit={(e) => {
        e.preventDefault()
        props.onSubmit(data)
    }}>
        <Input name="name" onChange={handleInput}/>
        <Input name="password" onChange={handleInput} type="password"/>
        <Submit />
    </form>
}

const App = () => <Form onSubmit={console.log}/>

export default App