import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    errMess: null,
    plans: []
    }, action) {
    switch(action.type){
        case ActionTypes.ADD_PLANS:
            return {...state, isLoading: false, errMess: null, plans: action.payload};

        case ActionTypes.PLANS_LOADING:
            return {...state, isLoading: true, errMess: null, plans: []};

        case ActionTypes.PLANS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, plans: []};
        
        default:
            return state;
    }
}