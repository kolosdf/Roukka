import * as ActionTypes from '../config/ActionTypes'

export default function reducer(state = {
    isLoading: true,
    errMess: null,
    modal: true,
    facturas: [],
    facturaItems: [],
    items: []
}, action) {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
        case ActionTypes.PLUS_ITEM:
            var producto;
            var itemF;
            var itemBefore = state.items.filter(item => item.id === action.payload.id)[0]
            console.log(itemBefore)

            if (state.items.find(item => item.id === action.payload.id)) {
                console.log('No se que pasa')
                producto = {
                    "cantidad": itemBefore.cantidad + 1,
                    "platillo": action.payload.id
                }

                itemF = {
                    "id": action.payload.id,
                    "nombre": action.payload.nombre,
                    "imagen": action.payload.imagen,
                    "precio": action.payload.precio,
                    "unidades": action.payload.unidades,
                    "cantidad": itemBefore.cantidad + 1,
                    "total": action.payload.precio * (itemBefore.cantidad + 1)
                }
                return {
                    ...state, isLoading: false, errMess: null, modal: true,
                    items: state.items.splice(state.items.indexOf(state.items.filter(itemn => itemn.id === itemF.id)[0]), 1, itemF),
                    facturaItems: state.facturaItems.splice(state.facturaItems.indexOf(state.facturaItems.filter(itemn => itemn.platillo === producto.platillo)[0]), 1, producto),
                    ...state
                };
            } else {
                producto = {
                    "cantidad": action.payload.cantidad,
                    "platillo": action.payload.id

                }
                return {
                    ...state, isLoading: false, errMess: null, modal: true,
                    items: state.items.concat(action.payload),
                    facturaItems: state.facturaItems.concat(producto),
                };
            }

        case ActionTypes.LESS_ITEM:
            var producto;
            var itemF;
            var itemBefore = state.items.filter(item => item.id === action.payload.id)[0]
            console.log(itemBefore)

            producto = {
                "cantidad": itemBefore.cantidad - 1,
                "platillo": action.payload.id
            }

            itemF = {
                "id": action.payload.id,
                "nombre": action.payload.nombre,
                "precio": action.payload.precio,
                "imagen": action.payload.imagen,
                "unidades": action.payload.unidades,
                "cantidad": itemBefore.cantidad - 1,
                "total": (action.payload.precio * (itemBefore.cantidad)) - (action.payload.precio)
            }
            return {
                ...state, isLoading: false, errMess: null, modal: true,
                items: state.items.splice(state.items.indexOf(state.items.filter(itemn => itemn.id === itemF.id)[0]), 1, itemF),
                facturaItems: state.facturaItems.splice(state.facturaItems.indexOf(state.facturaItems.filter(itemn => itemn.platillo === producto.platillo)[0]), 1, producto),
                ...state
            };


        case ActionTypes.ADD_FACTURAS:
            return { ...state, isLoading: false, errMess: null, facturas: action.payload, modal: true };


        case ActionTypes.DONE_FACTURA:
            return { ...state, items: [], facturaItems: [], isLoading: true, errMess: null, modal: !state.modal };

        case ActionTypes.REMOVE_ITEM:
            return { ...state, items: state.items.filter(item => item.id !== action.payload), facturaItems: state.facturaItems.filter(item => item.platillo !== action.payload) }

        /* case ActionTypes.PLANS_LOADING:
            return { ...state, isLoading: true, errMess: null, plans: [] };

        case ActionTypes.PLANS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, plans: [] };

         */
        default:
            return state;
    }
}