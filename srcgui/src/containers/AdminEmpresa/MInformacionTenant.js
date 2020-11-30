
import React, { Fragment, useEffect, useState } from 'react';

import PageTitle from '../../Components/PageTitle'
import ModalFormInformacionT from '../../Components/ModalFormInformacionT';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    Table,
    CardBody,
    Card,
    Badge,
    Nav,
    NavItem,
    NavLink,
    Pagination,
    PaginationItem,
    PaginationLink,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';


function FilaTable(props) {
    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div>
                        <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="...">
                            {props.informacion.mision}
                        </a>
                    </div>
                </div>
            </td>
            <td className="text-center">
                <UncontrolledDropdown>
                    <DropdownToggle
                        color="primary"
                        size="sm"
                        className="px-2 py-0 no-caret">
                        <FontAwesomeIcon
                            icon={['fas', 'ellipsis-h']}
                            className="font-size-lg"
                        />
                    </DropdownToggle>
                    <DropdownMenu
                        right
                        className="dropdown-menu-xl overflow-hidden p-0">
                        <Nav
                            pills
                            className="nav-primary flex-column pt-2 pb-3">
                            <NavItem className="px-3">
                                <NavLink
                                    href="#"
                                    onClick={props.modificar.bind(this, props.informacion.id, props.informacion.mision, props.informacion.vision, props.informacion.nosotros, props.informacion.longitud, props.informacion.latitud)}
                                    active>
                                    <div className="nav-link-icon">
                                        <FontAwesomeIcon icon={['fas', 'edit']} />
                                    </div>
                                    <span>Modificar </span>

                                </NavLink>
                            </NavItem>
                            <li className="dropdown-divider" />
                            <NavItem>
                                <NavLink
                                    href="#"
                                    onClick={props.deleteInformacion.bind(this, props.informacion.id)}
                                    className="text-danger mx-3">
                                    <div className="nav-link-icon">
                                        <FontAwesomeIcon icon={['fas', 'times']} />
                                    </div>
                                    <span>Delete</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    )
}




function MInformacionTenant(props) {

    console.log(props.informacion)

    const modificarInformacion = (id, mision, vision, nosotros, longitud, latitud) => {
        setState({
            id: id,
            mision: mision,
            vision: vision,
            nosotros: nosotros,
            longitud: longitud,
            latitud: latitud,

        }, toggle5())
        setNuevo(false)
    }

    const [state, setState] = useState({
        id:'',
        mision:'',
        vision: '',
        nosotros: '',
        longitud: '',
        latitud: '',
    })

    const [modal5, setModal5] = useState(false);

    const [nuevo, setNuevo] = useState(false);

    const toggle5 = () => setModal5(!modal5);



    const modalNuevo = () => {
        setNuevo(true)
        toggle5()
    }

    return (
        <Fragment>


            <ModalFormInformacionT postRegisterInformacion={props.postRegisterInformacion} putUpdateInformacion={props.putUpdateInformacion} nuevo={nuevo} datos={state} modalState={modal5} modelToggle={toggle5} />

            <PageTitle
                titleHeading="Informacion de la empresa" modal={modalNuevo} />
            <Card className="card-box mb-5">
                <div className="card-header">
                    <div className="card-header--title">
                        <small>Informacion</small>

                    </div>

                </div>
                <CardBody className="p-0">
                    <div className="table-responsive-md">
                        <Table hover striped className="text-nowrap mb-0 ">
                            <thead className="thead-light">

                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">Mision</th>
                                <td>Nuestra mision es...</td>
                                </tr>

                                <tr>
                                <th scope="row">Vision</th>
                                <td>Darle al cliente...</td>
                                </tr>

                                <tr>
                                <th scope="row">Nosotros</th>
                                <td>Ven y conocenos...</td>
                                </tr>

                                <tr>
                                <th scope="row">Longitud</th>
                                <td>...</td>
                                </tr>

                                <tr>
                                <th scope="row">Latitud</th>
                                <td>...</td>
                                </tr>

                            </tbody>
                        </Table>
                    </div>
                    <div className="divider" />
                    <div className="divider" />
                    <div className="p-3 d-flex justify-content-center">
                        
                    </div>
                </CardBody>
            </Card>
        </Fragment>)
}


export default MInformacionTenant
