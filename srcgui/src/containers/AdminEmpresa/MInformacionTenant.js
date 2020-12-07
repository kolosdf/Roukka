
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
                                    onClick={props.modificar.bind(this, props.informacion.id, props.informacion.mision, props.informacion.vision, props.informacion.longitud, props.informacion.latitud, props.informacion.nosotros)}
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
                                    onClick={props.deleteInformacion.bind(this, props.insformacion.id)}
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

    const modificarInformacion = (id, mision, vision, longitud, latitud, nosotros) => {
        setState({
            id: id,
            mision: mision,
            vision: vision,
            longitud: longitud,
            latitud: latitud,
            nosotros: nosotros,
        }, toggle5())
        setNuevo(false)
    }

    const [state, setState] = useState({
        id: '',
        mision: '',
        vision: '',
        longitud: '',
        latitud: '',
        nosotros: '',
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
                titleHeading="informacion"
                titleDescription="Ingredientes" modal={modalNuevo} />
            <Card className="card-box mb-5">
                <div className="card-header">
                    <div className="card-header--title">
                        <b>Informacion de la empresa</b>
                    </div>
                    <div className="card-header--actions">
                        <Button
                            tag="a"
                            href="#/"
                            onClick={e => e.preventDefault()}
                            size="sm"
                            color="link"
                            className="text-primary"
                            title="View details">
                            <FontAwesomeIcon
                                icon={['far', 'keyboard']}
                                className="font-size-lg"
                            />
                        </Button>
                    </div>
                </div>
                <CardBody className="p-0">
                    <div className="table-responsive-md">
                        <Table hover striped className="text-nowrap mb-0 ">
                            <thead className="thead-light">
                                <tr>
                                    <th style={{ width: '40%' }}>Informacion</th>
                                    <th style={{ width: '40%' }}></th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                               
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
