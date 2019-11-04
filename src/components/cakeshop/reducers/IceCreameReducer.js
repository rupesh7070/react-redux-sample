import {BUY_ICECREAME} from "../constants/Constant";

const initialStateIceCreame = {
    noOfIceCreame: 20
}

export default function IceCreameReducer(state=initialStateIceCreame, action) {
    switch (action.type) {
        case BUY_ICECREAME:
            return {
                ...state,
                noOfIceCreame: state.noOfIceCreame - 1
            }
        default:
            return state
    }

}