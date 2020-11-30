import * as ActionTypes from './ActionTypes'
import axios from 'axios';
const API_URL = 'http://localhost:8000/empresas';
const API_URL_U = 'http://localhost:8000/usuarios'; //superusuario roukka
const API_URL_UT = '.localhost:8000/usuarios'; //usuarios del tenant
const API_URL_P = '.localhost:8000/productos';


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
    dispacth(plansLoading());
    const url = `${API_URL}/listarPlan/`;
    return axios.get(url)
        .then(plans => dispacth(addPlans(plans.data)))
        .catch(error => console.log(error));

}

export const postRegisterPlan = (plan) => (dispatch) => {
    const url = `${API_URL}/crearPlan/`;
    return axios.post(url, plan)
        .then(res => {
            dispatch(createMessage({ addPlan: 'Plan Añadido' }))
            dispatch(addPlan(res.data))
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });
}

export const putUpdatePlan = (plan) => (dispatch) => {
    const url = `${API_URL}/modificarPlan/${plan.id}/`;
    return axios.put(url, plan)
        .then(res => {
            dispatch(createMessage({ editPlan: 'Plan Modificado' }))
            dispatch(updatePlan(res.data))
        }
        )
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });

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

export const addPlan = (plan) => ({
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


export const addEmpresa = (empresa) => ({
    type: ActionTypes.ADD_EMPRESA,
    payload: empresa

});



export const postRegisterEmpresa = (empresa) => (dispatch) => {
    const url = `${API_URL}/crear/`;
    return axios.post(url, empresa)
        .then(res => dispatch(addEmpresa(res.data)))
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });
}

// FUNCIONALIDADES

export const getFuncionalidades = () => (dispacth) => {
    dispacth(funcionalidadesLoading(true));
    const url = `${API_URL}/listarFuncion/`;
    return axios.get(url)
        .then(funcionalidades => dispacth(addFuncionalidades(funcionalidades.data)))
        .catch(error => console.log(error));

}


export const addFuncionalidades = (funcionalidades) => ({
    type: ActionTypes.ADD_FUNCIONALIDADES,
    payload: funcionalidades
})


export const funcionalidadesLoading = () => ({
    type: ActionTypes.FUNCIONALIDADES_LOADING,

})

export const funcionalidadesFailed = (errmess) => ({
    type: ActionTypes.FUNCIONALIDADES_FAILED,
    payload: errmess
})

export const addFuncionalidad = (funcionalidad) => ({
    type: ActionTypes.ADD_FUNCIONALIDAD,
    payload: funcionalidad
})

export const updateFuncionalidad = (funcionalidad) => ({
    type: ActionTypes.UPDATE_FUNCIONALIDAD,
    payload: funcionalidad
})

export const postRegisterFuncionalidad = (funcionalidad) => (dispatch) => {
    const url = `${API_URL}/crearFuncion/`;
    return axios.post(url, funcionalidad)
        .then(res => {
            dispatch(createMessage({ addFunc: 'Funcionalidad Añadida' }))
            dispatch(addFuncionalidad(res.data))
        })
        .catch(error => console.log(error));
}

export const putUpdateFuncionalidad = (funcionalidad) => (dispatch) => {
    const url = `${API_URL}/modificarFuncion/${funcionalidad.id}/`;
    return axios.put(url, funcionalidad)
        .then(res => {
            dispatch(createMessage({ editFunc: 'Funcionalidad Modificada' }))
            dispatch(updateFuncionalidad(res.data))
        })
        .catch(error => console.log(error));

}


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


export const postRegisterUsuario = (usuario) => (dispatch) => {
    const url = `${API_URL_U}/crearSuper/`;
    return axios.post(url, usuario)
        .then(res => {
            dispatch(createMessage({ addUser: 'Usuario Añadido' }))
            dispatch(addUsuario(res.data))
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });
}

export const putUpdateUsuario = (usuario) => (dispatch) => {
    const url = `${API_URL_U}/modificarSuper/${usuario.id}/`;
    return axios.put(url, usuario)
        .then(res => {
            dispatch(createMessage({ editUser: 'Usuario Modificado' }))
            dispatch(updateUsuario(res.data))
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });

}

//SUPERUSUARIO TENANT Revisar el error del get si sirve

export const getUsuariosT = (tenant) => (dispatch) => {
    dispatch(usuariosLoadingT(true));
    const url = `http://${tenant}${API_URL_UT}/listarSuper/`;
    return axios.get(url)
        .then(usuarios => dispatch(addUsuariosT(usuarios.data)))
        .catch(error => console.log(error));
}


export const addUsuariosT = (usuarios) => ({
    type: ActionTypes.ADD_USUARIOST,
    payload: usuarios
})


export const usuariosLoadingT = () => ({
    type: ActionTypes.USUARIOST_LOADING,

})

export const usuariosFailedT = (errmess) => ({
    type: ActionTypes.USUARIOST_FAILED,
    payload: errmess
})


export const addUsuarioT = (usuario) => ({
    type: ActionTypes.ADD_USUARIOT,
    payload: usuario

});

export const updateUsuarioT = (usuario) => ({
    type: ActionTypes.UPDATE_USUARIOT,
    payload: usuario
})


export const postRegisterUsuarioT = (usuario, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_UT}/crearSuper/`;
    return axios.post(url, usuario)
        .then(res => {
            dispatch(createMessage({ addUser: 'Usuario Añadido' }))
            dispatch(addUsuarioT(res.data))
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });
}

export const putUpdateUsuarioT = (usuario, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_UT}/modificarSuper/${usuario.id}/`;
    return axios.put(url, usuario)
        .then(res => {
            dispatch(createMessage({ editUser: 'Usuario Modificado' }))
            dispatch(updateUsuarioT(res.data))
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });

}


// INGREDIENTES

export const getIngredientes = (tenant) => (dispacth) => {
    dispacth(ingredientesLoadingT(true));
    const url = `http://${tenant}${API_URL_P}/listarIngrediente/`;
    return axios.get(url)
        .then(ingredientes => dispacth(addIngredientesT(ingredientes.data)))
        .catch(error => console.log(error));
}


export const addIngredientesT = (ingredientes) => ({
    type: ActionTypes.ADD_INGREDIENTES,
    payload: ingredientes
})


export const ingredientesLoadingT = () => ({
    type: ActionTypes.INGREDIENTE_LOADING,

})

export const ingredientesFailedT = (errmess) => ({
    type: ActionTypes.INGREDIENTE_FAILED,
    payload: errmess
})


export const addIngredienteT = (ingrediente) => ({
    type: ActionTypes.ADD_INGREDIENTE,
    payload: ingrediente

});

export const updateIngredienteT = (ingrediente) => ({
    type: ActionTypes.UPDATE_INGREDIENTE,
    payload: ingrediente
})



export const postRegisterIngrediente = (ingrediente, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_P}/crearIngrediente/`;
    return axios.post(url, ingrediente)
        .then(res => {
            dispatch(createMessage({ addIngre: 'Ingrediente Añadido' }))
            dispatch(addIngredienteT(res.data))
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });
}

export const putUpdateIngrediente = (ingrediente, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_P}/modificarIngrediente/${ingrediente.id}/`;
    return axios.put(url, ingrediente)
        .then(res => {
            dispatch(createMessage({ editIngre: 'Ingrediente Modificado' }))
            dispatch(updateIngredienteT(res.data))
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });

}

export const deleteIngrediente = (id, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_P}/crearIngrediente/${id}/`;
    axios.delete(url)
        .then(res => {
            dispatch(createMessage({ deleteIngre: 'Ingrediente Eliminado' }))
            dispatch({
                type: ActionTypes.DELETE_INGREDIENTE,
                payload: id
            })
        }).catch(err => console.log(err))
}






//EMPLEADOS

export const getEmpleados = (tenant) => (dispacth) => {
    dispacth(empleadosLoading(true));
    const url = `http://${tenant}${API_URL_UT}/listarEmpleado/`;
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



export const postRegisterEmpleado = (empleado, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_UT}/crearEmpleado/`;
    return axios.post(url, empleado)
        .then(res => {
            dispatch(createMessage({ addEmp: 'Empleado Añadido' }))
            dispatch(addEmpleado(res.data))
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });
}

export const putUpdateEmpleado = (empleado, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_UT}/modificarEmpleado/${empleado.id}/`;
    return axios.put(url, empleado)
        .then(res => {
            dispatch(createMessage({ editEmp: 'Empleado Modificado' }))
            dispatch(updateEmpleado(res.data))
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });

}

// CLIENTES

export const getClientes = (tenant) => (dispacth) => {
    dispacth(clientesLoading(true));
    const url = `http://${tenant}${API_URL_UT}/listarCliente/`;
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


export const postRegisterCliente = (cliente, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_UT}/crearCliente/`;
    return axios.post(url, cliente)
        .then(res => {
            dispatch(createMessage({ addClie: 'Cliente Añadido' }))
            dispatch(addCliente(res.data))
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });
}

export const putUpdateCliente = (cliente, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_UT}/modificarCliente/${cliente.id}/`;
    return axios.put(url, cliente)
        .then(res => {
            dispatch(createMessage({ editClie: 'Cliente Modificado' }))
            dispatch(updateCliente(res.data))
        })

        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });

}

// PLATILLOS

export const getPlatillos = (tenant) => (dispacth) => {
    dispacth(platillosLoadingT(true));
    const url = `http://${tenant}${API_URL_P}/listarPlatillo/`;
    return axios.get(url)
        .then(platillos => dispacth(addPlatillosT(platillos.data)))
        .catch(error => console.log(error));
}


export const addPlatillosT = (platillos) => ({
    type: ActionTypes.ADD_PLATILLOS,
    payload: platillos
})


export const platillosLoadingT = () => ({
    type: ActionTypes.PLATILLO_LOADING,

})

export const platillosFailedT = (errmess) => ({
    type: ActionTypes.PLATILLO_FAILED,
    payload: errmess
})


export const addPlatilloT = (platillo) => ({
    type: ActionTypes.ADD_PLATILLO,
    payload: platillo

});

export const updatePlatilloT = (platillo) => ({
    type: ActionTypes.UPDATE_PLATILLO,
    payload: platillo
})



export const postRegisterPlatillo = (platillo, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_P}/crearPlatillo/`;
    return axios.post(url, platillo)
        .then(res => {
            dispatch(createMessage({ addPlati: 'Platillo Añadido' }))
            dispatch(addPlatilloT(res.data))
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });
}

export const putUpdatePlatillo = (platillo, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_P}/modificarPlatillo/${platillo.id}/`;
    return axios.put(url, platillo)
        .then(res => {
            dispatch(createMessage({ editPlati: 'Platillo Modificado' }))
            dispatch(updatePlatilloT(res.data))
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });

}

// MENUS

export const getMenus = (tenant) => (dispacth) => {
    dispacth(menusLoadingT(true));
    const url = `http://${tenant}${API_URL_P}/listarMenu/`;
    return axios.get(url)
        .then(menus => dispacth(addMenusT(menus.data)))
        .catch(error => console.log(error));
}


export const addMenusT = (menus) => ({
    type: ActionTypes.ADD_MENUS,
    payload: menus
})


export const menusLoadingT = () => ({
    type: ActionTypes.MENU_LOADING,

})

export const menusFailedT = (errmess) => ({
    type: ActionTypes.MENU_FAILED,
    payload: errmess
})


export const addMenuT = (menu) => ({
    type: ActionTypes.ADD_MENU,
    payload: menu

});

export const updateMenuT = (menu) => ({
    type: ActionTypes.UPDATE_MENU,
    payload: menu
})



export const postRegisterMenu = (menu, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_P}/crearMenu/`;
    return axios.post(url, menu)
        .then(res => {
            dispatch(createMessage({ addMenu: 'Menú Añadido' }))
            dispatch(addMenuT(res.data))
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });
}

export const putUpdateMenu = (menu, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_P}/modificarMenu/${menu.id}/`;
    return axios.put(url, menu)
        .then(res => {
            dispatch(createMessage({ editMenu: 'Menú Modificado' }))
            dispatch(updateMenuT(res.data))
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });

}




// INFORMACION

export const getInformacion = (tenant) => (dispacth) => {
    dispacth(datosLoadingT(true));
    const url = `http://${tenant}${API_URL_P}/verInformacion/`;
    return axios.get(url)
        .then(informacion => dispacth(addInformacionT(informacion.data)))
        .catch(error => console.log(error));
}


export const addDatosT = (datos) => ({
    type: ActionTypes.ADD_DATOS,
    payload: datos
})


export const datosLoadingT = () => ({
    type: ActionTypes.INFORMACION_LOADING,

})

export const datosFailedT = (errmess) => ({
    type: ActionTypes.INFORMACION_FAILED,
    payload: errmess
})


export const addInformacionT = (informacion) => ({
    type: ActionTypes.ADD_INFORMACION,
    payload: informacion

});

export const updateInformacionT = (informacion) => ({
    type: ActionTypes.UPDATE_INFORMACION,
    payload: informacion
})



export const postRegisterInformacion = (informacion, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_P}/registrarInformacion/`;
    return axios.post(url, informacion)
        .then(res => {
            dispatch(createMessage({ addIngre: 'informacion registrada' }))
            dispatch(addInformacionT(res.data))
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });
}

export const putUpdateInformacion = (informacion, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_P}/modificarInformacion/${informacion.id}/`;
    return axios.put(url, informacion)
        .then(res => {
            dispatch(createMessage({ editIngre: 'Informacion Modificada' }))
            dispatch(updateIngredienteT(res.data))
        })
        .catch(err => {
            const error = {
                msg: err.response.data,
                status: err.response.status
            }
            dispatch(getError(error))
        });

}

export const deleteInformacion = (id, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_P}/registrarInformacion/${id}/`;
    axios.delete(url)
        .then(res => {
            dispatch(createMessage({ deleteIngre: 'Informacion Borrada' }))
            dispatch({
                type: ActionTypes.DELETE_INGREDIENTE,
                payload: id
            })
        }).catch(err => console.log(err))
}





export const addCarrito = (carrito) => ({
    type: ActionTypes.ADD_CARRITO,
    payload: carrito

});


// ERRORS

export const getError = (error) => ({
    type: ActionTypes.GET_ERRORS,
    payload: error
})


//MESSAGES

export const createMessage = msg => {
    return {
        type: ActionTypes.CREATE_MESSAGE,
        payload: msg
    }
}


