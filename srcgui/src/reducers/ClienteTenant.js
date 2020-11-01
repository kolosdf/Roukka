import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    errMess: null,
    clientes: []
    }, action) {
    switch(action.type){
        case ActionTypes.ADD_CLIENTES:
            return {...state, isLoading: false, errMess: null, clientes: action.payload};

        case ActionTypes.CLIENTES_LOADING:
            return {...state, isLoading: true, errMess: null, clientes: []};

        case ActionTypes.CLIENTES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, clientes: []};
        
        case ActionTypes.ADD_CLIENTE:
            var cliente = action.payload;   
            console.log(cliente)      
            return {...state, clientes: state.clientes.concat(cliente)};
        
        case ActionTypes.UPDATE_CLIENTE:
            var cliente = action.payload;   
            return {...state, 
                        clientes: state.clientes.splice(state.clientes.indexOf(state.clientes.filter(clienten => clienten.id === cliente.id)[0]), 1, cliente),
                    ...state};
        default:
            return state;
    }
}