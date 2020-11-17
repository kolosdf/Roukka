import * as ActionTypes from '../config/ActionTypes'

const initialState = {
    msg: {},
    status: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status
            }
        default:
            return state;
    }
}