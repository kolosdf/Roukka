import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    ventasPlatillo: []
    }, action) {
    switch(action.type){
        case ActionTypes.VENTAS_PLATILLO:
            return {...state, isLoading: false, ventasPlatillo: action.payload};

        case ActionTypes.VENTAS_PLATILLO_LOADING:
            return {...state, isLoading: true, ventasPlatillo: []};
        
        default:
            return state;
    }
}