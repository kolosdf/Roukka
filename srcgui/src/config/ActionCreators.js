import * as ActionTypes from './ActionTypes'
import axios from 'axios';
const API_URL = 'http://localhost:8000/empresas';
const API_URL_U = 'http://localhost:8000/usuarios'; //superusuario roukka
const API_URL_UT = '.localhost:8000/usuarios'; //usuarios del tenant
const API_URL_LOGO = 'localhost:8000/usuarios'
const API_URL_P = '.localhost:8000/productos';
const API_URL_V = '.localhost:8000/ventas';
const API_URL_R = '.localhost:8000/reportes';


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
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const putUpdatePlan = (plan) => (dispatch) => {
    const url = `${API_URL}/modificarPlan/${plan.id}/`;
    return axios.put(url, plan)
        .then(res => {
            dispatch(createMessage({ editPlan: 'Plan Modificado' }))
            dispatch(updatePlan(res.data))
        }
        )
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

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

export const UpdateTema = (empresas) => ({
    type: ActionTypes.UPDATE_TEMA,
    payload: empresas
})

export const postRegisterTema = (tema, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_P}/registrarTema/`;
    return axios.post(url, tema)
        .then(res => {
            dispatch(createMessage({ addInfo: 'informacion registrada' }))
            dispatch(addInformacionT(res.data))
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
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
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
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
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const putUpdateFuncionalidad = (funcionalidad) => (dispatch) => {
    const url = `${API_URL}/modificarFuncion/${funcionalidad.id}/`;
    return axios.put(url, funcionalidad)
        .then(res => {
            dispatch(createMessage({ editFunc: 'Funcionalidad Modificada' }))
            dispatch(updateFuncionalidad(res.data))
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

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
            dispatch(addUsuario(res.data.usuario))
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const putUpdateUsuario = (usuario) => (dispatch) => {
    const url = `${API_URL_U}/modificarSuper/${usuario.id}/`;
    return axios.put(url, usuario)
        .then(res => {
            dispatch(createMessage({ editUser: 'Usuario Modificado' }))
            dispatch(updateUsuario(res.data))
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

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
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const putUpdateUsuarioT = (usuario, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_UT}/modificarSuper/${usuario.id}/`;
    return axios.put(url, usuario)
        .then(res => {
            dispatch(createMessage({ editUser: 'Usuario Modificado' }))
            dispatch(updateUsuarioT(res.data))
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

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


export const postRegisterInformacion = (informacion) => (dispatch) => {
    const url = `/registrarInformacion/`;
    return axios.post(url, informacion)
        .then(res => {
            dispatch(createMessage({ addFunc: 'Informacion Añadida' }))
            dispatch(addInformacionT(res.data))
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const putUpdateInformacion = (informacion, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL}/modificarInformacion/${informacion.id}/`;
    return axios.put(url, informacion)
        .then(res => {
            dispatch(createMessage({ editIngre: 'Informacion Modificada' }))
            dispatch(updateInformacionT(res.data))
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}


// INGREDIENTES


export const getIngredientes = (tenant) => (dispatch, getState) => {

    dispatch(ingredientesLoadingT(true));
    console.log(tokenConfig(getState))
    const url = `http://${tenant}${API_URL_P}/listarIngrediente/`;

    return axios.get(url, tokenConfig(getState))
        .then(ingredientes => dispatch(addIngredientesT(ingredientes.data)))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

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
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const putUpdateIngrediente = (ingrediente, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_P}/modificarIngrediente/${ingrediente.id}/`;
    return axios.put(url, ingrediente)

        .then(res => {
            dispatch(createMessage({ editIngre: 'Ingrediente Modificado' }))
            dispatch(updateIngredienteT(res.data))
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));


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
            dispatch(addEmpleado(res.data.empleado))
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const putUpdateEmpleado = (empleado, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_UT}/modificarEmpleado/${empleado.id}/`;
    return axios.put(url, empleado)

        .then(res => {
            dispatch(createMessage({ editEmp: 'Empleado Modificado' }))
            dispatch(updateEmpleado(res.data))
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

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
            dispatch(addCliente(res.data.cliente))
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const putUpdateCliente = (cliente, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_UT}/modificarCliente/${cliente.id}/`;
    return axios.put(url, cliente)

        .then(res => {
            dispatch(createMessage({ editClie: 'Cliente Modificado' }))
            dispatch(updateCliente(res.data))
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));


}

// PLATILLOS

export const getPlatillos = (tenant) => (dispatch, getState) => {
    dispatch(platillosLoadingT(true));
    const url = `http://${tenant}${API_URL_P}/listarPlatillo/`;
    return axios.get(url)
        .then(res => dispatch(addPlatillosT(res.data)))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

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
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

}

export const putUpdatePlatillo = (platillo, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_P}/modificarPlatillo/${platillo.id}/`;
    return axios.put(url, platillo)

        .then(res => {
            dispatch(createMessage({ editPlati: 'Platillo Modificado' }))
            dispatch(updatePlatilloT(res.data))
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

}

// MENUS

export const getMenus = (tenant) => (dispatch) => {
    dispatch(menusLoadingT(true));
    const url = `http://${tenant}${API_URL_P}/listarMenu/`;
    return axios.get(url)
        .then(menus => dispatch(addMenusT(menus.data)))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

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
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const putUpdateMenu = (menu, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_P}/modificarMenu/${menu.id}/`;
    return axios.put(url, menu)
        .then(res => {
            dispatch(createMessage({ editMenu: 'Menú Modificado' }))
            dispatch(updateMenuT(res.data))
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));

}


//CARRITO

export const agregarItem = (item) => (
    {
        type: ActionTypes.ADD_CARRITO,
        payload: item
    }
)

export const addCarrito = (carrito) => (dispatch) => {
    dispatch(modalToggle())
    dispatch(agregarItem(carrito))

};


export const deleteCarrito = (id) => ({
    type: ActionTypes.DELETE_CARRITO,
    payload: id
})


// ERRORS

export const returnErrors = (msg, status) => {
    return {
        type: ActionTypes.GET_ERRORS,
        payload: { msg, status }
    }
}


//MESSAGES

export const createMessage = msg => {
    return {
        type: ActionTypes.CREATE_MESSAGE,
        payload: msg
    }
}


//CHECK TOKEN & LOAD USER

export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: ActionTypes.USER_LOADING });

    const url = `${API_URL_U}/user/`;

    console.log(tokenConfig(getState))

    axios.get(url, tokenConfig(getState))
        .then(res => {
            dispatch({

                type: ActionTypes.USER_LOADED,
                payload: res.data
            })
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: ActionTypes.AUTH_ERROR
            })
        })
}


//LOGIN USER

export const login = (username, password) => dispatch => {

    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request Body

    const body = JSON.stringify({ username, password })
    const url = `${API_URL_U}/login/`;

    axios.post(url, body, config)
        .then(res => {
            dispatch({
                type: ActionTypes.LOGIN_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: ActionTypes.LOGIN_FAIL
            })
        })
}


//LOGOUT USER

export const logout = (tenant) => (dispatch, getState) => {

    const url = `http://${tenant}${API_URL_LOGO}/logout/`;
    axios.post(url, null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ActionTypes.LOGOUT_SUCCESS,
            })
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        })
}


export const tokenConfig = getState => {
    // GET token from state

    const token = getState().Auth.token;

    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // If token, add to header config

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config
}


//CHECK TOKEN & LOAD USER

export const loadUserTenant = (tenant) => (dispatch, getState) => {
    // User Loading
    dispatch({ type: ActionTypes.USER_LOADING });

    const url = `http://${tenant}${API_URL_UT}/user/`;

    console.log(tokenConfig(getState))

    axios.get(url, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: ActionTypes.USER_LOADED,
                payload: res.data
            })
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: ActionTypes.AUTH_ERROR
            })
        })
}


//LOGIN USER

export const loginTenant = (username, password, tenant) => dispatch => {

    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // Request Body

    const body = JSON.stringify({ username, password })
    const url = `http://${tenant}${API_URL_UT}/login/`;

    axios.post(url, body, config)
        .then(res => {
            dispatch({
                type: ActionTypes.LOGIN_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: ActionTypes.LOGIN_FAIL
            })
        })
}


export const addItem = (item) => ({
    type: ActionTypes.ADD_ITEM,
    payload: item

});


export const plusItem = (item) => ({
    type: ActionTypes.PLUS_ITEM,
    payload: item

});

export const lessItem = (item) => ({
    type: ActionTypes.LESS_ITEM,
    payload: item

});

export const removeItem = (item) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: item
})


export const modalToggle = () => ({
    type: ActionTypes.MODAL_TOGGLE,

});


export const doneFacturaTenant = (factura, tenant) => (dispatch) => {
    const url = `http://${tenant}${API_URL_V}/factura2/`;

    axios.post(url, factura)
        .then(res => {
            try { // your own try...catch block to catch the error before axios ..catch
                dispatch(createMessage({ doneFactura: 'Factura creada' }))
                dispatch(doneFactura())
                dispatch(saldoPlatillo(res.data.productos))
            } catch (e) { console.log(e) } // your catch block

        }).catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        })
}

export const doneFactura = () => ({
    type: ActionTypes.DONE_FACTURA,
})

export const saldoPlatillo = (platillos) => ({
    type: ActionTypes.SALDO_PLATILLO,
    payload: platillos
})

export const getFactura2 = (tenant) => (dispatch) => {
    dispatch(menusLoadingT(true));
    const url = `http://${tenant}${API_URL_V}/consultarFactura2/`;
    return axios.get(url)
        .then(factura => dispatch(addFacturasT(factura.data)))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const addFacturasT = (facturas) => ({
    type: ActionTypes.ADD_FACTURAS,
    payload: facturas
})

//REPORTES 

// VENTAS TOTALES

export const getVentasTotales = (tenant) => (dispatch) => {
    dispatch(ventasTotalesLoading(true));
    const url = `http://${tenant}${API_URL_R}/ventasTotales/`;
    return axios.get(url)
        .then(ventas => dispatch(ventasTotales(ventas.data)))
        .catch(error => console.log(error));
}

export const ventasTotales = (ventas) => ({
    type: ActionTypes.VENTAS_TOTALES,
    payload: ventas
})

export const ventasTotalesLoading = () => ({
    type: ActionTypes.VENTAS_TOTALES_LOADING,

})

//PLATILLO MÁS VENDIDO

export const getMasVendido = (tenant) => (dispatch) => {
    dispatch(masVendidoLoading(true));
    const url = `http://${tenant}${API_URL_R}/platilloMasVendido/`;
    return axios.get(url)
        .then(vendidos => dispatch(masVendido(vendidos.data)))
        .catch(error => console.log(error));
}

export const masVendido = (vendidos) => ({
    type: ActionTypes.MAS_VENDIDO,
    payload: vendidos
})

export const masVendidoLoading = () => ({
    type: ActionTypes.MAS_VENDIDO_LOADING,

})

//VENTAS POR PLATILLO

export const getVentasPlatillo = (tenant) => (dispatch) => {
    dispatch(ventasPlatilloLoading(true));
    const url = `http://${tenant}${API_URL_R}/ventasPlatillo/`;
    return axios.get(url)
        .then(res => {dispatch(ventasPlatillo(res.data))})
        .catch(error => console.log(error));
}

export const ventasPlatilloLoading = () => ({
    type: ActionTypes.VENTAS_PLATILLO_LOADING,

})

export const ventasPlatillo = (ventasPlatillo) => ({
    type: ActionTypes.VENTAS_PLATILLO,
    payload: ventasPlatillo
})

// VENTAS POR PLATILLO MES

export const getVentasPlatilloMes = (platillo, tenant) => (dispatch) => {
    dispatch(ventasPlatilloMesLoading(true));
    const url = `http://${tenant}${API_URL_R}/ventasMesPlatillo/2/`;
    return axios.get(url)
        .then(res => {console.log(res.data);dispatch(ventasPlatilloMes(res.data))})
        .catch(error => console.log(error));
}

export const ventasPlatilloMes = (ventasPlatilloM) => ({
    type: ActionTypes.VENTAS_PLATILLO_MES,
    payload: ventasPlatilloM
})

export const ventasPlatilloMesLoading = () => ({
    type: ActionTypes.VENTAS_PLATILLO_MES_LOADING,

})

// CLIENTES CON MAS COMPRAS

export const getMasCompras = (tenant) => (dispatch) => {
    dispatch(masComprasLoading(true));
    const url = `http://${tenant}${API_URL_R}/ventasClientes/`;
    return axios.get(url)
        .then(compras => dispatch(masCompras(compras.data)))
        .catch(error => console.log(error));
}

export const masCompras = (compras) => ({
    type: ActionTypes.MAS_COMPRAS,
    payload: compras
})

export const masComprasLoading = () => ({
    type: ActionTypes.MAS_COMPRAS_LOADING,

})

// EMPLEADOS CON MAS VENTAS

export const getMasVentas = (tenant) => (dispatch) => {
    dispatch(masVentasLoading(true));
    const url = `http://${tenant}${API_URL_R}/ventasEmpleados/`;
    return axios.get(url)
        .then(ventase => dispatch(masVentas(ventase.data)))
        .catch(error => console.log(error));
}

export const masVentas = (ventase) => ({
    type: ActionTypes.MAS_VENTAS,
    payload: ventase
})

export const masVentasLoading = () => ({
    type: ActionTypes.MAS_VENTAS_LOADING,

})

//FUNCIONES ESPECIALES

export const getClientesJson = (tenant) => (dispatch) => {
    console.log(tenant)
    const url = `http://${tenant}${API_URL_UT}/exportarCliente/`;
    return axios.get(url)
        .then(mensaje => dispatch(createMessage({ download: mensaje.data.msj })))
        .catch(error => console.log(error));
}

export const getMenusExcelE = (tenant) => (dispatch) => {
    console.log(tenant)
    const url = `http://${tenant}${API_URL_P}/exportarMenu/`;
    return axios.get(url)
        .then(mensaje => dispatch(createMessage({ exportar: mensaje.data.msj })))
        .catch(error => console.log(error));
}

export const getMenusExcelI = (tenant) => (dispatch) => {
    console.log(tenant)
    const url = `http://${tenant}${API_URL_P}/importarMenu/`;
    return axios.get(url)
        .then(mensaje => dispatch(createMessage({ importar: mensaje.data.msj })))
        .catch(error => console.log(error));
}




