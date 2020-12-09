
import React, { Fragment, useEffect, useState } from 'react';

import PageTitle from '../../Components/PageTitle'
import ModalFormPlatillo from '../../Components/ModalFormPlatillo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chart from 'react-apexcharts';
import clsx from 'clsx';
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
    TabContent,
    TabPane,
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap';

function OpcionSelect(props){
    return(
        <option value={props.platillo.id}>{props.platillo.nombre}</option>
    )
}
function FilaTable(props) {
    return (
        <tr>
            <td className="text-center">
                {props.venta.mes}
            </td>
            <td className="text-center">
                {props.venta.total}
            </td>
        </tr>
    )
}

function FilaTable2(props) {
    return (
        <tr>
            <td>
                <div className="avatar-icon-wrapper mr-2">
                    <div className="avatar-icon">
                        <img alt="..." className="" width="100" src={props.datos.platillo.imagen} />
                    </div>
                </div>
            </td>
            <td className="text-center">
                {props.datos.platillo.nombre}
            </td>
            <td className="text-center">
                {props.datos.total}
            </td>
        </tr>
    )
}

function FilaTable3(props) {
    return (
        <tr>
            <td>
                {props.datos.cliente.nombre} {props.datos.cliente.apellido}
            </td>
            <td className="text-center">
                {props.datos.cliente.email}
            </td>
            <td className="text-center">
                {props.datos.total}
            </td>
        </tr>
    )
}


function Reporte1(props) {

    const ventas = props.ventas.ventas.map((venta) => {
        return (
            <FilaTable  venta={venta} key={venta.mes} />
        )
    })
    const options = {
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: props.ventas.etiquetas
        }
    }
    const options2 = {
        labels: props.ventas.etiquetas
    }
    const series = [{
        data: props.ventas.valores
    }]
    const series2 = props.ventas.valores


    return (
        <Fragment>
            <div className= "row">
                <div className= "col-md-6">
                    <Card className="card-box mb-5">
                        <div className="card-header">
                            <div className="card-header--title">
                                <small>Reporte de ventas</small>
                                <b>Ventas totales</b>
                            </div>
                        </div>
                        <CardBody className="p-0">
                            <div className="table-responsive-md">
                                <Table hover striped className="text-nowrap mb-0 ">
                                    <thead className="thead-light">
                                        <tr>
                                            <th className="text-center">Mes</th>
                                            <th className="text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ventas}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="divider" />
                            <div className="divider" />
                        </CardBody>
                    </Card>
                </div>
                <div className= "col-md-6">
                    <Chart options={options} series={series} type="bar" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Chart options={options} series={series} type="line" />
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-center">
                        <br />
                        <Chart options={options2} series={series2} type="donut" width="400" />
                    </div>
                </div>

            </div>
        </Fragment>)
}


function Reporte2(props) {

    const ventas = props.vendidos.vendidos.map((vendido) => {
        return (
            <FilaTable2  datos={vendido} key={vendido.id} />
        )
    })
    const options = {
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: props.vendidos.etiquetas
        }
    }
    const options2 = {
        labels: props.vendidos.etiquetas
    }
    const series = [{
        data: props.vendidos.valores
    }]
    const series2 = props.vendidos.valores


    return (
        <Fragment>
            <div className= "row">
                <div className= "col-md-6">
                    <Card className="card-box mb-5">
                        <div className="card-header">
                            <div className="card-header--title">
                                <small>Reporte de platillo más vendido</small>
                                <b>Platillo más vendido</b>
                            </div>
                        </div>
                        <CardBody className="p-0">
                            <div className="table-responsive-md">
                                <Table hover striped className="text-nowrap mb-0 ">
                                    <thead className="thead-light">
                                        <tr>
                                            <th className="text-center"></th>
                                            <th className="text-center">Platillo</th>
                                            <th className="text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ventas}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="divider" />
                            <div className="divider" />
                        </CardBody>
                    </Card>
                </div>
                <div className= "col-md-6">
                    <Chart options={options} series={series} type="bar" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Chart options={options} series={series} type="line" />
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-center">
                        <br />
                        <Chart options={options2} series={series2} type="donut" width="500" />
                    </div>
                </div>

            </div>
        </Fragment>)
}

function Reporte3(props) {

    const ventas = props.ventasPlatillo.ventasPlatillo.map((ventaPlatillo) => {
        return (
            <FilaTable2  datos={ventaPlatillo} key={ventaPlatillo.id} />
        )
    })
    const options = {
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: props.ventasPlatillo.etiquetas
        }
    }
    const options2 = {
        labels: props.ventasPlatillo.etiquetas
    }
    const series = [{
        data: props.ventasPlatillo.valores
    }]
    const series2 = props.ventasPlatillo.valores


    return (
        <Fragment>
            <div className= "row">
                <div className= "col-md-6">
                    <Card className="card-box mb-5">
                        <div className="card-header">
                            <div className="card-header--title">
                                <small>Reporte de ventas por platillo</small>
                                <b>Ventas por platillo</b>
                            </div>
                        </div>
                        <CardBody className="p-0">
                            <div className="table-responsive-md">
                                <Table hover striped className="text-nowrap mb-0 ">
                                    <thead className="thead-light">
                                        <tr>
                                            <th className="text-center"></th>
                                            <th className="text-center">Platillo</th>
                                            <th className="text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ventas}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="divider" />
                            <div className="divider" />
                        </CardBody>
                    </Card>
                </div>
                <div className= "col-md-6">
                    <Chart options={options} series={series} type="bar" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Chart options={options} series={series} type="line" />
                </div>
                <div className="col-md-6 align-items-center justify-content-center">
                    <div className="d-flex justify-content-center">
                        <br />
                        <Chart options={options2} series={series2} type="donut" width="500" />
                    </div>
                </div>

            </div>
        </Fragment>)
}

function Reporte4(props) {

    const handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        //props.getVentasPlatilloMes(e.target.value) 
    }
        
    
    const ventas = props.ventasPlatilloMes.ventas.map((ventaPlatilloMes) => {
        return (
            <FilaTable  venta={ventaPlatilloMes} key={ventaPlatilloMes.id} />
        )
    })
    const platos = props.platillos.platillos.map((platillo) => {
        return (
            <OpcionSelect  platillo={platillo} key={platillo.id} />
        )
    })
    const options = {
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: props.ventasPlatilloMes.etiquetas
        }
    }
    const options2 = {
        labels: props.ventasPlatilloMes.etiquetas
    }
    const series = [{
        data: props.ventasPlatilloMes.valores
    }]
    const series2 = props.ventasPlatilloMes.valores


    return (
        <Fragment>
            <div className= "row">
                <Form>
                    <FormGroup>
                        <Label for="exampleSelect">Platillo</Label>
                        <Input onChange={handleChange} type="select" name="select" id="exampleSelect" required>
                            <option></option>
                            {platos}
                        </Input>

                    </FormGroup>
                </Form>
            </div>
            <div className= "row">
                <div className= "col-md-6">
                    <Card className="card-box mb-5">
                        <div className="card-header">
                            <div className="card-header--title">
                                <small>Reporte de ventas de platillo por mes</small>
                                <b>Ventas de platillo por mes</b>
                            </div>
                        </div>
                        <CardBody className="p-0">
                            <div className="table-responsive-md">
                                <Table hover striped className="text-nowrap mb-0 ">
                                    <thead className="thead-light">
                                        <tr>
                                            <th className="text-center">Mes</th>
                                            <th className="text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ventas}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="divider" />
                            <div className="divider" />
                        </CardBody>
                    </Card>
                </div>
                <div className= "col-md-6">
                    <Chart options={options} series={series} type="bar" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Chart options={options} series={series} type="line" />
                </div>
                <div className="col-md-6 align-items-center justify-content-center">
                    <div className="d-flex justify-content-center">
                        <br />
                        <Chart options={options2} series={series2} type="donut" width="500" />
                    </div>
                </div>

            </div>
        </Fragment>)
}

function Reporte5(props) {

    const ventas = props.compras.clientes.map((compra) => {
        return (
            <FilaTable3  datos={compra} key={compra.id} />
        )
    })
    const options = {
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: props.compras.etiquetas
        }
    }
    const options2 = {
        labels: props.compras.etiquetas
    }
    const series = [{
        data: props.compras.valores
    }]
    const series2 = props.compras.valores


    return (
        <Fragment>
            <div className= "row">
                <div className= "col-md-6">
                    <Card className="card-box mb-5">
                        <div className="card-header">
                            <div className="card-header--title">
                                <small>Reporte de clientes con más compras</small>
                                <b>Clientes con más compras</b>
                            </div>
                        </div>
                        <CardBody className="p-0">
                            <div className="table-responsive-md">
                                <Table hover striped className="text-nowrap mb-0 ">
                                    <thead className="thead-light">
                                        <tr>
                                            <th className="text-center">Nombre</th>
                                            <th className="text-center">Email</th>
                                            <th className="text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ventas}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="divider" />
                            <div className="divider" />
                        </CardBody>
                    </Card>
                </div>
                <div className= "col-md-6">
                    <Chart options={options} series={series} type="bar" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Chart options={options} series={series} type="line" />
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-center mt-4">
                        <br />
                        <Chart options={options2} series={series2} type="donut" width="400" />
                    </div>
                </div>

            </div>
        </Fragment>)
}

function Reporte6(props) {

    const ventas = props.ventase.empleados.map((ventae) => {
        return (
            <FilaTable3  datos={ventae} key={ventae.id} />
        )
    })
    const options = {
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: props.ventase.etiquetas
        }
    }
    const options2 = {
        labels: props.ventase.etiquetas
    }
    const series = [{
        data: props.ventase.valores
    }]
    const series2 = props.ventase.valores


    return (
        <Fragment>
            <div className= "row">
                <div className= "col-md-6">
                    <Card className="card-box mb-5">
                        <div className="card-header">
                            <div className="card-header--title">
                                <small>Reporte de empleados con más ventas</small>
                                <b>Empleados con más ventas</b>
                            </div>
                        </div>
                        <CardBody className="p-0">
                            <div className="table-responsive-md">
                                <Table hover striped className="text-nowrap mb-0 ">
                                    <thead className="thead-light">
                                        <tr>
                                            <th className="text-center">Nombre</th>
                                            <th className="text-center">Email</th>
                                            <th className="text-center">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ventas}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="divider" />
                            <div className="divider" />
                        </CardBody>
                    </Card>
                </div>
                <div className= "col-md-6">
                    <Chart options={options} series={series} type="bar" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Chart options={options} series={series} type="line" />
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-center mt-4">
                        <br />
                        <Chart options={options2} series={series2} type="donut" width="400" />
                    </div>
                </div>

            </div>
        </Fragment>)
}

function MReportes(props) {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return(
        <Fragment>
            <div className="container">
            <div className="nav-line-alt">
                <Nav className="nav-line">
                    <NavItem>
                        <NavLink
                            className={clsx({active: activeTab === '1'})}
                            onClick={() => {
                                toggle('1');
                            }}
                        >
                            Ventas totales
                            <div className="divider"/>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={clsx({active: activeTab === '2'})}
                            onClick={() => {
                                toggle('2');
                            }}
                        >
                            Platillo más vendido
                            <div className="divider"/>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={clsx({active: activeTab === '3'})}
                            onClick={() => {
                                toggle('3');
                            }}
                        >
                            Ventas por Platillo
                            <div className="divider"/>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={clsx({active: activeTab === '4'})}
                            onClick={() => {
                                toggle('4');
                            }}
                        >
                            Ventas de platillo por mes
                            <div className="divider"/>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={clsx({active: activeTab === '5'})}
                            onClick={() => {
                                toggle('5');
                            }}
                        >
                            Clientes con más compras
                            <div className="divider"/>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={clsx({active: activeTab === '6'})}
                            onClick={() => {
                                toggle('6');
                            }}
                        >
                            Empleado con más ventas
                            <div className="divider"/>
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
            <TabContent className="mb-5 mt-5" activeTab={activeTab}>
                <TabPane tabId="1">
                    <Reporte1  ventas={props.ventas}/>
                </TabPane>
                <TabPane tabId="2">
                    <Reporte2  vendidos={props.vendidos}/>
                </TabPane>
                <TabPane tabId="3">
                    <Reporte3  ventasPlatillo={props.ventasPlatillo}/>
                </TabPane>
                <TabPane tabId="4">
                    <Reporte4  ventasPlatilloMes={props.ventasPlatilloMes} platillos={props.platillos}/>
                </TabPane>
                <TabPane tabId="5">
                    <Reporte5  compras={props.compras}/>
                </TabPane>
                <TabPane tabId="6">
                    <Reporte6  ventase={props.ventase}/>
                </TabPane>
            </TabContent>
            </div>
        </Fragment>
    )

}

export default MReportes
