import React, {useState, useEffect} from 'react'

import {Modal, InputGroup,Label, Input, FormGroup,Card, Col, Button} from 'reactstrap'

function ModalFormEmpleadoT (props) {

    //El estado del formulario, que corresponde a los datos de los inputs
    const [state, setState] = useState({
        id: '',
        first_name: '',
        last_name: '',
        email:'',
        password:'',
        rol: ''
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
                first_name: props.datos.first_name,
                last_name: props.datos.last_name,
                email: props.datos.email,
                rol: props.datos.rol
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
                titulo:'Registrar nuevo Empleado',
                boton: 'Registrar'
            })  
        } else{
            setDatosForm({
                titulo:'Modificar Empleado',
                boton: 'Modificar'
            }) 
        }        
    }, [props.nuevo])

    //Con esta funcion limpio los inputs
    const initForm = () => {
        setState({
            ...state,
            id: '',
            first_name: '',
            last_name: '',
            email:'',
            password:'',
            rol:''
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
            props.postRegisterEmpleado({first_name: state.first_name, 
                                        last_name: state.last_name,
                                        email:state.email,
                                        password: state.password,
                                        rol: state.rol})
            initForm() 
        }
        else if(datosForm.boton==='Modificar'){   
            props.putUpdateEmpleado({id: state.id,                                   
                                    first_name: state.first_name, 
                                    last_name: state.last_name,
                                    email:state.email,
                                    rol: state.rol}
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
                                <Label for="first_name" sm={5}>
                                    Nombre del Empleado
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="text"
                                        name="first_name"
                                        value={state.first_name}
                                        id="firts_name"
                                        placeholder="Juan Carlos"
                                        maxLength="20"
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="last_name" sm={5}>
                                    Apellido del Cliente
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="text"
                                        name="last_name"
                                        value={state.last_name}
                                        id="last_name"
                                        placeholder="Castro Ramirez"
                                        maxLength="20"
                                        onChange={handleChange}
                                        required
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="email" sm={5}>
                                    Email
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={state.email}
                                        id="email"
                                        placeholder="juanpablo@gmail.com"
                                        maxLength="300"
                                        onChange={handleChange}
                                        
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="password" sm={5}>
                                    Contraseña
                                </Label>
                                <Col sm={7}>
                                    <Input
                                        type="password"
                                        name="password"
                                        value={state.password}
                                        id="password"
                                        placeholder=""
                                        maxLength="300"
                                        onChange={handleChange}
                                        
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="rol" sm={5}>
                                    Rol
                                </Label>
                                <Col sm={7}>
                                    <Input type="select" name="rol" id="rol" onChange={handleChange} value={state.rol} required>
                                        <option></option>
                                        <option value="vendedor">Vendedor</option>
                                        <option value="administrador">Administrador</option>
                                        
                                    </Input>
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

export default ModalFormEmpleadoT;