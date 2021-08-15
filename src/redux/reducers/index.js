import { combineReducers } from "redux";
import trackReducer from "./trackReducer";

const reducer = combineReducers({
  tracks: trackReducer,
});

export default reducer;
