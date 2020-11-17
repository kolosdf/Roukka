import * as ActionTypes from '../config/ActionTypes'


export default function reducer(state = {}, action) {
    switch (action.type) {
        case ActionTypes.CREATE_MESSAGE:
            return (state = action.payload)
        default:
            return state;
    }
}