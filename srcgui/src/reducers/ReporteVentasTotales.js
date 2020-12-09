import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    ventas: []
    }, action) {
    switch(action.type){
        case ActionTypes.VENTAS_TOTALES:
            return {...state, isLoading: false, ventas: action.payload};

        case ActionTypes.VENTAS_TOTALES_LOADING:
            return {...state, isLoading: true, ventas: []};
        
        default:
            return state;
    }
}