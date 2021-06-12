import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ label, onClick }) => (
    <button onClick={onClick}>{label}</button>
)

const Home = ({ count }) => {
    return <Header text={count} />
}

const Controls = ({ count, decreaseCount, increaseCount }) => {
    return (
        <>
            <Header text={count} />
            <Button onClick={decreaseCount} label="-" />
            <Button onClick={increaseCount} label="+" />
        </>
    )
}

const RoutingInReact = () => {
    const [count, setCount] = useState(0)
    const increaseCount = () => {
        setCount(count + 1)
    }
    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <Router>
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
        </Router>
    )
}

export default RoutingInReact