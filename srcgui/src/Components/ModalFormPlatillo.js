import React, { useState, useEffect } from 'react'
import { Multiselect } from 'multiselect-react-dropdown';

import { Modal, Label, Input, FormGroup, Card, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ModalFormPlatillo(props) {

    //El estado del formulario, que corresponde a los datos de los inputs
    const [state, setState] = useState({
        id: '',
        nombre: '',
        precio: '',
        unidades: '',
        imagen: '',
        ingredientes: [],
    })

    //Es otra estado con el que establezco si es un formulario de registrar o modificar
    const [datosForm, setDatosForm] = useState({
        titulo: '',
        boton: '',
        icon: ''
    })

    const [ingredientes, setIngredientes] = useState([{ ingrediente: 'Arroz', id: 1 }, { ingrediente: 'Lechuga', id: 2 }]
    );



    const onSelect = (selectedList, selectedItem) => {

        setState({
            ...state,
            ingredientes: selectedList
        })
        console.log(state)

    }

    const onRemove = (selectedList, removedItem) => {
        setState({
            ...state,
            ingredientes: selectedList
        })

    }

    //Con este hook establezco los datos si es un formulario para modificar
    useEffect(() => {
        const actualizar = () => {
            setState({
                id: props.datos.id,
                nombre: props.datos.nombre,
                precio: props.datos.precio,
                unidades: props.datos.unidades,
                imagen: props.datos.imagen,
                ingredientes: props.ingredientes.ingredientes.filter(ingrediente => {
                    if (props.datos.ingredientes.indexOf(ingrediente.id) != -1) {
                        return true
                    } else {
                        return false
                    }
                }),
            })
        }
        actualizar();
        console.log(props.datos.ingredientes)
        console.log(props.ingredientes.ingredientes.filter(ingrediente => {
            if (props.datos.ingredientes.indexOf(ingrediente.id) != -1) {
                return true
            } else {
                return false
            }
        }))
    }, [props.datos])


    //Con este hook dependiendo si el props.nuevo es verdadero
    //establezo el titulo de un formulario de registro

    useEffect(() => {
        if (props.nuevo) {
            initForm();
            setDatosForm({
                titulo: 'Registrar nuevo Platillo',
                boton: 'Registrar',
                icon: 'plus'
            })
        } else {
            setDatosForm({
                titulo: 'Modificar Platillo',
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
            unidades: '',
            imagen: '',
            ingredientes: [],
        })
    }

    //Con esta funcion controlo los inputs para que cada valor que ingrese, 
    //se almacene en el respectivo estado
    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        const name = target.name;

        if (target.type === 'select') {
            const value = Array.from(target.options).filter(o => o.selected).map(o => o.value)
            setState({
                ...state,
                [name]: value
            })
        }

        setState({
            ...state,
            [name]: value
        });

        console.log(state)

    }

    //Con este metodo hago el submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(datosForm.boton)
        if (datosForm.boton === 'Registrar') {
            props.postRegisterPlatillo({ nombre: state.nombre, precio: state.precio, unidades: state.unidades, imagen: state.imagen, ingredientes: state.ingredientes.map(ingrediente => ingrediente.id) })
        }
        else if (datosForm.boton === 'Modificar') {
            props.putUpdatePlatillo({ id: state.id, nombre: state.nombre, precio: state.precio, unidades: state.unidades, imagen: state.imagen, ingredientes: state.ingredientes.map(ingrediente => ingrediente.id) })
        }
    }


    return (
        <Modal zIndex={2000} centered isOpen={props.modalState} toggle={props.modelToggle}>
            <div>
                <Card className="shadow-none border-0">
                    <div className="card-header d-block bg-success text-white pt-5 pb-5 ">
                        <FontAwesomeIcon
                            icon={['fas', datosForm.icon]}
                            className="opacity-8"
                            size="2x"
                        />
                        <div className="text-center">
                            <FontAwesomeIcon icon={['fas', 'utensils']} size="3x" /> <h1>{datosForm.titulo}</h1>
                        </div>
                    </div>
                    <div className="card-body px-lg-5 py-lg-5">
                        <form method="post" onSubmit={(event) => handleSubmit(event)} >
                            <FormGroup row>
                                <Label for="nombre" sm={5}>
                                    Nombre del Platillo
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="text"
                                        name="nombre"
                                        value={state.nombre}
                                        id="nombre"
                                        placeholder="Arroz con Pollo"
                                        maxLength="20"
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="precio" sm={5}>
                                    Precio del Platillo
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="text"
                                        name="precio"
                                        value={state.precio}
                                        id="precio"
                                        placeholder=" 15500"
                                        maxLength="20"
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="unidades" sm={5}>
                                    Unidades del Platillo
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="text"
                                        name="unidades"
                                        value={state.unidades}
                                        id="unidades"
                                        placeholder="15"
                                        maxLength="20"
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="imagen" sm={5}>
                                    Imagen del Platillo
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="text"
                                        name="imagen"
                                        value={state.imagen}
                                        id="imagen"
                                        placeholder="www.image.jpg"
                                        maxLength="300"
                                        onChange={handleChange}
                                        required


                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={5} htmlFor="ingredientes">Ingredientes</Label>
                                <Col sm={7}>
                                    <Multiselect
                                        selectedValues={state.ingredientes}
                                        options={props.ingredientes.ingredientes} // Options to display in the dropdown
                                        // Preselected value to persist in dropdown
                                        onSelect={onSelect} // Function will trigger on select event
                                        onRemove={onRemove} // Function will trigger on remove event
                                        displayValue="nombre" // Property name to display in the dropdown options
                                    />
                                </Col>

                            </FormGroup>
                            <div className="text-center">
                                <Button type="submit" color="success" outline className="mt-4 btn-lg">
                                    {datosForm.boton}
                                </Button>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        </Modal>)
}

export default ModalFormPlatillo;