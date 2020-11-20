import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    errMess: null,
    empleados: []
    }, action) {
    switch(action.type){
        case ActionTypes.ADD_EMPLEADOS:
            return {...state, isLoading: false, errMess: null, empleados: action.payload};

        case ActionTypes.EMPLEADOS_LOADING:
            return {...state, isLoading: true, errMess: null, empleados: []};

        case ActionTypes.EMPLEADOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, empleados: []};
        
        case ActionTypes.ADD_EMPLEADO:
            var empleado = action.payload;   
            console.log(empleado)      
            return {...state, empleados: state.empleados.concat(empleado)};
        
        case ActionTypes.UPDATE_EMPLEADO:
            var empleado = action.payload;   
            return {...state, 
                        empleados: state.empleados.splice(state.empleados.indexOf(state.empleados.filter(plane => plane.id === empleado.id)[0]), 1, empleado),
                    ...state};
        default:
            return state;
    }
}