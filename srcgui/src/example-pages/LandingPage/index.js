import React, { Fragment } from 'react';

import { Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import hero9 from '../../assets/images/hero-bg/hero-9.jpg';
import { Button, UncontrolledTooltip, Badge } from 'reactstrap';
import Header from '../../layout-components/Header';
import Cards5Examples29 from '../../example-components/Cards5/Cards5Examples29';
const LandingPage = () => {
  return (
    <Fragment>
      <Header/>
      <div className="hero-wrapper bg-composed-wrapper min-vh-100">
        <div className="flex-grow-1 w-100 d-flex align-items-center"> 
          <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
            <div className="container pb-5">
              <Row>
                <Col lg="10" className="px-0 mx-auto d-flex align-items-center">
                  <div className="text-center">
                    <div className="px-4 px-sm-0  mt-4">
                      <h1 className="display-2 mb-5 font-weight-bold">
                        Restaurante Roukka, lo mejor en comida de Cali
                      </h1>
                      <p className="font-size-xl  mb-3">
                        Para obtener una franquicia es necesario de que elijas un plan
                      </p>
                      <p className="text-white font-size-lg">
                        Check out the live preview to see all the available
                        components in action!
                      </p>
                      <div>                        
                        <Cards5Examples29/>
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

export default LandingPage;
