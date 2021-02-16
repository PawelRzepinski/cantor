import { act } from "react-dom/test-utils";
import { 
    AUTH_REQUEST, 
    AUTH_SUCCESS, 
    AUTH_FAILURE, 
    UPDATE_CURRENCY, 
    LOGOUT_SUCCESS
} from "../actions/index.js";

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
        case UPDATE_CURRENCY:
            return {
                ...state,
                currency: action.payload.currency
            }

        case AUTH_SUCCESS:
            console.log('success')
            console.log(action.payload.data._id)
            return {
                ...state,
                userId: action.payload.data._id,
                userName: action.payload.data.username,
            }    
    
        case AUTH_FAILURE:
            return {
                ...state,
                loginStatus: 'fail'
            }

        case LOGOUT_SUCCESS:
            return {
                ...state,
                userId: null,
                userName: null
            }
        default:
            return state
    }
}

export default rootReducers;