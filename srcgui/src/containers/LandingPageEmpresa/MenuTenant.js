import React, { Fragment, useEffect } from 'react';

import { Button, Row, Card, Col, UncontrolledTooltip, Badge } from 'reactstrap';

import planIm1 from '../../assets/images/stock-photos/plan1.jpg';
import planIm2 from '../../assets/images/stock-photos/plan2.jpg';
import planIm3 from '../../assets/images/stock-photos/plan3.jpg';
import { connect, useDispatch } from 'react-redux'
import { getPlans } from '../../config/ActionCreators'
import { Link } from 'react-router-dom'



const CardMenu = (props) => {


    const menus = props.menus.map((menu) => {
        return (
            <Col xl="4" lg="6" key={menu.id}>
                <Link to={`/ListarPlatillo/${menu.id}`}>
                    <Card className="card-transparent mb-5">
                        <div className="card-img-wrapper">
                            <img src={menu.imagen} className="card-img-top rounded" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title font-weight-bold font-size-lg">
                                {menu.nombre}
                            </h5>
                            <p>

                            </p>
                            <p>{menu.descripcion}</p>
                        </div>
                    </Card>
                </Link>
            </Col>
        )
    })

    if (props.menus != null) {
        return menus
    } else {
        return <div></div>
    }

}


const MenuTenant = (props) => {

    console.log(props.menus)

    /* useEffect(() => {
        props.getPlans()
    },[]); */



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
                                                Nuestros Menus
                                            </h1>
                                            <p className="font-size-xl  mb-3">
                                                Tenemos los mejores menus para que deleites
                                            </p>
                                            <div>
                                                <Row>
                                                    <CardMenu menus={props.menus.menus} />
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


export default MenuTenant;
