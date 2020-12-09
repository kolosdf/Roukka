import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    compras: []
    }, action) {
    switch(action.type){
        case ActionTypes.MAS_COMPRAS:
            return {...state, isLoading: false, compras: action.payload};

        case ActionTypes.MAS_COMPRAS_LOADING:
            return {...state, isLoading: true, compras: []};
        
        default:
            return state;
    }
}