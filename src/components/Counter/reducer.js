export const reducerCounter = (state, action) => {
//   console.log("reducerCounter : ", state, action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
