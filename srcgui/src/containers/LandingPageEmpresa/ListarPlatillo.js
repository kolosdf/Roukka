import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Cards from 'react-credit-cards';
import CardPlatillo from '../../Components/CardPlatillo'
import ModalCarrito from '../../Components/ModalCarrito'
import 'react-credit-cards/es/styles-compiled.css';

import {
    Row,
    Col,
    Card,
    CardBody,
} from 'reactstrap';


const CardBuyMenu = props => {
    if (props.menu != null) {
        return (
            <Card className="mb-3">
                <img alt="..." className="card-img-top" src={props.menu.imagen} />
                <Col lg="7" className="px-0 mx-auto d-flex align-items-center">
                    <div className="text-center">
                        <div className="ml-5 px-4 px-sm-0  mt-4">
                            <h3 className=" mr-5 mb-1 font-weight-bold">
                                Menú: {props.menu.nombre}
                            </h3>
                        </div>
                        <div className=" px-4 px-sm-0 ">
                            <h4 className="mx-auto ">
                                {props.menu.descripcion}
                            </h4>
                        </div>
                    </div>
                </Col>
            </Card>
        );

    } else {
        return <Fragment></Fragment>;
    }
};

const ListarPlatillo = props => {
    console.log(props.menus)
    const [state, setState] = useState({
        platillos: [],
        menu: {
            platillos: [],
        },

    });

    useEffect(() => {
        const actualizar = () => {
            setState({
                ...state,
                menu: props.menus.menus.filter(
                    menu => menu.id == props.match.params.idMenu
                )[0]
            });
        };

        console.log(state.menu)
        actualizar();
    }, []);

    return (
        <Fragment>
            <ModalCarrito carrito={props.carrito} deleteCarrito={props.deleteCarrito} modal={props.carrito.modal} toggle={props.modalToggle} />

            <div className="hero-wrapper bg-composed-wrapper min-vh-100">
                <div className="flex-grow-1 w-100 d-flex align-items-center">
                    <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
                        <div className="container pb-5">
                            <Row >
                                <Col lg="10" className="px-0 mx-auto align-items-center">
                                    <div className="text-center">
                                        <div className="px-4 px-sm-0  mt-4">
                                            <h1 className="display-2 mb-5 font-weight-bold">
                                                Nuestros Platillos
                                            </h1>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mb-3 ">
                                <Col sm={5}>
                                    <CardBuyMenu
                                        menu={state.menu}
                                    />
                                </Col>
                                <Col sm={7}>
                                    <Card className="">
                                        <CardBody>
                                            <Row className="m-auto mt-4">
                                                {props.platillos.platillos.filter(platillo => {
                                                    if (state.menu.platillos.indexOf(platillo.id) != -1) {
                                                        return true
                                                    } else {
                                                        return false
                                                    }
                                                }).map(platillo => <CardPlatillo toggle={props.modalToggle} saveCarrito={props.saveCarrito} addItem={props.addCarrito} key={platillo.key} platillo={platillo} />)}
                                            </Row>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};







export default ListarPlatillo;
