import { useState } from "react"
import { UseCounterProps } from "./useCounter.type"

export const useCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
    const [count, setCount] = useState(initialCount)
    
    const increment=()=>setCount((prev)=>prev+1)
    const decrement = () => setCount((prev) => prev - 1)
    return {count,increment,decrement}
}