import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    errMess: null,
    usuarios: []
    }, action) {
    switch(action.type){
        case ActionTypes.ADD_USUARIOS:
            return {...state, isLoading: false, errMess: null, usuarios: action.payload};

        case ActionTypes.USUARIOS_LOADING:
            return {...state, isLoading: true, errMess: null, usuarios: []};

        case ActionTypes.USUARIOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, usuarios: []};
        
        case ActionTypes.ADD_USUARIO:
            var usuario = action.payload;   
            console.log(usuario)      
            return {...state, empresas: state.usuarios.concat(usuario)};
        
        case ActionTypes.UPDATE_USUARIO:
            var usuario = action.payload;   
            return {...state, 
                        usuarios: state.usuarios.splice(state.usuarios.indexOf(state.usuarios.filter(plane => plane.id === usuario.id)[0]), 1, usuario),
                    ...state};
        default:
            return state;
    }
}