
import React, { Fragment, useEffect, useState } from 'react';

import PageTitle from '../../Components/PageTitle'
import ModalDetalleFactura from '../../Components/ModalDetalleFactura';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

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
    UncontrolledTooltip
} from 'reactstrap';
import FormFacturaT from '../../Components/FormFacturaTenant';


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
                            {props.factura.factura.empleado.first_name + " " + props.factura.factura.empleado.last_name}
                        </a>
                        <span className="text-black-50 d-block mt-2">
                            <h5>{props.factura.factura.empleado.email}</h5>
                        </span>
                    </div>
                </div>
            </td>
            <td className="text-center">
                <span className="text-black-50 d-block mt-2">
                    <Badge color="first" >
                        <h5>$ {props.factura.factura.total} </h5>
                    </Badge>
                </span>
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
                                    onClick={props.detalleFactura.bind(this, props.factura.factura.id, props.factura.factura.empleado, props.factura.factura.fecha, props.factura.factura.total, props.factura.productos)}
                                    active>
                                    <div className="nav-link-icon">
                                        <FontAwesomeIcon icon={['fas', 'eye']} />
                                    </div>
                                    <span>Ver detalles</span>
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    )
}




function FacturacionTenant(props) {

    const detalleFactura = (id, empleado, fecha, total, productos) => {
        setState({
            id: id,
            empleado: empleado,
            fecha: fecha,
            total: total,
            productos: productos,
        }, toggle())
    }

    const [state, setState] = useState({
        id: '',
        empleado: '',
        fecha: '',
        total: '',
        productos: []
    })

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal)

    const facturas = props.factura.facturas.datos.map((factura) => {
        return (
            <FilaTable detalleFactura={detalleFactura} factura={factura} key={factura.id} />
        )
    })


    return (
        <Fragment>
            <ModalDetalleFactura datos={state} modal={modal} toggle={toggle} />
            <div className="app-page-title">
                <div>
                    <div className="app-page-title--first">
                        <div className="app-page-title--heading">
                            <h1>Facturacion</h1>
                            <div className="app-page-title--description">
                                Facturacion
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center mt-3 mt-lg-0">
                    <Link className="btn btn-success btn-sm" to="/CrearFacturaTenant" id="AddEntryTooltip20">
                        <span className="btn-wrapper--icon">
                            <FontAwesomeIcon
                                icon={['fas', 'plus']}
                                className="opacity-8 font-size-xs"
                            />
                        </span>
                    </Link>
                    <UncontrolledTooltip target="AddEntryTooltip20">
                        Añadir
            </UncontrolledTooltip>
                </div>
            </div>
            <Card className="card-box mb-5">
                <div className="card-header">
                    <div className="card-header--title">
                        <small>Factura</small>
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
                                    <th style={{ width: '40%' }}>Empleado</th>
                                    <th className="text-center">Total</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {facturas}
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

const mapStateToProps = state => ({
    platillos: state.Platillos,
    auth: state.Auth,
    factura: state.Factura
})

export default (connect(mapStateToProps))(FacturacionTenant)
