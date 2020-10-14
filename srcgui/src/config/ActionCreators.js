import * as ActionTypes from './ActionTypes'
import axios from 'axios';
const API_URL = 'http://localhost:8000/empresas';


/* export const getPlans =  () => (dispacth) => {
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
} */


export const getPlans = () => (dispacth) => { 
    dispacth(plansLoading(true));
    const url = `${API_URL}/listarPlan/`;
    return axios.get(url)
        .then(plans => dispacth(addPlans(plans.data)))    
        .catch(error => console.log(error));
    
}



export const addPlans = (plans) => ({
    type: ActionTypes.ADD_PLANS,
    payload: plans
})


export const plansLoading = () => ({
    type: ActionTypes.PLANS_LOADING,

})

export const plansFailed = (errmess) => ({
    type: ActionTypes.PLANS_FAILED,
    payload: errmess
})


export const addEmpresa = ( empresa) => ({
    type: ActionTypes.ADD_EMPRESA,
    payload: empresa
});



export const  postRegisterEmpresa = (empresa) => (dispatch) => {
    const url = `${API_URL}/crear/`;
    return axios.post(url, empresa)
        .then(res => dispatch(addEmpresa(res.data)))
        .catch(error => console.log(error));
}

// FUNCIONALIDADES

export const getFunc = () => (dispacth) => { 
    dispacth(funcLoading(true));
    const url = `${API_URL}/listarFuncion/`;
    return axios.get(url)
        .then(funcionalidades => dispacth(addFunc(funcionalidades.data)))    
        .catch(error => console.log(error));
    
}


export const addFunc = (funcionalidades) => ({
    type: ActionTypes.ADD_FUNCS,
    payload: funcionalidades
})


export const funcLoading = () => ({
    type: ActionTypes.FUNCS_LOADING,

})

export const funcFailed = (errmess) => ({
    type: ActionTypes.FUNCS_FAILED,
    payload: errmess
})
