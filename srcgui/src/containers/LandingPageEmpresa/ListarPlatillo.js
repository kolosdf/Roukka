import React, { useState, Fragment, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

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
    Alert
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CardBuyMenu = props => {
    if (props.menu == null) {
        return <Fragment></Fragment>;
    } else {
        return (
            <Card className="mb-3">
                {console.log(props.menu)}
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
    }
};


const CardPlatillo = (props) => {


    const platillos = props.platillos.map((platillo) => {
        return(
            <Col xl="4" lg="6"  key={platillo.id}>
                
                <Card className="card-transparent mb-5">
                    <div className="card-img-wrapper">
                        <img src={platillo.imagen} className="card-img-top rounded" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title font-weight-bold font-size-lg">
                            {platillo.nombre}
                        </h5>
                        <p>
                            
                        </p>
                        <p>$ {platillo.precio}</p>
                        <Button onClick={props.addCarrito.bind(this,platillo)} >Añadir al carro</Button>
                    </div>
                </Card>
            </Col>
        )
    })

    if(props.platillos != null){
        return platillos
    }else{
        return <div></div>
    }

}

const ListarPlatillo = props => {
    console.log(props.menus)
    const [state, setState] = useState({
        platillos:[],
        menu: ''

    });

    useEffect(() => {
        const actualizar = () => {
            setState({
                ...state,
                menu:props.menus.menus.filter(
                    menu => menu.id == props.match.params.idMenu
                )[0]
            });
        };
        actualizar();
    }, []);

    const initForm = () => {
        setState({
            ...state,
            platillos:[],
            plan: ''
        });
    };

    const [focus, setFocus] = useState('');

    const handleFocus = e => {
        setFocus({
            ...focus,
            focus: e.target.name
        });
    };

    const handleChange = e => {
        const { name, value } = e.target;

        setState({
            ...state,
            [name]: value
        });
        console.log(state);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.postRegisterEmpresa(state);
        initForm();
        return <Alert />;
    };

    return (
        <Fragment>
            {console.log(state)}
            <div className="hero-wrapper bg-composed-wrapper min-vh-100">
                <div className="flex-grow-1 w-100 d-flex align-items-center">
                    <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
                        <div className="container pb-5">
                            <Row>
                                <Col lg="10" className="px-0 mx-auto d-flex align-items-center">
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
                                <Card className="mb-3">
                                        <CardPlatillo addCarrito={props.addCarrito} platillos={props.platillos.platillos} menu={state.menu}/>
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
