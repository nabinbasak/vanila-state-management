import { useContext } from "react";
import { StateContext } from "../../stateManagement/StateContext";

const Name = () => {
  const { state, dispatch } = useContext(StateContext);

  return (
    <div>
      <h2>Name: {state.reducerName.name}</h2>
      <button onClick={() => dispatch({ type: "SET_NAME", payload: "John" })}>
        Set Name
      </button>
      <button onClick={() => dispatch({ type: "CLEAR_NAME" })}>
        Clear Name
      </button>
    </div>
  );
};

export default Name;
