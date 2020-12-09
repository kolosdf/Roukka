import React, { useState, useEffect, Fragment } from 'react'
import { ModalHeader, CardHeader, CardFooter, CardBody, CardTitle, CustomInput, Table, Badge, ModalFooter, ModalBody, Form, InputGroup, Label, Input, FormGroup, Card, Row, Col, Button, NavLink } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardPlatillo from './CardPlatillo'

function FormFacturaT(props) {
    return (
        <Card>
            <CardHeader className="card-header text-center bg-first text-white pt-5 pb-5">
                <FontAwesomeIcon
                    icon={['fas', 'money-check']}
                    size="2x"
                /><h2>Facturación</h2>
            </CardHeader>
            <CardBody>
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

                        {props.platillos.map(platillo => <CardPlatillo toggle={props.toggle} addItem={props.addItem} key={platillo.key} platillo={platillo} />)}
                    </Row>

                    <Row>
                        <Col><TableT plusItem={props.plusItem} removeItem={props.removeItem} lessItem={props.lessItem} factura={props.factura} /></Col>

                    </Row>
                </Form>
            </CardBody>
            <CardFooter className="text-center ">

                <Button color="success" size="lg" className="" onClick={props.doneFacturaTenant.bind(this, {
                    "empleado": props.auth.id,
                    "productos": props.factura.facturaItems
                })}>Facturar</Button>


            </CardFooter>
        </Card>


    )
}

export default FormFacturaT



const TableT = ({ factura, plusItem, lessItem, removeItem }) => {
    return (
        <Card className="card-box mb-5">
            <CardHeader>
                <div className="card-header--title">
                    <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
                        Factura
                    </h4>
                </div>
            </CardHeader>
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
                            {factura.items.map(item => <FilaTable plusItem={plusItem} removeItem={removeItem} lessItem={lessItem} item={item} key={item.id} />)}
                        </tbody>
                    </Table>

                </div>
            </div>
        </Card>)
}


function FilaTable({ item, plusItem, lessItem, removeItem }) {

    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                            <img alt="..." className="" width="100" src={item.imagen} />
                        </div>
                    </div>
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
                <div>
                    <Button disabled={item.unidades === item.cantidad ? true : false} onClick={plusItem.bind(this, item)} color="first">+</Button>
                    <Button disabled={item.cantidad === 1 ? true : false} onClick={lessItem.bind(this, item)} color="danger">-</Button>
                </div>
                <Button color="danger" className="mt-1"
                    onClick={removeItem.bind(this, item.id)}>

                    <FontAwesomeIcon icon={['fas', 'trash-alt']} /> Eliminar
                </Button>
            </td>
        </tr>
    )
}