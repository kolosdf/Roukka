import React, { Fragment, useEffect } from 'react';

import { Button, Row, Card, Col, UncontrolledTooltip, Badge } from 'reactstrap';
import Header from './HeaderLandingPage';

import planIm1 from '../../assets/images/stock-photos/plan1.jpg';
import planIm2 from '../../assets/images/stock-photos/plan2.jpg';
import planIm3 from '../../assets/images/stock-photos/plan3.jpg';
import {connect, useDispatch} from 'react-redux'
import {getPlans} from '../../config/ActionCreators'
import {Link} from 'react-router-dom'



const CardPlan = (props) => {

    const imagen = (planId) => {
        switch(planId){
            case 1 : return planIm1;
            case 2 : return planIm2;
            case 3 : return planIm3;
            default: return planIm1; 
        }
    }

    const planes = props.plans.map((plan) => {
        return(
            <Col xl="4" lg="6">
                <Link to={`/Comprar/${plan.id}`}>
                <Card className="card-transparent mb-5">
                    <div className="card-img-wrapper">
                        <img src={imagen(plan.id)} className="card-img-top rounded" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title font-weight-bold font-size-lg">
                            {plan.nombre}
                        </h5>
                        <p className="card-text">
                            {plan.precio}
                        </p>
                        <p>Usuarios : 1</p>
                        <p>Facturas : 30/mes</p>
                        <p>Lista de Menus : 2</p>
                        <p>Reportes: 3</p>
                        <p>inventarios</p>
                    </div>
                </Card>
                </Link>
            </Col>
        )
    })

    if(props.plans != null){
        return planes
    }else{
        return <div></div>
    }

}


const Plan = (props) => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlans())
    },[]);

      

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
                                                    <CardPlan plans={props.plans.plans}/>
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

const mapStateToProps = state => ({
    plans: state.PlanRoukka,
});

export default connect(mapStateToProps)(Plan);
