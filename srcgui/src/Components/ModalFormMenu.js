import React, { useState, useEffect } from 'react'
import { Multiselect } from 'multiselect-react-dropdown';

import { Modal, Label, Input, FormGroup, Card, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ModalFormMenu(props) {

    //El estado del formulario, que corresponde a los datos de los inputs
    const [state, setState] = useState({
        id: '',
        nombre: '',
        imagen: '',
        descripcion: '',
        platillos: [],
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
            platillos: selectedList
        })
        console.log(state)

    }

    const onRemove = (selectedList, removedItem) => {
        setState({
            ...state,
            platillos: selectedList
        })

    }

    //Con este hook establezco los datos si es un formulario para modificar
    useEffect(() => {
        const actualizar = () => {
            setState({
                id: props.datos.id,
                nombre: props.datos.nombre,
                imagen: props.datos.imagen,
                descripcion: props.datos.descripcion,
                platillos: props.platillos.platillos.filter(platillo => {
                    if (props.datos.platillos.indexOf(platillo.id) != -1) {
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
                titulo: 'Registrar nuevo Menu',
                boton: 'Registrar',
                icon: 'plus'
            })
        } else {
            setDatosForm({
                titulo: 'Modificar Menu',
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
            imagen: '',
            descripcion: '',
            platillos: [],
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
            props.postRegisterMenu({ nombre: state.nombre, imagen: state.imagen, descripcion: state.descripcion, platillos: state.platillos.map(platillo => platillo.id) })

        }
        else if (datosForm.boton === 'Modificar') {
            props.putUpdateMenu({ id: state.id, nombre: state.nombre, imagen: state.imagen, descripcion: state.descripcion, platillos: state.platillos.map(platillo => platillo.id) })
        }
    }


    return (
        <Modal zIndex={2000} centered isOpen={props.modalState} toggle={props.modelToggle}>
            <div>
                <Card className="shadow-none border-0">
                    <div className="card-header d-block bg-warning text-white pt-5 pb-5 ">
                        <FontAwesomeIcon
                            icon={['fas', datosForm.icon]}
                            className="opacity-8"
                            size="2x"
                        />
                        <div className="text-center">
                            <FontAwesomeIcon icon={['fab', 'elementor']} size="3x" /><h1>{datosForm.titulo}</h1>
                        </div>
                    </div>
                    <div className="card-body px-lg-5 py-lg-5">
                        <form method="post" onSubmit={(event) => handleSubmit(event)} >
                            <FormGroup row>
                                <Label for="nombre" sm={5}>
                                    Nombre del Menu
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="text"
                                        name="nombre"
                                        value={state.nombre}
                                        id="nombre"
                                        placeholder="Asados"
                                        maxLength="20"
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label for="imagen" sm={5}>
                                    Imagen del Menu
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="text"
                                        name="imagen"
                                        value={state.imagen}
                                        id="imagen"
                                        placeholder="www.image.png"
                                        maxLength="300"
                                        onChange={handleChange}
                                        required

                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={5} htmlFor="descripcion">Descripción</Label>
                                <Col>
                                    <Input
                                        type="textarea"
                                        name="descripcion"
                                        value={state.descripcion}
                                        onChange={handleChange}
                                        id="descripcion"
                                        placeholder="Deliciosos asados al barril y al carbón"
                                        required
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label sm={5} htmlFor="platillos">Platillos</Label>
                                <Col sm={7}>
                                    <Multiselect
                                        selectedValues={state.platillos}
                                        options={props.platillos.platillos} // Options to display in the dropdown
                                        // Preselected value to persist in dropdown
                                        onSelect={onSelect} // Function will trigger on select event
                                        onRemove={onRemove} // Function will trigger on remove event
                                        displayValue="nombre" // Property name to display in the dropdown options
                                    />
                                </Col>

                            </FormGroup>
                            <div className="text-center">
                                <Button type="submit" color="warning" outline className="mt-4 btn-lg">
                                    {datosForm.boton}
                                </Button>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
        </Modal>)
}

export default ModalFormMenu;