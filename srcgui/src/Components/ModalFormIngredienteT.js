import React, {useState, useEffect} from 'react'

import {Modal, InputGroup,Label, Input, FormGroup,Card, Col, Button} from 'reactstrap'

function ModalFormIngredienteT (props) {

    //El estado del formulario, que corresponde a los datos de los inputs
    const [state, setState] = useState({
        id: '',
        nombre: '',
    })

    //Es otra estado con el que establezco si es un formulario de registrar o modificar
    const [datosForm, setDatosForm] = useState({
        titulo:'',
        boton:'',
    })

    //Con este hook establezco los datos si es un formulario para modificar
    useEffect(() => {
        const actualizar = () => {
            setState({
                id: props.datos.id,
                nombre: props.datos.nombre,
            })
        }
        actualizar();       
    }, [props.datos])

    //Con este hook dependiendo si el props.nuevo es verdadero
    //establezo el titulo de un formulario de registro

    useEffect(() => {        
        if(props.nuevo){
            initForm();
            setDatosForm({
                titulo:'Registrar nuevo Ingrediente',
                boton: 'Registrar'
            })  
        } else{
            setDatosForm({
                titulo:'Modificar Ingrediente',
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

    //Con este metodo hago el submit
    const handleSubmit = (e) =>{ 
        e.preventDefault()
        console.log(datosForm.boton)
        if(datosForm.boton==='Registrar'){
            props.postRegisterIngrediente({nombre: state.nombre,})
            initForm() 
        }
        else if(datosForm.boton==='Modificar'){   
            props.putUpdateIngrediente({id: state.id,                                   
                                    nombre: state.nombre,}
                                    )
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
                                    Nombre del Ingrediente
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="text"
                                        name="nombre"
                                        value={state.nombre}
                                        id="firts_name"
                                        placeholder="Juan Carlos"
                                        maxLength="20"
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                
                            <div className="custom-control custom-control-alternative custom-checkbox">
                                <input
                                    className="custom-control-input"
                                    id="customCheckLogin"
                                    type="checkbox"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="customCheckLogin">
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

export default ModalFormIngredienteT;