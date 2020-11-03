import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    errMess: null,
    usuariosT: []
    }, action) {
    switch(action.type){
        case ActionTypes.ADD_USUARIOST:
            return {...state, isLoading: false, errMess: null, usuariosT: action.payload};

        case ActionTypes.USUARIOST_LOADING:
            return {...state, isLoading: true, errMess: null, usuariosT: []};

        case ActionTypes.USUARIOST_FAILED:
            return {...state, isLoading: false, errMess: action.payload, usuariosT: []};
        
        case ActionTypes.ADD_USUARIOT:
            var usuario = action.payload;      
            return {...state, usuariosT: state.usuariosT.concat(usuario)};
        
        case ActionTypes.UPDATE_USUARIOT:
            var usuario = action.payload;   
            return {...state, 
                        usuariosT: state.usuariosT.splice(state.usuariosT.indexOf(state.usuariosT.filter(user => user.id === usuario.id)[0]), 1, usuario),
                    ...state};
        default:
            return state;
    }
}