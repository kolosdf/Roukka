import React, { Fragment } from 'react';

import { Row, Col, Card, CardBody, UncontrolledCarousel, Button } from 'reactstrap';
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import hero8 from '../../assets/images/stock-photos/plan1.jpg'





import plan1 from '../../assets/images/stock-photos/plan1.jpg'
import plan2 from '../../assets/images/stock-photos/plan2.jpg';
import plan3 from '../../assets/images/stock-photos/plan3.jpg';




import inventario from '../../assets/images/stock-photos/inventario.jpg';
import fact from '../../assets/images/stock-photos/fact.jpg';
import cliente from '../../assets/images/stock-photos/cliente.jpg';
import reporte from '../../assets/images/stock-photos/reporte.jpg';

import producto from '../../assets/images/stock-photos/producto.jpg';

import menu from '../../assets/images/stock-photos/menu.jpg';


const items = [
    {
        src: plan1,
        altText: 'Plan Independiente',
        caption: 'Perfecto para iniciar',
        header: 'Plan Independiente',
        key: '1'
    },
    {
        src: plan2,
        altText: 'Plan Emprendedor',
        caption: 'Para mejorar mucho más',
        header: 'Plan Emprendedor',
        key: '2'
    },
    {
        src: plan3 ,
        altText: 'Plan Premium',
        caption: 'Lo que tu empresa necesita',
        header: 'Plan Premium',
        key: '3',
    }
];

const Home = () => {
    return (
        <Fragment>
            
            <div className="hero-wrapper bg-composed-wrapper min-vh-100">
                <div className="flex-grow-1 w-100 d-flex align-items-center">
                    <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
                        <div className="container pb-5">
                            <Row >
                                <Col lg="10" className="px-0 mx-auto d-flex align-items-center">
                                    <div className="text-center">
                                        <div className="px-4 px-sm-0  mt-4">
                                            
                                            <Row>
                                            <div className="hero-wrapper bg-composed-wrapper rounded-lg bg-plum-plate">
                        <div className="flex-grow-1 w-100 d-flex rounded-lg align-items-center">
                            <div className="bg-composed-wrapper--image rounded-lg opacity-3" style={{ backgroundImage: 'url(' + hero8 + ')' }} />
                            <div className="bg-composed-wrapper--bg bg-first rounded-lg opacity-3" />
                            <div className="bg-composed-wrapper--content">
                                <div className="container-fluid p-5">
                                    <Row>
                                        <Col xl="7" className="d-flex align-items-center">
                                            <div className="text-white text-center text-xl-left">
                                                <h1 className="display-3 mb-3 font-weight-bold">
                                                    Roukka a tu servicio.
                                </h1>
                                                <p className="font-size-lg d-block mb-5 text-white-50">
                                                    Hecha un viztazo a nuestros planes para tu empresa!!
                                </p>

                                <Button><Link to="/Plans">Ver nuestros Planes</Link></Button>
                                                
                                            </div>
                                        </Col>
                                        <Col xl="5" className="d-flex align-items-center">
                                            <Card className="mt-5 mt-xl-0">
                                                <div className="p-3">
                                                    <UncontrolledCarousel items={items} />
                                                </div>
                                            </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                                            </Row>

                                            
                                            <Row className="mt-5">
                                            <Col xl="4" lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={inventario} />
            <CardBody>
              <h5 className="card-title font-weight-bold font-size-lg">
                Módulo de Inventarios
              </h5>
              <p className="card-text">
                Para poder llevar un inventario de los productos de la empresa.
              </p>
              <Button
                tag="a"
                color="primary"
                href="#/"
                onClick={e => e.preventDefault()}>
                Más Detalles
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4" lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={cliente} />
            <CardBody>
              <h5 className="card-title font-weight-bold font-size-lg">
                Módulo de Clientes
              </h5>
              <p className="card-text">
                Necesario para que tu empresa este más cerca de los clientes.
              </p>
              <Button
                tag="a"
                color="primary"
                href="#/"
                onClick={e => e.preventDefault()}>
                Más Detalles
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4" className="d-none d-xl-block">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={fact} />
            <CardBody>
              <h5 className="card-title font-weight-bold font-size-lg">
                Modulo de Facturación
              </h5>
              <p className="card-text">
                Para poder registrar las ventas de los productos disponibles.
              </p>
              <Button
                tag="a"
                color="primary"
                href="#/"
                onClick={e => e.preventDefault()}>
                Más Detalles
              </Button>
            </CardBody>
          </Card>
        </Col>
                                            </Row>
                                            <Row className="mt-5">
                                            <Col xl="4" lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={menu} />
            <CardBody>
              <h5 className="card-title font-weight-bold font-size-lg">
                Módulo de Menu
              </h5>
              <p className="card-text">
                Ten una lista de menus disponibles para la venta.
              </p>
              <Button
                tag="a"
                color="primary"
                href="#/"
                onClick={e => e.preventDefault()}>
                Más Detalles
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4" lg="6">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={producto} />
            <CardBody>
              <h5 className="card-title font-weight-bold font-size-lg">
                Módulo de productos
              </h5>
              <p className="card-text">
                Registros inmediato de los productos de venta e inventario.
              </p>
              <Button
                tag="a"
                color="primary"
                href="#/"
                onClick={e => e.preventDefault()}>
                Más Detalles
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col xl="4" className="d-none d-xl-block">
          <Card className="mb-5">
            <img alt="..." className="card-img-top" src={reporte} />
            <CardBody>
              <h5 className="card-title font-weight-bold font-size-lg">
                Módulo de Reportes
              </h5>
              <p className="card-text">
                Información fundamental para la empresa con varios tipo de gráficos
              </p>
              <Button
                tag="a"
                color="primary"
                href="#/"
                onClick={e => e.preventDefault()}>
                Más Detalles
              </Button>
            </CardBody>
          </Card>
        </Col>
                                            </Row>
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

export default Home;
