import { useState } from "react"


export default function Counter(){

    const [count,setCount]=useState<number>(0)
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Increament</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}