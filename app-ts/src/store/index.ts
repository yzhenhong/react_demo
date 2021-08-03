import { createStore } from "redux";
import reducer from "./reducer/index";

const store = createStore(
  reducer,
);

export default store;

// npm i redux react-redux react-thunk @types/react-redux @types/react-thunk