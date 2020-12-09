
import React, { Fragment, useEffect, useState } from 'react';

import PageTitle from '../../Components/PageTitle'
import ModalFormEmpleadoT from '../../Components/ModalFormEmpleadoT';

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
                    <div>
                        <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="...">
                            {props.empleado.first_name + ' ' + props.empleado.last_name}
                        </a>
                        <span className="text-black-50 d-block">
                            {props.empleado.email}
                        </span>
                        <span className="text-black-50 d-block">
                            {props.empleado.rol}
                        </span>
                    </div>
                </div>
            </td>
            <td className="text-center">
                {spanEstado(props.empleado.is_active)}
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
                                    onClick={props.modificar.bind(this, props.empleado.id, props.empleado.first_name, props.empleado.last_name, props.empleado.email, props.empleado.rol)}
                                    active>
                                    <div className="nav-link-icon">
                                        <FontAwesomeIcon icon={['fas', 'edit']} />
                                    </div>
                                    <span>modificar </span>

                                </NavLink>
                            </NavItem>
                            <li className="dropdown-divider" />
                            <NavItem>
                                <ModificarEstado id={props.empleado.id} estado={props.empleado.is_active} modificarEstado={props.modificarEstado.bind(this, { id: props.empleado.id, first_name: props.empleado.first_name, last_name: props.empleado.last_name, email: props.empleado.email, rol: props.empleado.rol, is_active: !props.empleado.is_active })} />
                            </NavItem>
                        </Nav>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    )
}




function MEmpleadoTenant(props) {

    console.log(props.empleados)

    const modificarEmpleado = (id, first_name, last_name, email, rol) => {
        setState({
            id: id,
            first_name: first_name,
            last_name: last_name,
            email: email,
            rol: rol,
        }, toggle5())
        setNuevo(false)
    }

    const [state, setState] = useState({
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        rol: ''
    })

    const [modal5, setModal5] = useState(false);

    const [nuevo, setNuevo] = useState(false);

    const toggle5 = () => setModal5(!modal5);



    const modalNuevo = () => {
        setNuevo(true)
        toggle5()
    }



    const empleados = props.empleados.empleados.map((empleado) => {
        return (
            <FilaTable modificarEstado={props.putUpdateEmpleado} modificar={modificarEmpleado} empleado={empleado} key={empleado.id} />
        )
    })


    return (
        <Fragment>


            <ModalFormEmpleadoT postRegisterEmpleado={props.postRegisterEmpleado} putUpdateEmpleado={props.putUpdateEmpleado} nuevo={nuevo} datos={state} modalState={modal5} modelToggle={toggle5} />

            <PageTitle
                titleHeading="Empleados"
                titleDescription="Empleados" modal={modalNuevo} />
            <Card className="card-box mb-5">
                <div className="card-header">
                    <div className="card-header--title">
                        <small>Empleados</small>
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
                                    <th style={{ width: '40%' }}>Empleados</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {empleados}
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


export default MEmpleadoTenant