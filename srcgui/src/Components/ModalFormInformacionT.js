import React, { useState, useEffect, Component } from 'react'

import { Modal, InputGroup, Label, Input, FormGroup, Card, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Mapa} from './MainMap'

function ModalFormInformacionT(props) {

    //El estado del formulario, que corresponde a los datos de los inputs
    const [state, setState] = useState({
        id: '',
        mision: '',
        vision: '',
        longitud: '',
        latitud: '',
        nosotros: ''
    })

    //Es otra estado con el que establezco si es un formulario de registrar o modificar
    const [datosForm, setDatosForm] = useState({
        titulo: '',
        boton: '',
        icon: ''
    })

    //Con este hook establezco los datos si es un formulario para modificar
    useEffect(() => {
        const actualizar = () => {
            setState({
                id: props.datos.id,
                mision: props.datos.mision,
                vision: props.datos.vision,
                longitud: props.datos.longitud,
                latitud: props.datos.latitud,
                nosotros: props.datos.nosotros,
            })
        }
        actualizar();
    }, [props.datos])

    //Con este hook dependiendo si el props.nuevo es verdadero
    //establezo el titulo de un formulario de registro

    useEffect(() => {
        if (props.nuevo) {
            initForm();
            setDatosForm({
                titulo: 'Registrar Informacion',
                boton: 'Registrar',
                icon: 'plus'
            })
        } else {
            setDatosForm({
                titulo: 'Modificar Informacion',
                boton: 'Modificar',
                icon: 'edit'
            })
        }
    }, [props.nuevo])

    //Con esta funcion limpio los inputs
    const initForm = () => {
        setState({
            ...state,
            id: '',
            mision: '',
            vision: '',
            longitud: '',
            latitud: '',
            nosotros: '',
        })
    }

    //Con esta funcion controlo los inputs para que cada valor que ingrese, 
    //se almacene en el respectivo estado
    const handleChange = (e) => {
        const { name, value } = e.target;

        setState({
            ...state,
            [name]: value
        });

        console.log(state)

    }

    const handlePosition = (data) => {
        const { latitud, longitud } = data;

        setState({
            ...state,
            latitud:latitud,
            longitud:longitud
        });

        console.log(state)

    }


    //Con este metodo hago el submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(datosForm.boton)

            props.putUpdateInformacion({
                id: state.id,
                mision: state.mision,
                vision: state.vision,
                longitud: state.longitud,
                latitud: state.latitud,
                nosotros: state.nosotros,

        })
    }

    return (
        <Modal zIndex={2000} centered isOpen={props.modalState} toggle={props.modelToggle}>
            <div>
                <Card className="shadow-none border-0">
                    <div className="card-header d-block bg-info text-white pt-5 pb-5 ">
                        <FontAwesomeIcon
                            icon={['fas', datosForm.icon]}
                            className="opacity-8"
                            size="2x"
                        />
                        <div className="text-center">
                            <FontAwesomeIcon icon={['fas', 'carrot']} size="3x" /> <h1>{datosForm.titulo}</h1>
                        </div>
                    </div>
                    <div className="card-body px-lg-5 py-lg-5">
                        <form method="post" onSubmit={(event) => handleSubmit(event)} >
                            <FormGroup row>
                                <Label for="mision" sm={5}>
                                    Mision
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="textarea"
                                        name="mision"
                                        value={state.mision}
                                        id="mision"
                                        placeholder=""
                                        maxLength="300"
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="vision" sm={5}>
                                    Vision
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="textarea"
                                        name="vision"
                                        value={state.vision}
                                        id="vision"
                                        placeholder=""
                                        maxLength="300"
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="nosotros" sm={5}>
                                    Nosotros
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="textarea"
                                        name="nosotros"
                                        value={state.nosotros}
                                        id="nosotros"
                                        placeholder=""
                                        maxLength="300"
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </FormGroup>

                            <div class="card">
                              <div class="card-body">
                              <Label for="nosotros" sm={5}>
                                    Seleccione su ubicacion
                                </Label>
                                <Mapa onChange={handlePosition}/>

                               </div>
                             </div>


                            <div className="text-center">
                                <Button type="submit" color="info" outline className="mt-4 btn-lg">
                                    {datosForm.boton}
                                </Button>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        </Modal>)
}

export default ModalFormInformacionT;
