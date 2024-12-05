// rootReducer.js
import { reducerCounter } from "../components/Counter/reducer";
import { reducerName } from "../components/Name/reducer";

import { combineReducers } from "./combineReducers";

const rootReducer = combineReducers({
  reducerCounter,
  reducerName,
});

export default rootReducer;
