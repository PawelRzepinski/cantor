import { AUTH_REQUEST, AUTH_SUCCESS, UPDATE_CURRENCY } from "../actions/index.js";

const initialState = {
    currency: [
        {
            "currency": "euro",
            "code": "EUR",
            "bid": 4.4941,
            "ask": 4.5849
        },
    ]
}

const rootReducers = (state = initialState, action) => {
    switch (action.type) {
        case (UPDATE_CURRENCY):
            return {
                ...state,
                currency: action.payload.currency
            }
    
        default:
            return state
    }
}

export default rootReducers;