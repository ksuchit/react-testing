import { useState } from "react"


export default function Counter(){

    const [count, setCount] = useState<number>(0)
    const [amount,setAmout]=useState<number>(0)
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Increament</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <br></br>
            <input type='number'
                value={amount}
                onChange={(e)=>setAmout(parseInt(e.target.value))}
            />
            <button onClick={()=>setCount(amount)}>set</button>
        </div>
    )
}