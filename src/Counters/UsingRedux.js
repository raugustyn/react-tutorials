import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch, Provider } from "react-redux";
import "./Counters.css";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    }
  }
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer }
});

const { increment, decrement } = counterSlice.actions;

const Header = ({ text }) => <h1>{text}</h1>;

const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  return <Header text={count} />;
};

const Controls = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <Header text={count} />
      {count > 0 ? (
        <Button onClick={() => dispatch(decrement())} label="-" />
      ) : null}
      <Button onClick={() => dispatch(increment())} label="+" />
    </>
  );
};

const UsingRedux = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default UsingRedux;
