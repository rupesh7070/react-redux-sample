import {createStore,combineReducers} from "redux";
import CakeReducer from "../reducers/CakeReducer";
import IceCreameReducer from "../reducers/IceCreameReducer";

const rootReducers = combineReducers({
    cake :CakeReducer,
    ice :IceCreameReducer
})
const store = createStore(rootReducers)

export default store