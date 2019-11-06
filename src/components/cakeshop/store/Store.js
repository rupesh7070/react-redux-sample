import {createStore, combineReducers} from "redux";
import CakeReducer from "../reducers/CakeReducer";
import IceCreameReducer from "../reducers/IceCreameReducer";
import BookReducer from "../../bookProject/reducers/BookReducer";

const rootReducers = combineReducers({
    cake: CakeReducer,
    ice: IceCreameReducer,
    book: BookReducer
})
const store = createStore(rootReducers)

export default store