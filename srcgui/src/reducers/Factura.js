import * as ActionTypes from '../config/ActionTypes'

export default function reducer(state = {
    isLoading: true,
    errMess: null,
    modal: false,
    facturaItems: [],
    items: []
}, action) {
    switch (action.type) {
        case ActionTypes.ADD_ITEM:
            var producto = {
                "cantidad": action.payload.cantidad,
                "platillo": action.payload.id

            }
            return {
                ...state, isLoading: false, errMess: null,
                items: state.items.concat(action.payload),
                facturaItems: state.facturaItems.concat(producto),
            };

        case ActionTypes.MODAL_FACTURA:
        case ActionTypes.DONE_FACTURA:
            return { ...state, isLoading: true, errMess: null, modal: !state.modal };

        /* case ActionTypes.PLANS_LOADING:
            return { ...state, isLoading: true, errMess: null, plans: [] };

        case ActionTypes.PLANS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, plans: [] };

         */
        default:
            return state;
    }
}