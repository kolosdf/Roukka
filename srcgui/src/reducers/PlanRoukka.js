import * as ActionTypes from '../config/ActionTypes'

export default function reducer (state = {
    isLoading: true,
    errMess: null,
    plans: []
    }, action) {
    switch(action.type){
        case ActionTypes.ADD_PLANS:
            return {...state, isLoading: false, errMess: null, plans: action.payload};

        case ActionTypes.PLANS_LOADING:
            return {...state, isLoading: true, errMess: null, plans: []};

        case ActionTypes.PLANS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, plans: []};

        case ActionTypes.ADD_PLAN:
            var plan = action.payload;   
            console.log("Este es el plan ",plan)      
            return {...state, plans: state.plans.concat(plan)};
        
        case ActionTypes.UPDATE_PLAN:
            var plan = action.payload;   
            return {...state, 
                        plans: state.plans.splice(state.plans.indexOf(state.plans.filter(plane => plane.id === plan.id)[0]), 1, plan),
                    ...state};
        default:
            return state;
    }
}