import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import "./Counters.css"
import Header from "./Header"
import Button from "./Button"

const Home = ({ count }) => <Header text={count} />

const Controls = ({ count, decreaseCount, increaseCount }) => (
    <div>
      <Header text={count} />
      <Button onClick={decreaseCount} label="-" />
      <Button onClick={increaseCount} label="+" />
    </div>
  )


const RoutingInReact = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1)
  };
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  };

  return (
    <Router>
      <div className="Counter">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/controls">Controls</Link>
        </nav>
        <Switch>
          <Route path="/controls">
            <Controls
              increaseCount={increaseCount}
              decreaseCount={decreaseCount}
              count={count}
            />
          </Route>
          <Route path="/">
            <Home count={count} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default RoutingInReact
