import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    errMess: null,
    funcionalidades: []
    }, action) {
    switch(action.type){
        case ActionTypes.ADD_FUNCIONALIDADES:
            return {...state, isLoading: false, errMess: null, funcionalidades: action.payload};

        case ActionTypes.FUNCIONALIDADES_LOADING:
            return {...state, isLoading: true, errMess: null, funcionalidades: []};

        case ActionTypes.FUNCIONALIDADES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, funcionalidades: []};

        case ActionTypes.ADD_FUNCIONALIDAD:
            var funcionalidad = action.payload;        
            return {...state, funcionalidades: state.funcionalidades.concat(funcionalidad)};
        
        case ActionTypes.UPDATE_FUNCIONALIDAD:
            var funcionalidad = action.payload;   
            return {...state, 
                        funcionalidades: state.funcionalidades.splice(state.funcionalidades.indexOf(state.funcionalidades.filter(func => func.id === funcionalidad.id)[0]), 1, funcionalidad),
                    ...state};
        
        default:
            return state;
    }
}