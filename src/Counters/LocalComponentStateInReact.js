import { useState } from "react"
import "./Counters.css"
import Button from "./Button"

const LocalComponentStateInReact = () => {
  const [count, setCount] = useState(0)
  const increaseCount = () => { setCount(count + 1) };
  const decreaseCount = () => { if (count > 0) { setCount(count - 1) } }

  return (
    <div className="Counter">
      <h1>{count}</h1>
      {count > 0 ? <button onClick={decreaseCount}>-</button> : null}
      <button onClick={increaseCount}>+</button>
    </div>
  )
}

export default LocalComponentStateInReact
