export const reducerName = (state, action) => {
  //   console.log("reducerName : ", state, action);
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "CLEAR_NAME":
      return { ...state, name: "" };
    default:
      return state;
  }
};
