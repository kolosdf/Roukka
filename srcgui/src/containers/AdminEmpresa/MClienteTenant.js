
import React, { Fragment, useEffect, useState } from 'react';

import PageTitle from '../../Components/PageTitle'
import ModalFormClienteT from '../../Components/ModalFormClienteT';

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
    UncontrolledTooltip,
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
                            {props.cliente.first_name + ' ' + props.cliente.last_name}
                        </a>
                        <span className="text-black-50 d-block">
                            {props.cliente.email}
                        </span>
                    </div>
                </div>
            </td>
            <td className="text-center">
                {spanEstado(props.cliente.is_active)}
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
                                    onClick={props.modificar.bind(this, props.cliente.id, props.cliente.first_name, props.cliente.last_name, props.cliente.email)}
                                    active>
                                    <div className="nav-link-icon">
                                        <FontAwesomeIcon icon={['fas', 'edit']} />
                                    </div>
                                    <span>Modificar </span>

                                </NavLink>
                            </NavItem>
                            <li className="dropdown-divider" />
                            <NavItem>
                                <ModificarEstado id={props.cliente.id} estado={props.cliente.is_active} modificarEstado={props.modificarEstado.bind(this, { id: props.cliente.id, first_name: props.cliente.first_name, last_name: props.cliente.last_name, email: props.cliente.email, rol: props.cliente.rol, is_active: !props.cliente.is_active })} />
                            </NavItem>
                        </Nav>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    )
}




function MClienteTenant(props) {

    console.log(props.clientes)

    const modificarCliente = (id, first_name, last_name, email) => {
        setState({
            id: id,
            first_name: first_name,
            last_name: last_name,
            email: email,
        }, toggle5())
        setNuevo(false)
    }

    const [state, setState] = useState({
        id: '',
        first_name: '',
        last_name: '',
        email: ''
    })

    const [modal5, setModal5] = useState(false);

    const [nuevo, setNuevo] = useState(false);

    const toggle5 = () => setModal5(!modal5);



    const modalNuevo = () => {
        setNuevo(true)
        toggle5()
    }



    const clientes = props.clientes.clientes.map((cliente) => {
        return (
            <FilaTable modificarEstado={props.putUpdateCliente} modificar={modificarCliente} cliente={cliente} key={cliente.id} />
        )
    })


    return (
        <Fragment>


            <ModalFormClienteT postRegisterCliente={props.postRegisterCliente} putUpdateCliente={props.putUpdateCliente} nuevo={nuevo} datos={state} modalState={modal5} modelToggle={toggle5} />

            <PageTitle
                titleHeading="Clientes"
                titleDescription="Clientes" modal={modalNuevo}/>
            <Card className="card-box mb-5">
                <div className="card-header">
                    <div className="card-header--title">
                        <small>Clientes</small>
                    </div>
                    <div className="card-header--actions">
                        <Button
                            id="boton"
                            tag="a"
                            onClick={props.getClientesJson}
                            size="sm"
                            color="link"
                            className="text-primary"
                            title="View details">
                            <FontAwesomeIcon
                                icon={['fas', 'download']}
                                className="font-size-lg"
                            />
                        </Button>
                        <UncontrolledTooltip target="boton">
                            Descargar archivo json
                        </UncontrolledTooltip>
                    </div>
                </div>
                <CardBody className="p-0">
                    <div className="table-responsive-md">
                        <Table hover striped className="text-nowrap mb-0 ">
                            <thead className="thead-light">
                                <tr>
                                    <th style={{ width: '40%' }}>Clientes</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes}
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


export default MClienteTenant