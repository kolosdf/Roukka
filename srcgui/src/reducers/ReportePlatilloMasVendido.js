import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    vendidos: []
    }, action) {
    switch(action.type){
        case ActionTypes.MAS_VENDIDO:
            return {...state, isLoading: false, vendidos: action.payload};

        case ActionTypes.MAS_VENDIDO_LOADING:
            return {...state, isLoading: true, vendidos: []};
        
        default:
            return state;
    }
}