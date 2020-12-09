import * as ActionTypes from '../config/ActionTypes'

var totalP = 0
//JSON.parse(localStorage.getItem('carrito4')).forEach(function (a) { totalP += a.total })

export default function reducer(state = {
    isLoading: false,
    errMess: null,
    carrito: localStorage.getItem('carrito4') !== null ? JSON.parse(localStorage.getItem('carrito4')) : [],
    modal: false,
    mensaje: false,
    totalT: localStorage.getItem('carrito4') !== null ? totalP : 0,
}, action) {
    switch (action.type) {

        case ActionTypes.ADD_CARRITO:
            var itemF;
            totalP = action.payload.total;
            var itemBefore = state.carrito.filter(item => item.id === action.payload.id)[0]
            state.carrito.forEach(function (a) { totalP += a.total })
            console.log(totalP)


            if (state.carrito.find(item => item.id === action.payload.id)) {



                itemF = {
                    "id": action.payload.id,
                    "nombre": action.payload.nombre,
                    "imagen": action.payload.imagen,
                    "precio": action.payload.precio,
                    "cantidad": itemBefore.cantidad + 1,
                    "total": action.payload.precio * (itemBefore.cantidad + 1)
                }

                return {
                    ...state, isLoading: false, errMess: null,
                    carrito: state.carrito.splice(state.carrito.indexOf(state.carrito.filter(itemn => itemn.id === itemF.id)[0]), 1, itemF),
                    ...state, mensaje: true, totalT: totalP
                };
            } else {

                return {
                    ...state, isLoading: false, errMess: null, mensaje: true, totalT: totalP,
                    carrito: state.carrito.concat(action.payload),
                };


            }
        case ActionTypes.DELETE_CARRITO:
            var totalP = 0
            state.carrito.filter(item => item.id !== action.payload).forEach(function (a) { totalP += a.total })
            return {
                ...state, modal: false,
                carrito: state.carrito.filter(item => item.id !== action.payload), totalT: totalP
            }

        case ActionTypes.MODAL_TOGGLE:
            localStorage.setItem('carrito4', JSON.stringify(state.carrito))
            return {
                ...state, modal: !state.modal, mensaje: false
            }
        default:
            return state;
    }
}
