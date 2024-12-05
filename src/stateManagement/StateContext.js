// StateContext.js
import React, { createContext, useReducer } from "react";
import rootReducer from "./rootReducer";

// Initial state structure
const initialState = {
  reducerCounter: { count: 0 },
  reducerName: { name: "" },
};

// Create the context
const StateContext = createContext();

// Create the provider
const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  console.group("Next State");
  console.log(state);
  console.groupEnd();
  //   console.log("StateProvider : ", state, " | rootReducer : ", rootReducer);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// Export the context and provider
export { StateContext, StateProvider };
