import * as ActionTypes from './ActionTypes'
import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000';



export const getPlans =  () => (dispacth) => {
    dispacth(plansLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => {
            if(response.ok){
                return response;
            }
            else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errmess = new Error(error.message) ;
            throw errmess;
        })
        .then(response => response.json())
        .then(dishes => dispacth(addPlans(dishes)))
        .catch(error  => dispacth(plansFailed(error.message)))
}


export const getPlanss = () => (dispacth) => { 
    dispacth(dishesLoading(true));
    const url = `${API_URL}/auth/user/`;
    return axios.get(url)
        .then(plans => dispacth(addPlans(plans.data)))    
        .catch(error => console.log(error));
    
}

export const addPlans = (plans) => ({
    type: ActionTypes.ADD_PLANS,
    payload: plans
})


export const plansLoading = () => ({
    type: ActionTypes.DISHES_LOADING,

})

export const plansFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
})


