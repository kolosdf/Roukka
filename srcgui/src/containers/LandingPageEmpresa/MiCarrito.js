import React, { useState, useEffect, Fragment } from 'react'
import { ModalHeader, Container, CardHeader, CardFooter, CardBody, CardTitle, CustomInput, Table, Badge, ModalFooter, ModalBody, Form, InputGroup, Label, Input, FormGroup, Card, Row, Col, Button, NavLink } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { connect } from 'react-redux'

function MiCarrito(props) {
    return (
        <Fragment>

            <div className="hero-wrapper bg-composed-wrapper min-vh-100">
                <div className="flex-grow-1 w-100 d-flex align-items-center">
                    <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
                        <div className="container pb-5">
                            <Row>
                                <Col lg="12" className=" align-items-center">
                                    <div className="text-center">
                                        <div className="px-4 px-sm-0  mt-4">
                                            <h1 className="display-2 mb-5 font-weight-bold">
                                                Mi Carrito
                                            </h1>
                                            <p className="font-size-xl  mb-3">
                                                Aqui encontraras los productos listos para comprar!
                                            </p>
                                            <div>
                                                <Row>
                                                    <Col sm="8"><TableT /* plusItem={props.plusItem} lessItem={props.lessItem} */ carrito={props.carrito} /></Col>
                                                    <Col sm="4">
                                                        <Card>
                                                            <CardHeader className=" bg-info text-white">
                                                                <h4>Total a Pagar</h4>
                                                            </CardHeader>
                                                            <CardBody>

                                                                <h3>$ {props.carrito.totalT}</h3>
                                                                <Button disabled={props.carrito.totalT !== 0 ? false : true} color="dark" size="lg" outline><FontAwesomeIcon icon={['fa', 'credit-card']} /> Ir a Pagar</Button>
                                                            </CardBody></Card>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MiCarrito



const TableT = ({ carrito, plusItem, lessItem }) => {
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
                                <th className="text-center">Total</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.carrito.map(item => <FilaTable plusItem={plusItem} lessItem={lessItem} item={item} key={item.id} />)}
                        </tbody>
                    </Table>

                </div>
            </div>
        </Card>)
}


function FilaTable({ item, plusItem, lessItem }) {

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
                    <Button className="mr-1" /* onClick={plusItem.bind(this, item)} */ color="first">+</Button>
                    <Button className="ml-1" /* onClick={lessItem.bind(this, item)} */ color="danger">-</Button>
                </div>

                <Button color="danger" className="mt-1"
                    /* onClick={plusItem.bind(this, item)} */>
                    <FontAwesomeIcon icon={['fas', 'trash-alt']} /> Eliminar
                </Button>
            </td>
        </tr>
    )
}