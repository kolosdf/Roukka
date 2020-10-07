import React, { Fragment } from 'react';

import { Button, Row, Card, Col, UncontrolledTooltip, Badge } from 'reactstrap';
import Header from './HeaderLandingPage';

import plan1 from '../assets/images/stock-photos/plan1.jpg';
import plan2 from '../assets/images/stock-photos/plan2.jpg';
import plan3 from '../assets/images/stock-photos/plan3.jpg';


const Plan = () => {
    return (
        <Fragment>
            <div className="hero-wrapper bg-composed-wrapper min-vh-100">
                <div className="flex-grow-1 w-100 d-flex align-items-center">
                    <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
                        <div className="container pb-5">
                            <Row>
                                <Col lg="10" className="px-0 mx-auto d-flex align-items-center">
                                    <div className="text-center">
                                        <div className="px-4 px-sm-0  mt-4">
                                            <h1 className="display-2 mb-5 font-weight-bold">
                                                Nuestros Planes
                                            </h1>
                                            <p className="font-size-xl  mb-3">
                                                Tenemos los mejores planes para tu negocio!!
                                            </p>
                                            <div>
                                                <Row>
                                                    <Col xl="4" lg="6">
                                                        <Card className="card-transparent mb-5">
                                                            <div className="card-img-wrapper">
                                                                <img src={plan1} className="card-img-top rounded" alt="..." />
                                                            </div>
                                                            <div className="card-body text-center">
                                                                <h5 className="card-title font-weight-bold font-size-lg">
                                                                    Independiente
              </h5>
                                                                <p className="card-text">
                                                                    La mejor opción para los independientes que quieren empezar expandir su negocio.                                                               
                                                                </p>
                                                                <p>Usuarios : 1</p>
                                                                <p>Facturas : 30/mes</p>
                                                                <p>Lista de Menus : 2</p>
                                                                <p>Reportes: 3</p>
                                                                <p>inventarios</p>
                                                                <Button size="sm" outline color="first" className="btn-pill mt-1">
                                                                    View Details
              </Button>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col xl="4" lg="6">
                                                        <Card className="card-transparent mb-5">
                                                            <div className="card-img-wrapper">
                                                                <img src={plan2} className="card-img-top rounded" alt="..." />
                                                            </div>
                                                            <div className="card-body text-center">
                                                                <h5 className="card-title font-weight-bold font-size-lg">
                                                                    Emprendedor
              </h5>
                                                                <p className="card-text">
                                                                    Si quieres que tu empresa crezca esta es la mejor opción que te lleva a ese nivel.
                                                                </p>
                                                                <p>Usuarios : 4</p>
                                                                <p>Facturas : 100/mes</p>
                                                                <p>Lista de Menus : 5</p>
                                                                <p>Reportes: 6</p>
                                                                <p>inventarios</p>
                                                                <p>Landing Page</p>
                                                                <p>Personalización</p>
                                                                <Button size="sm" outline color="first" className="btn-pill mt-1">
                                                                    View Details
              </Button>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                    <Col xl="4" lg="12">
                                                        <Card className="card-transparent mb-5">
                                                            <div className="card-img-wrapper">
                                                                <img src={plan3} className="card-img-top rounded" alt="..." />
                                                            </div>
                                                            <div className="card-body text-center">
                                                                <h5 className="card-title font-weight-bold font-size-lg">
                                                                    Premium
              </h5>
                                                                <p className="card-text">
                                                                    Si tu empresa quiere lo mejor de lo mejor esta es la mejor opción para ella.
                                                                </p>
                                                                <p>Usuarios : Ilimitados</p>
                                                                <p>Facturas : Ilimitados</p>
                                                                <p>Lista de Menus : Ilimitados</p>
                                                                <p>Reportes: 10</p>
                                                                <p>inventarios</p>
                                                                <p>Landing Page</p>
                                                                <p>Personalización</p>
                                                                <p>Clientes</p>
                                                                <p>Compras</p>
                                                                <Button size="sm" outline color="first" className="btn-pill mt-1">
                                                                    View Details
              </Button>
                                                            </div>
                                                        </Card>
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
    );
};

export default Plan;
