import './App.css'
import LocalComponentStateInReact from "./Counters/LocalComponentStateInReact"
import ComponentPropsInReact from "./Counters/ComponentPropsInReact"
import RoutingInReact from "./Counters/RoutingInReact"
import ContextPlusUseReducer from "./Counters/ContextPlusUseReducer"
import UsingRedux from "./Counters/UsingRedux"
import AtomicStateWithRecoil from "./Counters/AtomicStateWithRecoil"
import StateMachinesWithXState from "./Counters/StateMachinesWithXState"
import DataFetchingWithReactJQuery from "./Counters/DataFetchingWithReactJQuery"

function Para(caption, description, component) { return {caption, description, component} }

function App() {

    const paras = [
        Para('Local component state', 'Jedna komponenta a změněná hodnota je používána přímo v ní.', <LocalComponentStateInReact/>),
        Para('Component props', 'Dvě komponenty, slave komponenta je v využívána v komponentě s čítačem a jeho hodnota do ní předána jako property.',
            <ComponentPropsInReact/>),
        Para('Routing', 'To teda nevim na co tenhle priklad je :-(', <RoutingInReact/>),
        Para('Using Context + useReducer', 'Vše zaobalující komponenta poskytuje kontext. Slave si z nich vyberou hodnotu, master využívají její změnu.',
            <ContextPlusUseReducer/>),
        Para('Using Redux', '', <UsingRedux/>),
        Para('AtomicStateWithRecoil', '', <AtomicStateWithRecoil/>),
        Para('AtomicStateWithRecoil', 'copy', <AtomicStateWithRecoil/>),
        Para('State machines with XState', '', <StateMachinesWithXState/>),
        Para('Data fetching with React Query', '', <DataFetchingWithReactJQuery/>)
    ]
    return (
        <div className="App">
            <a href="https://blog.logrocket.com/how-to-choose-the-right-react-state-management-solution/">
                How to choose the right React state management solution
            </a>

            {paras.map((para, index) => (
                <div key={index}>
                    <h2>{para.caption}</h2>
                    <div className="ComponentDiv">
                        {para.description}
                        <table align="center">
                            <tbody>
                            <tr>
                                <td><p>Instance 1</p>{para.component}</td>
                                <td><p>Instance 2</p>{para.component}</td>
                                <td><p>Instance 3</p>{para.component}</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>

            ))}


        </div>
    );
}

export default App;
