import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    errMess: null,
    empresas: []
    }, action) {
    switch(action.type){
        case ActionTypes.ADD_EMPRESAS:
            return {...state, isLoading: false, errMess: null, empresas: action.payload};

        case ActionTypes.EMPRESAS_LOADING:
            return {...state, isLoading: true, errMess: null, empresas: []};

        case ActionTypes.EMPRESAS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, empresas: []};
        
        case ActionTypes.ADD_EMPRESA:
            var empresa = action.payload;         
            return {...state, empresas: state.empresas.concat(empresa)};
    
        default:
            return state;
    }
}