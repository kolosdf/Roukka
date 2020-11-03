import React, {useState, useEffect} from 'react'
import { Multiselect } from 'multiselect-react-dropdown';

import {Modal, Label, Input, FormGroup,Card, Col, Button} from 'reactstrap'
function ModalFormPlatillo (props) {

    //El estado del formulario, que corresponde a los datos de los inputs
    const [state, setState] = useState({
        id: '',
        nombre: '',
        precio: '',
        unidades: '',
        imagen:'',
        ingredientes: [],
        estado: ''
    })

    //Es otra estado con el que establezco si es un formulario de registrar o modificar
    const [datosForm, setDatosForm] = useState({
        titulo:'',
        boton:'',
    })

    const [ingredientes, setIngredientes] = useState([{ingrediente: 'Arroz', id: 1},{ingrediente: 'Lechuga', id: 2}]
    );

    
 
const onSelect = (selectedList, selectedItem) => {

    setState({
        ...state,
        ingredientes: selectedList
    })
    console.log(state)
    
}
 
const onRemove = (selectedList, removedItem) =>{
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
                    if(props.datos.ingredientes.indexOf(ingrediente.id) != -1){
                        return true
                    }else{
                        return false
                    }}),
                estado: props.datos.estado
            })
        }
        actualizar();  
        console.log(props.datos.ingredientes)
        console.log(props.ingredientes.ingredientes.filter(ingrediente => {
                    if(props.datos.ingredientes.indexOf(ingrediente.id) != -1){
                        return true
                    }else{
                        return false
                    }}))
    }, [props.datos])


    //Con este hook dependiendo si el props.nuevo es verdadero
    //establezo el titulo de un formulario de registro

    useEffect(() => {        
        if(props.nuevo){
            initForm();
            setDatosForm({
                titulo:'Registrar nuevo Platillo',
                boton: 'Registrar'
            })  
        } else{
            setDatosForm({
                titulo:'Modificar Platillo',
                boton: 'Modificar'
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
            unidades:'',
            imagen: '',
            ingredientes: [],
            estado:''
        })
    }    

    //Con esta funcion controlo los inputs para que cada valor que ingrese, 
    //se almacene en el respectivo estado
    const handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        
        const name = target.name;

        if(target.type==='select'){
            const value =  Array.from(target.options).filter(o => o.selected).map(o => o.value)
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
    const handleSubmit = (e) =>{ 
        e.preventDefault()
        console.log(datosForm.boton)
        if(datosForm.boton==='Registrar'){
            props.postRegisterPlatillo({nombre: state.nombre, precio: state.precio, unidades: state.unidades, imagen: state.imagen, ingredientes: state.ingredientes.map(ingrediente => ingrediente.id  )})
            initForm() 
        }
        else if(datosForm.boton==='Modificar'){   
            props.putUpdatePlatillo({id: state.id, nombre: state.nombre, precio: state.precio, unidades: state.unidades, imagen: state.imagen, ingredientes: state.ingredientes.map(ingrediente => ingrediente.id  )})
        }
    }
    

    return(
        <Modal zIndex={2000}  centered isOpen={props.modalState} toggle={props.modelToggle}>
            <div>
                <Card className="bg-secondary shadow-none border-0">
                    <div className="card-header d-block bg-white pt-5 pb-5 ">
                        <div className="text-center">
                            <h1>{datosForm.titulo}</h1>
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
                                        placeholder="213"
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
                                        placeholder="213"
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
                                        placeholder="213"
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
                                        placeholder="213"
                                        maxLength="300"
                                        onChange={handleChange}
                                        
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
                            
                            <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                    className="custom-control-input"
                                    id="estado"
                                    type="checkbox"
                                    name="estado"
                                    checked={state.estado}
                                    onChange={handleChange}
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="estado">
                                    <span>Estado</span>
                                </label>
                            </div>
                            <div className="text-center">
                                <Button type="submit" color="second" className="mt-4">
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