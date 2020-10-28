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


export const getPlans = (tenant) => (dispacth) => { 
    dispacth(plansLoading(true));
    const url = `${API_URL}/listarPlan/`;
    return axios.get(url)
        .then(plans => dispacth(addPlans(plans.data)))    
        .catch(error => console.log(error));
    
}

export const  postRegisterPlan = (plan) => (dispatch) => {
    const url = `${API_URL}/crearPlan/`;
    return axios.post(url, plan)
        .then(res => dispatch(addPlan(res.data)))
        .catch(error => console.log(error));
}

export const putUpdatePlan = (plan) => (dispatch) => {
    const url = `${API_URL}/modificarPlan/${plan.id}/`;
    return axios.put(url, plan)
        .then(res => dispatch(updatePlan(res.data)))
        .catch(error => console.log(error));

}


export const updatePlan = (plan) => ({
    type: ActionTypes.UPDATE_PLAN,
    payload: plan
})


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

export const addPlan = ( plan) => ({
    type: ActionTypes.ADD_PLAN,
    payload: plan
    
});


export const getEmpresas = () => (dispacth) => { 
    dispacth(plansLoading(true));
    const url = `${API_URL}/`;
    return axios.get(url)
        .then(empresas => dispacth(addEmpresas(empresas.data)))    
        .catch(error => console.log(error));
    
}



export const addEmpresas = (empresas) => ({
    type: ActionTypes.ADD_EMPRESAS,
    payload: empresas
})


export const empresasLoading = () => ({
    type: ActionTypes.EMPRESAS_LOADING,

})

export const empresasFailed = (errmess) => ({
    type: ActionTypes.EMPRESAS_FAILED,
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

export const getFuncs = () => (dispacth) => { 
    dispacth(funcsLoading(true));
    const url = `${API_URL}/listarFuncion/`;
    return axios.get(url)
        .then(funcionalidades => dispacth(addFuncs(funcionalidades.data)))    
        .catch(error => console.log(error));
    
}


export const addFuncs = (funcionalidades) => ({
    type: ActionTypes.ADD_FUNCS,
    payload: funcionalidades
})


export const funcsLoading = () => ({
    type: ActionTypes.FUNCS_LOADING,

})

export const funcsFailed = (errmess) => ({
    type: ActionTypes.FUNCS_FAILED,
    payload: errmess
})
