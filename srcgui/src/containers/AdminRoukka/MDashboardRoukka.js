import React, { Component } from 'react'
import PageTitle from '../../Components/PageTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Card, Col, Row} from 'reactstrap'



function MDashBoardRoukka (props) {  

    return(
        <div class="card-columns">

          <div class="col-md-10">
            <div class="card text-center card-info">
                <div class="card-block">
                <h2 class="card-title"></h2>
                    <h2 class="card-title">Planes</h2>
                    <h3> <FontAwesomeIcon icon={['fas', 'globe']} size="3x" /></h3>
                </div>
                <div class="row p-2 no-gutters">
                        <div class="card card-block text-info rounded-0 border-right-0 border-top-o border-bottom-0">
                            <h3>{props.cantidadPlanes}</h3>
                            <span class="small text-uppercase">Planes creados</span>
                    </div>
                </div>
            </div>
        </div>

         <div class="col-md-10">
            <div class="card text-center card-info">
                <div class="card-block">
                <h2 class="card-title"></h2>
                    <h2 class="card-title">Funciones</h2>
                    <h3> <FontAwesomeIcon icon={['fas', 'list-ol']} size="3x" /></h3>
                </div>
                <div class="row p-2 no-gutters">
                        <div class="card card-block text-info rounded-0 border-right-0 border-top-o border-bottom-0">
                            <h3>{props.cantidadFunciones}</h3>
                            <span class="small text-uppercase">Funciones creadas</span>
                    </div>
                </div>
            </div>
        </div>

          <div class="col-md-10">
            <div class="card text-center card-info">
                <div class="card-block">
                    <h2 class="card-title"></h2>
                    <h2 class="card-title">Empresas</h2>
                    <h3> <FontAwesomeIcon icon={['fas', 'building']} size="3x" /></h3>
                </div>
                <div class="row p-2 no-gutters">
                        <div class="card card-block text-info rounded-0 border-right-0 border-top-o border-bottom-0">
                            <h3>{props.cantidadEmpresas}</h3>
                            <span class="small text-uppercase">Empresas registradas</span>
                    </div>
                </div>
            </div>
        </div>

          <div class="col-md-10">
            <div class="card text-center card-info">
                <div class="card-block">
                <h2 class="card-title"></h2>
                    <h2 class="card-title">Usuarios</h2>
                    <h3> <FontAwesomeIcon icon={['fas', 'users']} size="3x"/></h3>
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



export default MDashBoardRoukka
