import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    ventase: []
    }, action) {
    switch(action.type){
        case ActionTypes.MAS_VENTAS:
            return {...state, isLoading: false, ventase: action.payload};

        case ActionTypes.MAS_VENTAS_LOADING:
            return {...state, isLoading: true, ventase: []};
        
        default:
            return state;
    }
}