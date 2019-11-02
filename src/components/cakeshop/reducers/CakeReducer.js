import {BUY_CAKE} from "../constants/Constant";
import {BUY_ICECREAME} from "../constants/Constant";

const initialState = {
    noOfCake: 10,
    noOfIceCreame: 20
}

export default function cakeReducer(state = initialState, action) {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                noOfCake: state.noOfCake - 1
            }
        case BUY_ICECREAME:
            return {
                ...state,
                noOfIceCreame: state.noOfIceCreame - 1
            }

        default:
            return state
    }
}