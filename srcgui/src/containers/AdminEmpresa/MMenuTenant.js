
import React, { Fragment, useEffect, useState } from 'react';

import PageTitle from '../../Components/PageTitle'
import ModalFormMenu from '../../Components/ModalFormMenu';

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
                    <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                            <img alt="..." className="" width="100" src={props.menu.imagen} />
                        </div>
                    </div>
                    <div>
                        <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="...">
                            {props.menu.nombre}
                        </a>
                        <span className="text-black-50 d-block">
                            Decripción:
                        </span>
                        <span className="text-black-50 d-block">
                            {props.menu.descripcion}
                        </span>

                    </div>
                </div>
            </td>
            <td className="text-center">
                {spanEstado(props.menu.estado)}
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
                                    onClick={props.modificar.bind(this, props.menu.id, props.menu.nombre, props.menu.imagen, props.menu.estado, props.menu.descripcion, props.menu.platillos)}
                                    active>
                                    <div className="nav-link-icon">
                                        <FontAwesomeIcon icon={['fas', 'edit']} />
                                    </div>
                                    <span>Modificar </span>
                                </NavLink>
                            </NavItem>
                            <li className="dropdown-divider" />
                            <NavItem>
                                <ModificarEstado id={props.menu.id} estado={props.menu.estado} modificarEstado={props.modificarEstado.bind(this, { id: props.menu.id, nombre: props.menu.nombre, imagen: props.menu.imagen, estado: !props.menu.estado, descripcion: props.menu.descripcion, platillos: props.menu.platillos })} />
                            </NavItem>
                        </Nav>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    )
}




function MMenuTenant(props) {

    const modificarMenu = (id, nombre, imagen, estado, descripcion, platillos) => {
        setState({
            id: id,
            nombre: nombre,
            imagen: imagen,
            estado: estado,
            descripcion: descripcion,
            platillos: platillos
        }, toggle5())
        setNuevo(false)
    }

    const [state, setState] = useState({
        id: '',
        nombre: '',
        imagen: '',
        platillos: []
    })

    const [modal5, setModal5] = useState(false);

    const [nuevo, setNuevo] = useState(false);

    const toggle5 = () => setModal5(!modal5);



    const modalNuevo = () => {
        setNuevo(true)
        toggle5()
    }



    const menus = props.menus.menus.map((menu) => {
        return (
            <FilaTable modificarEstado={props.putUpdateMenu} modificar={modificarMenu} menu={menu} key={menu.id} />
        )
    })


    return (
        <Fragment>


            <ModalFormMenu postRegisterMenu={props.postRegisterMenu} putUpdateMenu={props.putUpdateMenu} platillos={props.platillos} nuevo={nuevo} datos={state} modalState={modal5} modelToggle={toggle5} />

            <PageTitle
                titleHeading="Menus"
                titleDescription="Menus" modal={modalNuevo} />
            <Card className="card-box mb-5">
                <div className="card-header">
                    <div className="card-header--title">
                        <small>Menus</small>
                    </div>
                    <div className="card-header--actions">
                        <Button
                            id="boton"
                            tag="a"
                            onClick={props.getMenusExcelE.bind(this)}
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
                            Descargar archivo excel
                        </UncontrolledTooltip>
                        <Button
                            id="boton1"
                            tag="a"
                            onClick={props.getMenusExcelI}
                            size="sm"
                            color="link"
                            className="text-primary"
                            title="View details">
                            <FontAwesomeIcon
                                icon={['fas', 'upload']}
                                className="font-size-lg"
                            />
                        </Button>
                        <UncontrolledTooltip target="boton1">
                            Importar archivo excel
                        </UncontrolledTooltip>
                    </div>
                </div>
                <CardBody className="p-0">
                    <div className="table-responsive-md">
                        <Table hover striped className="text-nowrap mb-0 ">
                            <thead className="thead-light">
                                <tr>
                                    <th style={{ width: '40%' }}>Menus</th>
                                    <th className="text-center">Status</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {menus}
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


export default MMenuTenant