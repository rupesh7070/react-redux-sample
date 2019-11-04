import {BUY_CAKE} from "../constants/Constant";

const initialStateCake = {
    noOfCake: 10

}

export default function CakeReducer(state = initialStateCake, action) {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                noOfCake: state.noOfCake - 1
            }
        default:
            return state
    }
}