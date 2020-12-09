import React from 'react'
import { Col, Card, Button } from 'reactstrap'
import { platillosLoadingT, saveCarrito } from '../config/ActionCreators';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function CardPlatillo({ platillo, addItem, saveCarrito, toggle }) {
    return (
        <Col xl="4" lg="4" >
            <Card className="card-transparent mb-1">
                <div className="card-img-wrapper">
                    <img src={platillo.imagen} className="card-img-top rounded" alt="..." />
                </div>
                <div className="card-body m-auto">
                    <h5 className="font-weight-bold mb-0">
                        {platillo.nombre}
                    </h5>
                    <span className="">$ {platillo.precio}</span><br />
                    <span className="">Unidades: {platillo.unidades}</span>
                </div>
                <Button disabled={platillo.unidades === 0 ? true : false} color="warning" className="mb-2" onClick={() => { addItem({ id: platillo.id, nombre: platillo.nombre, imagen: platillo.imagen, precio: platillo.precio, unidades: platillo.unidades, cantidad: 1, total: platillo.precio }) }} >
                    <FontAwesomeIcon icon={['fas', 'check-circle']} /> Añadir Plato
                </Button>
            </Card>
        </Col >
    )
}


export default CardPlatillo
