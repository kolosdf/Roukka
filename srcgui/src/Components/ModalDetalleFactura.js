import React, { useState, useEffect } from 'react'
import { Modal, Row, Table, CardBody, CardTitle, Card, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ModalDetalleFactura(props) {

    //El estado del formulario, que corresponde a los datos de los inputs
    const [state, setState] = useState({
        id: '',
        empleado: '',
        fecha: '',
        total: '',
        productos: []
    })

    //Con este hook establezco los datos si es un formulario para modificar
    useEffect(() => {
        const actualizar = () => {
            setState({
                id: props.datos.id,
                empleado: props.datos.empleado,
                fecha: props.datos.fecha,
                total: props.datos.total,
                productos: props.datos.productos
            })
        }
        actualizar();
        console.log(props.datos)
    }, [props.datos])

    return (
        <Modal size="lg" zIndex={2000} centered isOpen={props.modal} toggle={props.toggle}>
            <div>
                <Card className="shadow-none border-0">
                    <div className="card-header d-block bg-warning text-white pt-5 pb-5 ">
                        <div className="text-center">
                            <FontAwesomeIcon icon={['fab', 'elementor']} size="3x" /><h1>Detalles Factura</h1>
                        </div>
                    </div>
                    <div className="card-body px-lg-5 py-lg-5">
                        <Row>
                            <Col sm={6}>

                                <Card className="card-box mb-5"><CardBody className="d-flex">
                                    <FontAwesomeIcon icon={['fas', 'user-circle']}
                                        className="mt-1" size="3x" />
                                    <CardTitle className="font-weight-bold font-size-lg p-2">
                                        {state.empleado.first_name + " " + state.empleado.last_name}</CardTitle>
                                </CardBody></Card>
                            </Col>
                            <Col sm={6}>

                                <Card className="card-box mb-5"><CardBody className="d-flex ">
                                    <FontAwesomeIcon icon={['fas', 'calendar-alt']}
                                        className="mt-1" size="3x" />
                                    <CardTitle className="font-weight-bold font-size-lg p-2 ">
                                        {state.fecha}</CardTitle>
                                </CardBody></Card>
                            </Col>

                        </Row>
                        <Row>
                            <Col><TableT productos={state.productos} total={state.total} /></Col>

                        </Row>

                        <Button color="danger" onClick={props.toggle}>
                            <FontAwesomeIcon icon={['fas', 'times']}
                            /> Cerrar</Button>{' '}
                    </div>
                </Card>
            </div>
        </Modal>)
}

function FilaTable({ item }) {

    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                            <img alt="..." className="" width="100" src={item.platillo.imagen} />
                        </div>
                    </div>

                    <div><p className="font-weight-bold text-black tex-center" title="...">{item.nombre}
                    </p>
                    </div>
                </div>
            </td>
            <td className="text-center">
                <span className="font-weight-bold text-danger">{item.platillo.precio}</span>
            </td>
            <td className="text-center">
                <span className="text-danger font-weight-bold">{item.cantidad}</span>
            </td>
            <td className="text-right">
                <div className="d-flex align-items-center justify-content-end">
                    <div className="font-weight-bold font-size-lg pr-2">{item.cantidad * item.platillo.precio}</div>

                </div>
            </td>
        </tr>
    )
}


const TableT = ({ productos, total }) => {
    return (
        <Card className="card-box mb-5">
            <div className="card-body px-0 pt-2 pb-3">
                <div className="table-responsive-md">
                    <Table borderless hover className="table-alternate text-nowrap mb-0">
                        <thead>
                            <tr>
                                <th>Platillo</th>
                                <th className="text-center">Precio</th>
                                <th className="text-center">Cantidad</th>
                                <th className="text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map(item => <FilaTable item={item} key={item.id} />)
                            }
                        </tbody>
                    </Table>
                    <div className="divider mb-3" />

                    <Row>
                        <Col>
                            <div className="text-left ml-3">
                                <h3>Total: </h3>
                            </div>
                        </Col>
                        <Col>
                            <div className="text-right mr-3">
                                <span className="btn-wrapper--label"><h3>$ {total}</h3></span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Card>)
}

export default ModalDetalleFactura;