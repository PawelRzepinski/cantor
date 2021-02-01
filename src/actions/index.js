import axios from 'axios';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const UPDATE_CURRENCY = 'UPDATE_Currency';




export const currencyUpdate = (currency) => {
    return {
        type: UPDATE_CURRENCY,
        payload: {currency}
    }
};


export const authenticate = (username, password) => dispatch => {
    dispatch({ type: AUTH_REQUEST });

    return axios
        .post('http://localhost:9000/api/user/login', {
            username,
            password
        })
        .then(payload => {
            console.log(payload);
            dispatch({ type: AUTH_SUCCESS, payload });
        })
        .catch(error => console.log(error))
};

