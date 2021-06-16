import { useState } from "react"
import "./Counters.css"
import Header from "./Header";
import Button from "./Button"

const ComponentPropsInReact = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => { setCount(count + 1)  }
  const decreaseCount = () => { if (count > 0) { setCount(count - 1) } }

  return (
    <div className="Counter">
      <Header text={count} />
      {count > 0 ? <Button onClick={decreaseCount} label="-" /> : null}
      <Button onClick={increaseCount} label="+" />
    </div>
  )
}

export default ComponentPropsInReact
