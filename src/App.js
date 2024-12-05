import "./App.css";
import { StateProvider } from "./stateManagement/StateContext";
import Counter from "./components/Counter";
import Name from "./components/Name";

function App() {
  return (
    <StateProvider>
      <Counter />
      <Name />
    </StateProvider>
  );
}

export default App;
