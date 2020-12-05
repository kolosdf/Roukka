import React from 'react'
import { Link } from 'react-router-dom'
import {
    Row,
    Col,
    Form,
    Label,
    FormGroup,
    Input,
    Button,
    Card,
    CardBody,
    Alert,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    CardTitle, CardHeader, Table, CustomInput, NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ModalCarrito = (props) => {
    return (
        <Modal size="lg" zIndex={2000} centered isOpen={props.modal} toggle={props.toggle}>
            <ModalHeader className="bg-first text-white d-block pt-2 pb-2">
                <div className="m-auto text-center">
                    <span> <FontAwesomeIcon icon={['fas', 'utensils']} size="2x" /> <h2>Mis Platillos</h2></span>
                </div>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <Row>
                        <Col sm={8}>
                            {!props.carrito.mensaje ? <div></div>
                                : <Card className="card-box mb-5"><CardBody className="d-flex">
                                    <FontAwesomeIcon icon={['fas', 'clipboard-check']}
                                        className="opacity-6 mt-2" size="4x" color="green" />
                                    <CardTitle className="font-weight-bold font-size-lg p-2">
                                        El producto se ha agregado al carrito con éxito</CardTitle>
                                </CardBody></Card>}
                        </Col>

                    </Row>

                    <Row>
                        <Col><TableT plusItem={props.plusItem} lessItem={props.lessItem} carrito={props.carrito} deleteCarrito={props.deleteCarrito} /></Col>

                    </Row>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="danger" onClick={props.toggle}>
                    <FontAwesomeIcon icon={['fas', 'times']}
                    /> Cerrar</Button>{' '}
                <Link className="btn btn-warning ml-auto" to="/MiCarrito" onClick={props.toggle}> <FontAwesomeIcon icon={['fas', 'shopping-cart']}
                /> Ir al Carrito</Link>
            </ModalFooter>
        </Modal>)

}



function FilaTable({ item, deleteCarrito, plusItem, lessItem }) {

    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                            <img alt="..." className="" width="100" src={item.imagen} />
                        </div>
                    </div>

                    <div><p className="font-weight-bold text-black tex-center" title="...">{item.nombre}
                    </p>
                    </div>
                </div>
            </td>
            <td className="text-center">
                <span className="font-weight-bold text-danger">{item.precio}</span>
            </td>
            <td className="text-center">
                <span className="text-danger font-weight-bold">{item.cantidad}</span>
            </td>
            <td className="text-right">
                <div className="d-flex align-items-center justify-content-end">
                    <div className="font-weight-bold font-size-lg pr-2">{item.total}</div>

                </div>
            </td>
            <td className="text-center">

                <div className="nav-link-icon">
                    <Button onClick={deleteCarrito.bind(this, item.id)} color="danger"><FontAwesomeIcon icon={['fas', 'trash-alt']} /></Button>
                </div>



            </td>
        </tr>
    )
}


const TableT = ({ carrito, deleteCarrito, plusItem, lessItem }) => {
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
                                <th className="text-right">Totals</th>
                                <th className="text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.carrito.map(item => <FilaTable item={item} deleteCarrito={deleteCarrito} key={item.id} />)
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
                                <span className="btn-wrapper--label"><h3>$ {carrito.totalT}</h3></span>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Card>)
}

export default ModalCarrito;