import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { ReactQueryDevtools } from "react-query/devtools"
import axios from "axios"
import {
  useQuery,
  useMutation,
  QueryClient,
  QueryClientProvider
} from "react-query"
import "./Counters.css"
import Header from "./Header"
import Button from "./Button"

const useCount = () => {
  return useQuery("count", async () => {
    const { data } = await axios.get("https://our-counter-api.com/count")
    return data
  })
}

const useIncreaseCount = () => {
  return useMutation(() =>
    axios.post("https://our-counter-api.com/increase", {
      onSuccess: () => { queryClient.invalidateQueries("count") }
    })
  )
}

const useDecreaseCount = () => {
  return useMutation(
    () => axios.post("https://our-counter-api.com/descrease"),
    {
      onSuccess: () => { queryClient.invalidateQueries("count") }
    }
  )
}




const Home = () => {
  const { status, data, error } = useCount();
  return status === "loading" ?
      ("Loading...") : status === "error" ?
          (<span>Error: {error.message}</span>)
          : (<Header text={data} />)
}

const Controls = () => {
  const { status, data, error } = useCount()
  const increaseCount = useIncreaseCount()
  const decreaseCount = useDecreaseCount()

  return status === "loading" ? (
    "Loading..."
  ) : status === "error" ? (
    <span>Error: {error.message}</span>
  ) : (
    <>
      <Header text={data} />
      <Button onClick={() => decreaseCount.mutate()} label="-" />
      <Button onClick={() => increaseCount.mutate()} label="+" />
    </>
  )
}
const queryClient = new QueryClient()

const DataFetchingWithReactJQuery = () => (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ReactQueryDevtools />
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
      </Router>
    </QueryClientProvider>
)

export default DataFetchingWithReactJQuery
