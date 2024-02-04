import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Balance from "./balance";

function App() {
  return (
    <>
      <Provider store={store}>
        <Balance></Balance>
      </Provider>
    </>
  );
}

export default App;
