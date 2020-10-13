import React, { useState, Fragment } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import plan1 from '../../assets/images/stock-photos/plan1.jpg'
import {
    Row, Col,
    FormText,
    Form,
    Label,
    FormGroup,
    Input,
    Button, Card, CardBody
} from 'reactstrap';

import {useDispatch} from 'react-redux'
import { postRegisterEmpresa } from '../../config/ActionCreators';

const ComprarPlan = (props) => {

    const [state, setState] = useState({
        schema_name: '',
        nombre: '',
        email: '',
        numero_tarjeta: '',
        cvv: '',
        fecha_vencimiento: '',
        titular: '',
        plan: 9
    })

    const dispatch = useDispatch();

    const [focus, setFocus] = useState('')


    const handleFocus = (e) => {
        setFocus({
            ...focus,
             focus: e.target.name 
            });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setState({ 
            ...state,
            [name]: value 
        });
        console.log(state)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(postRegisterEmpresa(state))
        
    }

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
                                                Este es el comienzo de una nueva transformación para tu empresa.
                                            </h1>
                                        </div>
                                    </div>
                                </Col>
                            </Row>


                            <Row className="mb-3 ">
                                <Col>
                                    <Card className=" mb-3">
                                        <img alt="..." className="card-img-top" src={plan1} />
                                        <Col lg="10" className="px-0 mx-auto d-flex align-items-center">

                                            <div className="text-center">
                                                <div className="px-4 px-sm-0  mt-4">
                                                    <h3 className=" mb-5 font-weight-bold">
                                                        Plan Empresarial
                                                </h3>

                                                </div></div>

                                        </Col>
                                    </Card>
                                    <Card className="mb-3">
                                        <Col lg="10" className="px-0 mx-auto d-flex align-items-center">
                                            <div className="text-center">
                                                <div className="px-4 px-sm-0  mt-4">
                                                    <h3 className=" mb-5 font-weight-bold">
                                                        Tarjeta de Crédito
                                                </h3>
                                                </div>
                                            </div>
                                            <div className="mr-2">
                                                <CardBody >
                                                    <Cards
                                                        cvc={state.cvv}
                                                        expiry={state.fecha_vencimiento}
                                                        focused={focus}
                                                        name={state.titular}
                                                        number={state.numero_tarjeta}
                                                    />
                                                </CardBody>
                                            </div>

                                        </Col>
                                    </Card>
                                </Col>
                                <Col lg="7">
                                    <div className="">
                                        <Card sm="7" className="mb-3">
                                            <CardBody className="m-auto">
                                                <Form method="post" onSubmit={(event) => handleSubmit(event)} className=" mt-4 ">
                                                    <h2 className="mb-4 font-weight-bold text-center">Registro cliente</h2>
                                                    <FormGroup row>
                                                        <Label for="schema_name" sm={4}>
                                                            Nombre del Subdominio
                                                </Label>
                                                        <Col sm={8}>
                                                            <Input
                                                                type="text"
                                                                name="schema_name"
                                                                id="schema_name"
                                                                placeholder="*****.Qbano"
                                                                onChange={handleChange}
                                                                onFocus={handleFocus}
                                                                required
                                                            />
                                                        </Col>
                                                    </FormGroup>
                                                    <FormGroup row>
                                                        <Label for="nombre" sm={4}>
                                                            Nombre de la tienda
                                                </Label>
                                                        <Col sm={8}>
                                                            <Input
                                                                type="text"
                                                                name="nombre"
                                                                id="nombre"
                                                                placeholder="Qbano"
                                                                onChange={handleChange}
                                                                onFocus={handleFocus}
                                                                required
                                                            />
                                                        </Col>
                                                    </FormGroup>

                                                    <FormGroup row>
                                                        <Label for="email" sm={4}>
                                                            Email
                                                </Label>
                                                        <Col sm={8}>
                                                            <Input
                                                                type="email"
                                                                name="email"
                                                                id="email"
                                                                placeholder="juan@gmail.com"
                                                                onChange={handleChange}
                                                                onFocus={handleFocus}
                                                                required
                                                            />
                                                        </Col>
                                                    </FormGroup>

                                                    <FormGroup row>
                                                        <Label for="numero_tarjeta" sm={4}>
                                                            Número de la tajeta
                                                </Label>
                                                        <Col sm={8}>
                                                            <Input
                                                                type="text"
                                                                name="numero_tarjeta"
                                                                id="numero_tarjeta"
                                                                placeholder="1233 3434 2223 2333"
                                                                maxLength="16"
                                                                onChange={handleChange}
                                                                onFocus={handleFocus}
                                                                required
                                                            />
                                                        </Col>
                                                    </FormGroup>

                                                    <FormGroup row>
                                                        <Label for="fecha_vencimiento" sm={4}>
                                                            Vencimiento
                                                </Label>
                                                        <Col sm={8}>
                                                            <Input
                                                                type="text"
                                                                name="fecha_vencimiento"
                                                                id="fecha_vencimiento"
                                                                placeholder="0221"
                                                                maxLength="4"
                                                                onChange={handleChange}
                                                                onFocus={handleFocus}
                                                                required
                                                            />
                                                        </Col>
                                                    </FormGroup>

                                                    <FormGroup row>
                                                        <Label for="cvv" sm={4}>
                                                            CVC
                                                </Label>
                                                        <Col sm={8}>
                                                            <Input
                                                                type="text"
                                                                name="cvv"
                                                                id="cvv"
                                                                placeholder="213"
                                                                maxLength="4"
                                                                onChange={handleChange}
                                                                onFocus={handleFocus}
                                                                required
                                                            />
                                                        </Col>
                                                    </FormGroup>


                                                    <FormGroup row>
                                                        <Label for="titular" sm={4}>
                                                            Nombre del Titular
                                                </Label>
                                                        <Col sm={8}>
                                                            <Input
                                                                type="text"
                                                                name="titular"
                                                                id="titular"
                                                                placeholder="Juan Camilo Gonzalez"
                                                                onChange={handleChange}
                                                                onFocus={handleFocus}
                                                                required
                                                            />
                                                        </Col>
                                                    </FormGroup>
                                                    <Button  type="submit" className="col-md-6 offset-3" color="primary">Registrar Pago</Button>
                                                </Form>
                                            </CardBody>
                                        </Card>
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
export default ComprarPlan;
