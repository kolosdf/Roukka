import * as ActionTypes from './ActionTypes'
import axios from 'axios';
const API_URL = 'http://localhost:8000/empresas';
const API_URL_U = 'http://localhost:8000/usuarios'; //superusuario roukka
const API_URL_UT = 'http://empresa1.localhost:8000/usuarios'; //usuarios del tenant


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

//EMPRESAS

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

//SUPERUSUARIO ROUKKA

export const getUsuarios = () => (dispacth) => { 
    dispacth(usuariosLoading(true));
    const url = `${API_URL_U}/listarSuper/`;
    return axios.get(url)
        .then(usuarios => dispacth(addUsuarios(usuarios.data)))    
        .catch(error => console.log(error));    
}


export const addUsuarios = (usuarios) => ({
    type: ActionTypes.ADD_USUARIOS,
    payload: usuarios
})


export const usuariosLoading = () => ({
    type: ActionTypes.USUARIOS_LOADING,

})

export const usuariosFailed = (errmess) => ({
    type: ActionTypes.USUARIOS_FAILED,
    payload: errmess
})


export const addUsuario = (usuario) => ({
    type: ActionTypes.ADD_USUARIO,
    payload: usuario
    
});

export const updateUsuario = (usuario) => ({
    type: ActionTypes.UPDATE_USUARIO,
    payload: usuario
})


export const  postRegisterUsuario = (usuario) => (dispatch) => {
    const url = `${API_URL_U}/crearSuper/`;
    return axios.post(url, usuario)
        .then(res => dispatch(addUsuario(res.data)))
        .catch(error => console.log(error));
}

export const putUpdateUsuario = (usuario) => (dispatch) => {
    const url = `${API_URL_U}/modificarSuper/${usuario.id}/`;
    return axios.put(url, usuario)
        .then(res => dispatch(updateUsuario(res.data)))
        .catch(error => console.log(error));

}

//SUPERUSUARIO TENANT

export const getUsuariosT = () => (dispacth) => { 
    dispacth(usuariosLoadingT(true));
    const url = `${API_URL_UT}/listarSuper/`;
    return axios.get(url)
        .then(usuarios => dispacth(addUsuariosT(usuarios.data)))    
        .catch(error => console.log(error));    
}


export const addUsuariosT = (usuarios) => ({
    type: ActionTypes.ADD_USUARIOS,
    payload: usuarios
})


export const usuariosLoadingT = () => ({
    type: ActionTypes.USUARIOS_LOADING,

})

export const usuariosFailedT = (errmess) => ({
    type: ActionTypes.USUARIOS_FAILED,
    payload: errmess
})


export const addUsuarioT = (usuario) => ({
    type: ActionTypes.ADD_USUARIO,
    payload: usuario
    
});

export const updateUsuarioT = (usuario) => ({
    type: ActionTypes.UPDATE_USUARIO,
    payload: usuario
})


export const  postRegisterUsuarioT = (usuario) => (dispatch) => {
    const url = `${API_URL_UT}/crearSuper/`;
    return axios.post(url, usuario)
        .then(res => dispatch(addUsuarioT(res.data)))
        .catch(error => console.log(error));
}

export const putUpdateUsuarioT = (usuario) => (dispatch) => {
    const url = `${API_URL_UT}/modificarSuper/${usuario.id}/`;
    return axios.put(url, usuario)
        .then(res => dispatch(updateUsuarioT(res.data)))
        .catch(error => console.log(error));

}

//EMPLEADOS

export const getEmpleados = () => (dispacth) => { 
    dispacth(empleadosLoading(true));
    const url = `${API_URL_UT}/listarEmpleado`;
    return axios.get(url)
        .then(empleados => dispacth(addEmpleados(empleados.data)))    
        .catch(error => console.log(error));
    
}

export const addEmpleados = (empleados) => ({
    type: ActionTypes.ADD_EMPLEADOS,
    payload: empleados
})


export const empleadosLoading = () => ({
    type: ActionTypes.EMPLEADOS_LOADING,

})

export const empleafosFailed = (errmess) => ({
    type: ActionTypes.EMPLEADOS_FAILED,
    payload: errmess
})


export const addEmpleado = (empleado) => ({
    type: ActionTypes.ADD_EMPLEADO,
    payload: empleado
    
});

export const updateEmpleado = (empleado) => ({
    type: ActionTypes.UPDATE_EMPLEADO,
    payload: empleado
})



export const  postRegisterEmpleado = (empleado) => (dispatch) => {
    const url = `${API_URL_UT}/crearEmpleado/`;
    return axios.post(url, empleado)
        .then(res => dispatch(addEmpresa(res.data)))
        .catch(error => console.log(error));
}

export const putUpdateEmpleado = (empleado) => (dispatch) => {
    const url = `${API_URL_UT}/modificarEmpleado/${empleado.id}/`;
    return axios.put(url, empleado)
        .then(res => dispatch(updateEmpleado(res.data)))
        .catch(error => console.log(error));

}

// CLIENTES

export const getClientes = () => (dispacth) => { 
    dispacth(clientesLoading(true));
    const url = `${API_URL_UT}/listarCliente`;
    return axios.get(url)
        .then(clientes => dispacth(addClientes(clientes.data)))    
        .catch(error => console.log(error));
    
}

export const addClientes = (clientes) => ({
    type: ActionTypes.ADD_CLIENTES,
    payload: clientes
})


export const clientesLoading = () => ({
    type: ActionTypes.CLIENTES_LOADING,

})

export const clientesFailed = (errmess) => ({
    type: ActionTypes.CLIENTES_FAILED,
    payload: errmess
})


export const addCliente = (cliente) => ({
    type: ActionTypes.ADD_CLIENTE,
    payload: cliente
    
});

export const updateCliente = (cliente) => ({
    type: ActionTypes.UPDATE_CLIENTE,
    payload: cliente
})


export const  postRegisterCliente = (cliente) => (dispatch) => {
    const url = `${API_URL_UT}/crearCliente/`;
    return axios.post(url, cliente)
        .then(res => dispatch(addCliente(res.data)))
        .catch(error => console.log(error));
}

export const putUpdateCliente = (cliente) => (dispatch) => {
    const url = `${API_URL_UT}/modificarCliente/${cliente.id}/`;
    return axios.put(url, cliente)
        .then(res => dispatch(updateCliente(res.data)))
        .catch(error => console.log(error));

}