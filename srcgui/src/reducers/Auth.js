import * as ActionTypes from '../config/ActionTypes'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    usuario: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.USER_LOADING:
            return {
                ...state,
                isLoading: true,
            }

        case ActionTypes.USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                usuario: action.payload
            };

        case ActionTypes.LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false,
            }

        case ActionTypes.AUTH_ERROR:
        case ActionTypes.LOGIN_FAIL:
        case ActionTypes.LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                usuario: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state;
    }
}