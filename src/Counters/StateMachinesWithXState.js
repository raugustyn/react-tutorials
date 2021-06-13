import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useMachine } from "@xstate/react";
import { createMachine, assign } from "xstate";
import "./Counters.css";

export const counterMachine = createMachine({
  initial: "active",
  context: { count: 0 },
  states: {
    active: {
      on: {
        INCREMENT: {
          actions: assign({ count: (ctx) => ctx.count + 1 })
        },
        DECREMENT: {
          cond: (ctx) => ctx.count > 0,
          actions: assign({
            count: (ctx) => ctx.count - 1
          })
        }
      }
    }
  }
});

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

const Home = () => {
  const [state] = useMachine(counterMachine);
  return <Header text={state.context.count} />;
};

const Controls = () => {
  const [state, send] = useMachine(counterMachine);
  return (
    <>
      <Header text={state.context.count} />
      <Button onClick={() => send("DECREMENT")} label="-" />
      <Button onClick={() => send("INCREMENT")} label="+" />
    </>
  );
};

const StateMachinesWithXState = () => {
  return (
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
  );
};

export default StateMachinesWithXState;
