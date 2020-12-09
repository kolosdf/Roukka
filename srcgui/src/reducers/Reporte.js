import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    compras: [],
    ventase: [],
    vendidos: [],
    ventasPlatillo: [],
    ventasPlatilloMes: [],
    ventas: []

    }, action) {
    switch(action.type){
        case ActionTypes.MAS_COMPRAS:
            return {...state, isLoading: false, compras: action.payload};

        case ActionTypes.MAS_COMPRAS_LOADING:
            return {...state, isLoading: true, compras: []};
        
        case ActionTypes.MAS_VENTAS:
            return {...state, isLoading: false, ventase: action.payload};

        case ActionTypes.MAS_VENTAS_LOADING:
            return {...state, isLoading: true, ventase: []};

        case ActionTypes.MAS_VENDIDO:
            return {...state, isLoading: false, vendidos: action.payload};

        case ActionTypes.MAS_VENDIDO_LOADING:
            return {...state, isLoading: true, vendidos: []};

        case ActionTypes.VENTAS_PLATILLO:
            return {...state, isLoading: false, ventasPlatillo: action.payload};

        case ActionTypes.VENTAS_PLATILLO_LOADING:
            return {...state, isLoading: true, ventasPlatillo: []};

        case ActionTypes.VENTAS_PLATILLO_MES:
            return {...state, isLoading: false, ventasPlatilloMes: action.payload};

        case ActionTypes.VENTAS_PLATILLO_MES_LOADING:
            return {...state, isLoading: true, ventasPlatilloMes: []};
        
        case ActionTypes.VENTAS_TOTALES:
            return {...state, isLoading: false, ventas: action.payload};

        case ActionTypes.VENTAS_TOTALES_LOADING:
            return {...state, isLoading: true, ventas: []};
    
        default:
            return state;
    }
}