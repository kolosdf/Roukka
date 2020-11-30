import React, { Fragment } from 'react';

import { Row,Col,
    FormText,
    Form,
    Label,
    FormGroup,
    Input,
    Button } from 'reactstrap';




const Contact = () => {
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
                                                Contactanos para seguir mejorando nuestro servicio.
                                            </h1>
                                            
                                            <div>
                                            <Form>

        <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Nombre Completo
        </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="email"
            id="exampleEmail"
            placeholder="Juan Camilo Gonzalez"
          />
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>
          Email
        </Label>
        <Col sm={10}>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="juan@gmail.com"
          />
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="exampleSelect" sm={2}>
          Tipo de PQRSD
        </Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect" >
          <option></option>
          <option>Peteción</option>
          <option>Quejas</option>
          <option>Reclamo</option>
          <option>Sugerencias</option>
          <option>Denuncias</option>


          </Input>
        </Col>
      </FormGroup>
      
      <FormGroup row>
        <Label for="exampleText" sm={2}>
          Comentario
        </Label>
        <Col sm={10}>
          <Input type="textarea" rows={6} name="text" id="exampleText" />
        </Col>
      </FormGroup>
    
      <FormGroup row>
        <Col sm={{ offset: 2,size: 2}}>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox2" /> Suscribirme a noticias y promociones.
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <Button color="primary">Enviar</Button>
    </Form>
                                            </div>
                                        </div>
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

export default Contact;
