import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    ventasPlatilloM: []
    }, action) {
    switch(action.type){
        case ActionTypes.VENTAS_PLATILLO_MES:
            return {...state, isLoading: false, ventasPlatilloM: action.payload};

        case ActionTypes.VENTAS_PLATILLO_MES_LOADING:
            return {...state, isLoading: true, ventasPlatilloM: []};
        
        default:
            return state;
    }
}