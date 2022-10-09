/**
 * Sometimes, it is useful to receive a prop that 
 * will render the UI. This is normally used 
 * to recycle some logic. 
 */

import { useEffect, useState } from "react"

interface Data {
    name: string
}

interface Props {
    render: (data: Data) => JSX.Element
}

const Fetch = ({ render }: Props) => {
    const [ui, setUI] = useState(<>Loading...</>)
    useEffect(() => {
        const id = setTimeout(() => {
            setUI(render({ name: "something" }))
        }, 1000)
        return () => clearTimeout(id)
    }, [render])
    return ui
}

const UsingFetch = () => <Fetch render={({ name }) => <div>{name}</div>} />

/**
 * The children can also be a render prop.
 * This allows for a more seamless api
 */

interface Props2 {
    children: (data: Data) => JSX.Element
}

const FetchChildren = ({ children }: Props2) => {
    const [ui, setUI] = useState(<>Loading...</>)
    useEffect(() => {
        const id = setTimeout(() => {
            setUI(children({ name: "something" }))
        }, 1000)
        return () => clearTimeout(id)
    }, [children])
    return ui
}

const UsingFetch2 = () => <FetchChildren>
    {({ name }) => <div>{name}</div>}
</FetchChildren>

export {}