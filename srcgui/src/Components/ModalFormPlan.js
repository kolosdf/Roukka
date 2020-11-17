import React, { useState, useEffect } from 'react'
import { Multiselect } from 'multiselect-react-dropdown';
import { Modal, InputGroup, Label, Input, FormGroup, Card, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ModalFormPlan(props) {

    //El estado del formulario, que corresponde a los datos de los inputs
    const [state, setState] = useState({
        id: '',
        nombre: '',
        precio: '',
        imagen: '',
        funciones: []
    })

    //Es otra estado con el que establezco si es un formulario de registrar o modificar
    const [datosForm, setDatosForm] = useState({
        titulo: '',
        boton: '',
        icon: ''
    })

    const onSelect = (selectedList, selectedItem) => {

        setState({
            ...state,
            funciones: selectedList
        })
        console.log(state)

    }

    const onRemove = (selectedList, removedItem) => {
        setState({
            ...state,
            funciones: selectedList
        })

    }

    //Con este hook establezco los datos si es un formulario para modificar
    useEffect(() => {
        const actualizar = () => {
            setState({
                id: props.datos.id,
                nombre: props.datos.nombre,
                precio: props.datos.precio,
                imagen: props.datos.imagen,
                funciones: props.funciones.funcionalidades.filter(funcion => {
                    if (props.datos.funciones.indexOf(funcion.id) != -1) {
                        return true
                    } else {
                        return false
                    }
                }),
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
                titulo: 'Registrar nuevo plan',
                boton: 'Registrar',
                icon: 'plus'
            })
        } else {
            setDatosForm({
                titulo: 'Modificar Plan',
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
            nombre: '',
            precio: '',
            imagen: '',
            funciones: []

        })
    }

    //Con esta funcion controlo los inputs para que cada valor que ingrese, 
    //se almacene en el respectivo estado
    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;


        setState({
            ...state,
            [name]: value
        });


    }

    //Con este metodo hago el submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(datosForm.boton)
        if (datosForm.boton === 'Registrar') {
            props.postRegisterPlan({ nombre: state.nombre, precio: state.precio, imagen: state.imagen, funciones: state.funciones.map(funcion => funcion.id) })
        }
        else if (datosForm.boton === 'Modificar') {
            props.putUpdatePlan({ id: state.id, nombre: state.nombre, precio: state.precio, imagen: state.imagen, funciones: state.funciones.map(funcion => funcion.id) })
        }
    }


    return (
        <Modal zIndex={2000} centered isOpen={props.modalState} toggle={props.modelToggle}>
            <div>
                <Card className="shadow-none border-0">
                    <div className="card-header d-block bg-first text-white pt-5 pb-5 ">

                        <FontAwesomeIcon
                            icon={['fas', datosForm.icon]}
                            className="opacity-8"
                            size="2x"
                        />
                        <div className="text-center">
                            <FontAwesomeIcon icon={['fas', 'file-invoice-dollar']} size="3x" /> <h1>{datosForm.titulo}</h1>
                        </div>
                    </div>
                    <div className="card-body px-lg-5 py-lg-5">
                        <form method="post" onSubmit={(event) => handleSubmit(event)} >
                            <FormGroup row>
                                <Label for="nombre" sm={5}>
                                    Nombre del Plan
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="text"
                                        name="nombre"
                                        value={state.nombre}
                                        id="nombre"
                                        placeholder="Enterprise"
                                        maxLength="20"
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="precio" sm={5}>
                                    Precio del Plan
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="text"
                                        name="precio"
                                        value={state.precio}
                                        id="precio"
                                        placeholder="40000"
                                        maxLength="20"
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="imagen" sm={5}>
                                    Imagen del Plan
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="text"
                                        name="imagen"
                                        value={state.imagen}
                                        id="imagen"
                                        placeholder="http//:imagen.jpg"
                                        maxLength="300"
                                        onChange={handleChange}

                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={5} htmlFor="funciones">Funciones</Label>
                                <Col sm={7}>
                                    <Multiselect
                                        required
                                        selectedValues={state.funciones}
                                        options={props.funciones.funcionalidades} // Options to display in the dropdown
                                        // Preselected value to persist in dropdown
                                        onSelect={onSelect} // Function will trigger on select event
                                        onRemove={onRemove} // Function will trigger on remove event
                                        displayValue="nombre" // Property name to display in the dropdown options
                                    />
                                </Col>

                            </FormGroup>
                            <div className="text-center">
                                <Button type="submit" outline color="first" className="mt-4 btn-lg">
                                    {datosForm.boton}
                                </Button>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        </Modal>)
}

export default ModalFormPlan;