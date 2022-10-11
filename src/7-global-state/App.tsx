/**
 * "Prop drilling" is a common ocurrence in React apps.
 * It refers to having to pass props from parent to
 * many layers of children. As React apps grow in size,
 * so does the complexity of the state of components.
 * That complexity can be mitigated through "global state"-
 * a shared piece state accessible in any point of the tree
 * 
 * There are two common patterns for this: External or Internal
 * global state. External means the state can be accessed inside
 * and outside of react, normally by means of a store (i.e. Redux). 
 * Internal means that it's only accessible inside react components,
 * normally by means of React Context (i.e. Recoil). 
 * 
 * Normally, you shouldn't implement your own state solution. 
 * Since we are in a workshop, we'll create our own external
 * global state solution.
 * 
 * Excercise 1:
 * 
 * - Implement the Store class and use it in the app to store
 *   and share global state.
 */

import { useSyncExternalStore } from "react"

interface GlobalState {
    name: string
    count: string
}

type Unsubscribe = () => void

type SetGlobalState = (newState: GlobalState) => void

type Subscriber<T> = (state: T) => void

interface SyncStore<T> {
    getSnapshot(): T,
    subscribe(sub: Subscriber<T>): Unsubscribe
}

interface Entry<T> {
    readonly id: number
    sub: Subscriber<T>
}
class Store implements SyncStore<GlobalState> {
    private counter: number
    private subs: Entry<GlobalState>[]
    private state: GlobalState

    constructor(){
        this.state = { name: "", count: "0" }
        this.subs = []
        this.counter = 0
    }

    getSnapshot(): GlobalState {
        return this.state
    }

    subscribe(sub: (state: GlobalState) => void): Unsubscribe {
        const newId = this.counter + 1
        this.counter++;
        const newEntry: Entry<GlobalState> = {
            id: newId,
            sub,
        }

        this.subs.push(newEntry)

        return () => {
            this.subs = this.subs.filter(x => x.id !== newId)
        }
    }

    setState(next: GlobalState | ((prev: GlobalState) => GlobalState)){
        if( next instanceof Function ){
            this.state = next(this.state)
        } else {
            this.state = next
        }
        this.subs.forEach((entry) => entry.sub(this.state))
    }
}

const store = new Store()
const useGlobalState = (): [GlobalState, SetGlobalState] => {
    const value = useSyncExternalStore(
        (arg) => store.subscribe(arg), 
        () => store.getSnapshot()
    )

    const setState = (n: GlobalState | ((prev: GlobalState) => GlobalState)) => { 
        store.setState(n)
    }

    return [value, setState]
}

interface InputProps {
    attribute: keyof GlobalState
}

const ConnectedInput = ({ attribute }: InputProps) => {
    const [value, setValue] = useGlobalState()

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue({ ...value, [attribute]: e.target.value })
    }

    return <input type="text" value={value[attribute]} onChange={handleChange} />
}

const Form = () => {
    return <>
        <div>
            <ConnectedInput attribute="name"/>
        </div>
        <div>
            <ConnectedInput attribute="name"/>
        </div>
        <div>
            <ConnectedInput attribute="count"/>
        </div>
        <div>
            <ConnectedInput attribute="count"/>
        </div>
    </>
}

const App = () => <Form />

export default App