import React, { useState, useEffect } from 'react'
import { Modal, ModalHeader, CardBody, CardTitle, CustomInput, CardHeader, Table, Badge, ModalFooter, ModalBody, Form, InputGroup, Label, Input, FormGroup, Card, Row, Col, Button } from 'reactstrap'
import { Multiselect } from 'multiselect-react-dropdown';
import CardPlatillo from './CardPlatillo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ModalFormFacturaT(props) {
    //El estado del formulario, que corresponde a los datos de los inputs
    const [state, setState] = useState({
        id: '',
        nombre: '',
        precio: '',
        imagen: '',
        estado: '',
        funciones: []
    })

    //Es otra estado con el que establezco si es un formulario de registrar o modificar
    const [datosForm, setDatosForm] = useState({
        titulo: '',
        boton: '',
    })

    const onSelect = (selectedList, selectedItem) => {

        setState({
            ...state,
            funciones: selectedList
        })
        console.log(state)

    }

    const onRemove = (selectedList, removedItem) => {
        setState({
            ...state,
            funciones: selectedList
        })

    }





    return (

        <Modal zIndex={2000} centered size="lg" isOpen={props.factura.modal} toggle={props.modelToggle}>
            <ModalHeader toggle={props.modelToggle}>Factura</ModalHeader>
            <ModalBody>
                <Form>
                    <Row>
                        <Col sm={5}>

                            <Card className="card-box mb-5">
                                <CardBody>
                                    <CardTitle className="font-weight-bold font-size-lg mb-1">Funcionario</CardTitle>

                                    <h4>{props.auth.first_name + " " + props.auth.last_name}</h4>

                                </CardBody>
                            </Card>

                        </Col>
                    </Row>

                    <Row className="mb-3">

                        {props.platillos.map(platillo => <CardPlatillo addItem={props.addItem} key={platillo.key} platillo={platillo} />)}
                    </Row>

                    <Row>
                        <Col><TableT factura={props.factura} /></Col>

                    </Row>



                </Form>


            </ModalBody>
            <ModalFooter>
                <Button color="link" className="btn-link-dark" onClick={props.modelToggle}>Close</Button>{' '}
                <Button color="primary" className="ml-auto" onClick={props.doneFacturaTenant.bind(this, {
                    "empleado": props.auth.id,
                    "productos": props.factura.facturaItems
                })}>Save changes</Button>
            </ModalFooter>
        </Modal >
    )
}

export default ModalFormFacturaT


const TableT = ({ factura }) => {
    return (<Card className="card-box mb-5">
        <CardHeader>
            <div className="card-header--title">
                <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                    Factura
</h4>
            </div>
        </CardHeader>
        <div className="card-body px-0 pt-2 pb-3">
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
                    {factura.items.map(item => <FilaTable item={item} key={item.id} />)}
                </tbody>
            </Table>
            <div className="divider mb-3" />
            <div className="text-center">
                <Button color="primary">
                    <span className="btn-wrapper--label">View details</span>
                    <span className="btn-wrapper--icon">
                        <FontAwesomeIcon icon={['fas', 'chevron-right']} />
                    </span>
                </Button>
            </div>
        </div>
    </Card>)
}


function FilaTable({ item }) {

    return (
        <tr>
            <td>
                <div className="d-flex">
                    <CustomInput type="checkbox" id="checkboxProjects15" className="align-self-center" label="&nbsp;" />
                    <div><a href="#/" onClick={e => e.preventDefault()} className="font-weight-bold text-black" title="...">{item.nombre}
                    </a>
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
                    <FontAwesomeIcon icon={['fas', 'arrow-down']}
                        className="font-size-sm opacity-5" />
                </div>
            </td>
            <td className="text-center">
                <Button color="first">+</Button> <Button color="danger">-</Button>
            </td>
        </tr>
    )
}