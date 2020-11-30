import * as ActionTypes from '../config/ActionTypes'

export default function reducer(state = {
    isLoading: true,
    errMess: null,
    datos: []
}, action) {
    switch (action.type) {
        case ActionTypes.ADD_DATOS:
            return { ...state, isLoading: false, errMess: null, datos: action.payload };

        case ActionTypes.INFORMACION_LOADING:
            return { ...state, isLoading: true, errMess: null, datos: [] };

        case ActionTypes.INFORMACION_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, datos: [] };

        case ActionTypes.ADD_INFORMACION:
            var informacion = action.payload;
            console.log(informacion)
            return { ...state, datos: state.datos.concat(informacion) };
        case ActionTypes.DELETE_INFORMACION:
            return {
                ...state,
                datos: state.datos.filter(dato => dato.id !== action.payload)
            }
        case ActionTypes.UPDATE_INFORMACION:
            var informacion = action.payload;
            return {
                ...state,
                datos: state.datos.splice(state.datos.indexOf(state.datos.filter(daton => daton.id === informacion.id)[0]), 1, informacion),
                ...state
            };
        default:
            return state;
    }
}
