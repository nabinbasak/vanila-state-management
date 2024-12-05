// combineReducers.js
export const combineReducers = (reducers) => {
  return (state, action) => {
    /*console.log(
      "combineReducers File : ",
      state,
      action,
      Object.keys(reducers)
    );*/
    return Object.keys(reducers).reduce((nextState, key) => {
      /*console.log(
        "combineReducers File reduce : ",
        " | nextState : ",
        nextState,
        " | key : ",
        key,
        " | reducers[key] : ",
        reducers[key],
        " | nextState[key] : ",
        " | nextState[key] :",
        nextState[key],
        " | action :",
        action
      );*/
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};
