import {createStore, combineReducers} from "redux";
import CakeReducer from "../reducers/CakeReducer";
import IceCreameReducer from "../reducers/IceCreameReducer";
import BookReducer from "../../bookProject/reducers/BookReducer";
import CounterMathReducer from "../../pluralSightProject/CounterMathReducer";

const rootReducers = combineReducers({
    cake: CakeReducer,
    ice: IceCreameReducer,
    book: BookReducer,
    mathCount: CounterMathReducer
})
const store = createStore(rootReducers)

export default store