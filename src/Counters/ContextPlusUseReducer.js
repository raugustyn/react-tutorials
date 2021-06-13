import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useContext, useReducer } from "react";
import "./Counters.css";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1 >= 0 ? state - 1 : 0;
    default:
      return state;
  }
};

const CountContext = createContext(null);

const useCount = () => {
  const value = useContext(CountContext);
  if (value === null) throw new Error("CountProvider missing");
  return value;
};

const CountProvider = ({ children }) => (
  <CountContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </CountContext.Provider>
);

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

const Home = () => {
  const [state] = useCount();
  return <Header text={state} />;
};

const Controls = () => {
  const [state, dispatch] = useCount();
  return (
    <>
      <Header text={state} />
      {state > 0 ? (
        <Button onClick={() => dispatch({ type: "DECREMENT" })} label="-" />
      ) : null}
      <Button onClick={() => dispatch({ type: "INCREMENT" })} label="+" />
    </>
  );
};

const ContextPlusUseReducer = () => {
  return (
    <CountProvider>
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
    </CountProvider>
  );
};

export default ContextPlusUseReducer;
