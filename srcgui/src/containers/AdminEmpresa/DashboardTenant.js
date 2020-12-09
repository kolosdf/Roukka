import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function DashboardTenant(props){
  console.log(props)

    return(
        <div class="card-columns">

          <div class="col-md-10">
            <div class="card text-center card-info">
                <div class="card-block">
                <h2 class="card-title"></h2>
                    <h2 class="card-title">Empleados</h2>
                    <h3> <FontAwesomeIcon icon={['fas', 'user-tie']} size="3x" /></h3>
                </div>
                <div class="row p-2 no-gutters">
                        <div class="card card-block text-info rounded-0 border-right-0 border-top-o border-bottom-0">
                            <h3>{props.cantidadEmpleados}</h3>
                            <span class="small text-uppercase">Empleados registrados</span>
                    </div>
                </div>
            </div>
        </div>

         <div class="col-md-10">
            <div class="card text-center card-info">
                <div class="card-block">
                <h2 class="card-title"></h2>
                    <h2 class="card-title">Menus</h2>
                    <h3> <FontAwesomeIcon icon={['fas', 'book-open']} size="3x" /></h3>
                </div>
                <div class="row p-2 no-gutters">
                        <div class="card card-block text-info rounded-0 border-right-0 border-top-o border-bottom-0">
                            <h3>{props.cantidadMenus}</h3>
                            <span class="small text-uppercase">Menus creados</span>
                    </div>
                </div>
            </div>
        </div>

          <div class="col-md-10">
            <div class="card text-center card-info">
                <div class="card-block">
                    <h2 class="card-title"></h2>
                    <h2 class="card-title">Platillos</h2>
                    <h3> <FontAwesomeIcon icon={['fas', 'wine-glass-alt']} size="3x" /></h3>
                </div>
                <div class="row p-2 no-gutters">
                        <div class="card card-block text-info rounded-0 border-right-0 border-top-o border-bottom-0">
                            <h3>{props.cantidadPlatillos}</h3>
                            <span class="small text-uppercase">Platillos creados</span>
                    </div>
                </div>
            </div>
        </div>

          <div class="col-md-10">
            <div class="card text-center card-info">
                <div class="card-block">
                <h2 class="card-title"></h2>
                    <h2 class="card-title">Ingredientes</h2>
                    <h3> <FontAwesomeIcon icon={['fas', 'carrot']} size="3x"/></h3>
                </div>
                <div class="row p-2 no-gutters">
                        <div class="card card-block text-info rounded-0 border-right-0 border-top-o border-bottom-0">
                            <h3>{props.cantidadIngrediente}</h3>
                            <span class="small text-uppercase">Ingredientes creados</span>
                        </div>
                </div>
            </div>
        </div>

          <div class="col-md-10">
            <div class="card text-center card-info">
                <div class="card-block">
                <h2 class="card-title"></h2>
                    <h2 class="card-title">Clientes</h2>
                    <h3> <FontAwesomeIcon icon={['fas', 'users']} size="3x" /></h3>
                </div>
                <div class="row p-2 no-gutters">
                        <div class="card card-block text-info rounded-0 border-right-0 border-top-o border-bottom-0">
                            <h3>{props.cantidadCliente}</h3>
                            <span class="small text-uppercase">Clientes registrados</span>
                        </div>
                </div>
            </div>
        </div>

          <div class="col-md-10">
            <div class="card text-center card-info">
                <div class="card-block">
                <h2 class="card-title"></h2>
                    <h2 class="card-title">Usuarios</h2>
                    <h3> <FontAwesomeIcon icon={['fas', 'id-badge']} size="3x" /></h3>
                </div>
                <div class="row p-2 no-gutters">
                        <div class="card card-block text-info rounded-0 border-right-0 border-top-o border-bottom-0">
                            <h3>{props.cantidadUsuarios}</h3>
                            <span class="small text-uppercase">Usuarios registrados</span>
                        </div>
                </div>
            </div>
        </div>

    </div>

    )
}


//<DashboardTenant ingredientes :{this.props.ingredientes.ingredientes.length}, platillos: {this.props.platillos.platillos.length}, menu: {this.props.menu.menu.length, empleados:{this.props.empleados.empleados.length}, usuarios:{this.usuarios.usuarios.length}, clientes:{this.props.clientes.clientes.length}/>


export default DashboardTenant
