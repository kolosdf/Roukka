import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    errMess: null,
    menus: []
    }, action) {
    switch(action.type){
        case ActionTypes.ADD_MENUS:
            return {...state, isLoading: false, errMess: null, menus: action.payload};

        case ActionTypes.MENU_LOADING:
            return {...state, isLoading: true, errMess: null, menus: []};

        case ActionTypes.MENU_FAILED:
            return {...state, isLoading: false, errMess: action.payload, menus: []};
        
        case ActionTypes.ADD_MENU:
            var menu = action.payload;   
            console.log(menu)      
            return {...state, menus: state.menus.concat(menu)};
        
        case ActionTypes.UPDATE_MENU:
            var menu = action.payload;   
            return {...state, 
                        menus: state.menus.splice(state.menus.indexOf(state.menus.filter(menun => menun.id === menu.id)[0]), 1, menu),
                    ...state};
        default:
            return state;
    }
}