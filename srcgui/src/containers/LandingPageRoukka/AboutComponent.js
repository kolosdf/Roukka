import React, { Fragment } from 'react';

import { Row, Col, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../assets/images/avatars/avatar7.jpg';

import Cards5Examples29 from '../../example-components/Cards5/Cards5Examples29'

const About = () => {
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
                                                Quienes Somos
                                            </h1>
                                            <p className="font-size-xl  mb-3">
                                                Nuestro equipo de desarrollo
                                            </p>
                                            <div>
                                                <Card className="card-box mb-5 ml-5 p-5 text-center">
                                                    <div className="my-3">
                                                        <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                                                            Developers
                                                        </h6>
                                                        <p className="text-black-50 mb-0">
                                                            Los mejores en cada area del software.
                                                         </p>
                                                    </div>
                                                    <div className="d-flex flex-row flex-wrap justify-content-center">
                                                        <div className="position-relative px-5 py-3">
                                                            <div className="divider-v divider-v-lg" />
                                                            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
                                                                <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                                                                    <div className="rounded-circle overflow-hidden">
                                                                        <img alt="..." className="img-fluid" src={avatar1} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="font-weight-bold mt-1">Cristina Mejia</div>
                                                            <div className="font-weight-bold font-size-sm text-black-50">
                                                                <FontAwesomeIcon
                                                                    icon={['fas', 'star']}
                                                                    className="text-warning mr-1"
                                                                />
                                                                <span>4.8</span>
                                                                <span className="px-1">|</span>
                                                                Back-end Dev
                                                            </div>
                                                        </div>



                                                        <div className="position-relative px-5 py-3">
                                                            <div className="divider-v divider-v-lg" />
                                                            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
                                                                <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                                                                    <div className="rounded-circle overflow-hidden">
                                                                        <img alt="..." className="img-fluid" src={avatar5} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="font-weight-bold mt-1">Juan Pablo Rendón</div>
                                                            <div className="font-weight-bold font-size-sm text-black-50">
                                                                <FontAwesomeIcon
                                                                    icon={['fas', 'star']}
                                                                    className="text-warning mr-1"
                                                                />
                                                                <span>4.8</span>
                                                                <span className="px-1">|</span>
                                                            Back-end Dev
                                                            </div>
                                                        </div>
                                                        <div className="position-relative px-5 py-3">
                                                            <div className="divider-v divider-v-lg" />
                                                            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
                                                                <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                                                                    <div className="rounded-circle overflow-hidden">
                                                                        <img alt="..." className="img-fluid" src={avatar6} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="font-weight-bold mt-1">Melissa Fuentes</div>
                                                            <div className="font-weight-bold font-size-sm text-black-50">
                                                                <FontAwesomeIcon
                                                                    icon={['fas', 'star']}
                                                                    className="text-warning mr-1"
                                                                />
                                                                <span>4.8</span>
                                                                <span className="px-1">|</span>
              Front-end Dev
            </div>
                                                        </div>
                                                        <div className="position-relative px-5 py-3">
                                                            <div className="avatar-icon-wrapper rounded-circle d-80 mx-auto">
                                                                <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0">
                                                                    <div className="rounded-circle overflow-hidden">
                                                                        <img alt="..." className="img-fluid" src={avatar4} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="font-weight-bold mt-1">Juan David Castro</div>
                                                            <div className="font-weight-bold font-size-sm text-black-50">
                                                                <FontAwesomeIcon
                                                                    icon={['fas', 'star']}
                                                                    className="text-warning mr-1"
                                                                />
                                                                <span>4.8</span>
                                                                <span className="px-1">|</span>
              Front-end Dev
            </div>
                                                        </div>
                                                    </div>
                                                </Card>
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

export default About;
