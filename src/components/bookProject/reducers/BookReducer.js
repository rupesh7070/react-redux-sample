const initialState = {
    bookName: "",
    bookList: [
        {name: "First Book", price: 10},
        {name: "Second Book Book", price: 10}
    ]
}


export default function bookReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                ...state,
                bookList: state.bookList.push(action.payload)
            }
        default:
            return state
    }
}