import {createStore} from "redux";
import CakeReducer from "../reducers/CakeReducer";

const store = createStore(CakeReducer)

export default store