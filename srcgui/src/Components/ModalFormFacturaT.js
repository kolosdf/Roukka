import React, { useState, useEffect } from 'react'
import { Modal, ModalHeader, CardBody, CardTitle, CustomInput, ModalFooter, ModalBody, Form, InputGroup, Label, Input, FormGroup, Card, Row, Col, Button } from 'reactstrap'
import { Multiselect } from 'multiselect-react-dropdown';
function ModalFormFacturaT(props) {
    //El estado del formulario, que corresponde a los datos de los inputs
    const [state, setState] = useState({
        id: '',
        nombre: '',
        precio: '',
        imagen: '',
        estado: '',
        funciones: []
    })

    //Es otra estado con el que establezco si es un formulario de registrar o modificar
    const [datosForm, setDatosForm] = useState({
        titulo: '',
        boton: '',
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




    return (

        <Modal zIndex={2000} centered size="lg" isOpen={props.modalState} toggle={props.modelToggle}>
            <ModalHeader toggle={props.modelToggle}>Factura</ModalHeader>
            <ModalBody>
                <Form>
                    <Row>
                        <Col sm={8}>

                            <Card className="card-box mb-5">
                                <CardBody>
                                    <CardTitle className="font-weight-bold font-size-lg mb-4">Cliente</CardTitle>
                                    <FormGroup>
                                        <div>
                                            <Multiselect
                                                required

                                                options={props.clientes.clientes} // Options to display in the dropdown
                                                // Preselected value to persist in dropdown
                                                onSelect={onSelect} // Function will trigger on select event
                                                onRemove={onRemove} // Function will trigger on remove event
                                                displayValue="first_name" // Property name to display in the dropdown options
                                            />

                                        </div>
                                    </FormGroup>
                                </CardBody>
                            </Card>

                        </Col>
                    </Row>

                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>


                </Form>


            </ModalBody>
            <ModalFooter>
                <Button color="link" className="btn-link-dark" onClick={props.modelToggle}>Close</Button>{' '}
                <Button color="primary" className="ml-auto" onClick={props.modelToggle}>Save changes</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalFormFacturaT