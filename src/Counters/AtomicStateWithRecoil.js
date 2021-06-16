import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { atom, useRecoilState, RecoilRoot } from "recoil"
import "./Counters.css"
import Header from "./Header"
import Button from "./Button"

const countState = atom({
  key: "count",
  default: 0
})


const Home = () => {
  const [count] = useRecoilState(countState)
  return <Header text={count} />
}

const Controls = () => {
  const [count, setCount] = useRecoilState(countState);
  const increaseCount = () => { setCount(count + 1)  }
  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <Header text={count} />
      <Button onClick={decreaseCount} label="-" />
      <Button onClick={increaseCount} label="+" />
    </>
  )
}

const AtomicStateWithRecoil = () => {


  return (
    <RecoilRoot>
      <Router>
        <div className="Counter">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/controls">Controls</Link>
          </nav>
          <Switch>
            <Route path="/controls">
              <Controls />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
)
}

export default AtomicStateWithRecoil
