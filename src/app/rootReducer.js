import { combineReducers } from "redux";
import CounterReducer from "./counterReducer";
import TodoReducer from "./todoReducer";

export const rootReducer = combineReducers({
  counter: CounterReducer,
  todo: TodoReducer,
});
