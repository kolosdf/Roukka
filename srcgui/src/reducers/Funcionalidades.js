import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    errMess: null,
    funcionalidades: []
    }, action) {
    switch(action.type){
        case ActionTypes.ADD_FUNCS:
            return {...state, isLoading: false, errMess: null, funcionalidades: action.payload};

        case ActionTypes.FUNCS_LOADING:
            return {...state, isLoading: true, errMess: null, funcionalidades: []};

        case ActionTypes.FUNCS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, funcionalidades: []};
        
        default:
            return state;
    }
}