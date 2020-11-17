import * as ActionTypes from '../config/ActionTypes'

export default function reducer(state = {
    isLoading: true,
    errMess: null,
    ingredientes: []
}, action) {
    switch (action.type) {
        case ActionTypes.ADD_INGREDIENTES:
            return { ...state, isLoading: false, errMess: null, ingredientes: action.payload };

        case ActionTypes.INGREDIENTE_LOADING:
            return { ...state, isLoading: true, errMess: null, ingredientes: [] };

        case ActionTypes.INGREDIENTE_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, ingredientes: [] };

        case ActionTypes.ADD_INGREDIENTE:
            var ingrediente = action.payload;
            console.log(ingrediente)
            return { ...state, ingredientes: state.ingredientes.concat(ingrediente) };
        case ActionTypes.DELETE_INGREDIENTE:
            return {
                ...state,
                ingredientes: state.ingredientes.filter(ingre => ingre.id !== action.payload)
            }
        case ActionTypes.UPDATE_INGREDIENTE:
            var ingrediente = action.payload;
            return {
                ...state,
                ingredientes: state.ingredientes.splice(state.ingredientes.indexOf(state.ingredientes.filter(ingredienten => ingredienten.id === ingrediente.id)[0]), 1, ingrediente),
                ...state
            };
        default:
            return state;
    }
}