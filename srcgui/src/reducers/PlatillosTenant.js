import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    errMess: null,
    platillos: []
    }, action) {
    switch(action.type){
        case ActionTypes.ADD_PLATILLOS:
            return {...state, isLoading: false, errMess: null, platillos: action.payload};

        case ActionTypes.PLATILLO_LOADING:
            return {...state, isLoading: true, errMess: null, platillos: []};

        case ActionTypes.PLATILLO_FAILED:
            return {...state, isLoading: false, errMess: action.payload, platillos: []};
        
        case ActionTypes.ADD_PLATILLO:
            var platillo = action.payload;   
            console.log(platillo)      
            return {...state, platillos: state.platillos.concat(platillo)};
        
        case ActionTypes.UPDATE_PLATILLO:
            var platillo = action.payload;   
            return {...state, 
                        platillos: state.platillos.splice(state.platillos.indexOf(state.platillos.filter(platillon => platillon.id === platillo.id)[0]), 1, platillo),
                    ...state};
        default:
            return state;
    }
}