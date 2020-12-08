import React from 'react'
import { Col, Card, Button } from 'reactstrap'

function CardPlatillo({ platillo, addItem }) {
    const cantidad = 1;
    return (
        <Col xl="2" lg="2" >
            <Card className="card-transparent mb-1">
                <div className="card-img-wrapper">
                    <img src={platillo.imagen} className="card-img-top rounded" alt="..." />
                </div>
                <div className="card-body m-auto">
                    <p className="font-weight-bold font-size-sm mb-0">
                        {platillo.nombre}
                    </p>
                    <span className="font-size-sm mb-0">$ {platillo.precio}</span>
                </div>
                <Button onClick={addItem.bind(this, { id: platillo.id, nombre: platillo.nombre, precio: platillo.precio, cantidad: 1, total: cantidad * platillo.precio })} className="btn-sm mb-2">Añadir</Button>
            </Card>
        </Col>
    )
}

export default CardPlatillo
