import { useContext } from "react";
import { StateContext } from "../../stateManagement/StateContext";

const Counter = () => {
  const { state, dispatch } = useContext(StateContext);
  //   console.log("state : ", state);

  return (
    <div>
      <h1>Counter: {state.reducerCounter.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default Counter;
