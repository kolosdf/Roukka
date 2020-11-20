
import React, { Fragment, useEffect, useState } from 'react';

import PageTitle from '../../Components/PageTitle'
import ModalFormPlatillo from '../../Components/ModalFormPlatillo';

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


const ModificarEstado = (props) => {
    let classColor = '';
    let icon = ''
    let texto = ''
    if (props.estado) {
        classColor = 'text-danger mx-3';
        icon = 'times'
        texto = 'Desactivar'

    } else {
        classColor = 'text-success mx-3';
        icon = 'check'
        texto = 'Activar'
    }

    return (
        <NavLink
            href="#"
            onClick={props.modificarEstado}
            className={classColor}>
            <div className="nav-link-icon">
                <FontAwesomeIcon icon={['fas', icon]} />
            </div>

            <span>{texto}</span>
        </NavLink>
    )
}

const spanEstado = (estado) => {
    let texto = ''
    let color = ''
    if (estado) {
        texto = 'Activo'
        color = 'success'
    } else {
        texto = 'Inactivo'
        color = 'danger'
    }

    return (<Badge color={color} className="h-auto py-0 px-3">
        {texto}
    </Badge>)
}

function FilaTable(props) {
    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                            <img alt="..." className="" width="100" src={props.platillo.imagen} />
                        </div>
                    </div>
                    <div>
                        <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="...">
                            {props.platillo.nombre}
                        </a>
                        <span className="text-black-50 d-block mt-2">
                            <Badge color="success" >
                                <h5>{props.platillo.unidades} Unidades disponibles </h5>
                            </Badge>
                        </span>

                        <span className="text-black-50 d-block mt-2">
                            <Badge color="first" >
                                <h5>$ {props.platillo.precio} </h5>
                            </Badge>
                        </span>
                    </div>
                </div>
            </td>
            <td className="text-center">
                {spanEstado(props.platillo.estado)}
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
                                    onClick={props.modificar.bind(this, props.platillo.id, props.platillo.nombre, props.platillo.precio, props.platillo.unidades, props.platillo.imagen, props.platillo.estado, props.platillo.ingredientes)}
                                    active>
                                    <div className="nav-link-icon">
                                        <FontAwesomeIcon icon={['fas', 'edit']} />
                                    </div>
                                    <span>Modificar </span>
                                </NavLink>
                            </NavItem>
                            <li className="dropdown-divider" />
                            <NavItem>
                                <ModificarEstado id={props.platillo.id} estado={props.platillo.estado} modificarEstado={props.modificarEstado.bind(this, { id: props.platillo.id, nombre: props.platillo.nombre, precio: props.platillo.precio, unidades: props.platillo.unidades, imagen: props.platillo.imagen, estado: !props.platillo.estado, ingredientes: props.platillo.ingredientes })} />
                            </NavItem>
                        </Nav>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    )
}




function MPlatilloTenant(props) {

    const modificarPlatillo = (id, nombre, precio, unidades, imagen, estado, ingredientes) => {
        setState({
            id: id,
            nombre: nombre,
            precio: precio,
            unidades: unidades,
            imagen: imagen,
            estado: estado,
            ingredientes: ingredientes
        }, toggle5())
        setNuevo(false)
    }

    const [state, setState] = useState({
        id: '',
        nombre: '',
        precio: '',
        unidades: '',
        imagen: '',
        ingredientes: []
    })

    const [modal5, setModal5] = useState(false);

    const [nuevo, setNuevo] = useState(false);

    const toggle5 = () => setModal5(!modal5);



    const modalNuevo = () => {
        setNuevo(true)
        toggle5()
    }


    const platillos = props.platillos.platillos.map((platillo) => {
        return (
            <FilaTable modificarEstado={props.putUpdatePlatillo} modificar={modificarPlatillo} platillo={platillo} key={platillo.id} />
        )
    })


    return (
        <Fragment>


            <ModalFormPlatillo postRegisterPlatillo={props.postRegisterPlatillo} putUpdatePlatillo={props.putUpdatePlatillo} nuevo={nuevo} datos={state} ingredientes={props.ingredientes} modalState={modal5} modelToggle={toggle5} />

            <PageTitle
                titleHeading="Platillos"
                titleDescription="Platillos" modal={modalNuevo} />
            <Card className="card-box mb-5">
                <div className="card-header">
                    <div className="card-header--title">
                        <small>Tables</small>
                        <b>This table card has custom content</b>
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
                                    <th style={{ width: '40%' }}>Platillos</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {platillos}
                            </tbody>
                        </Table>
                    </div>
                    <div className="divider" />
                    <div className="divider" />
                    <div className="p-3 d-flex justify-content-center">
                        <Pagination className="pagination-primary">
                            <PaginationItem disabled>
                                <PaginationLink
                                    first
                                    href="#/"
                                    onClick={e => e.preventDefault()}>
                                    <FontAwesomeIcon icon={['fas', 'angle-double-left']} />
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem disabled>
                                <PaginationLink
                                    previous
                                    href="#/"
                                    onClick={e => e.preventDefault()}>
                                    <FontAwesomeIcon icon={['fas', 'chevron-left']} />
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                                    1
                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                                    2
                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                                    3
                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                                    4
                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#/" onClick={e => e.preventDefault()}>
                                    5
                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    next
                                    href="#/"
                                    onClick={e => e.preventDefault()}>
                                    <FontAwesomeIcon icon={['fas', 'chevron-right']} />
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink
                                    last
                                    href="#/"
                                    onClick={e => e.preventDefault()}>
                                    <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
                                </PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    </div>
                </CardBody>
            </Card>
        </Fragment>)
}


export default MPlatilloTenant
