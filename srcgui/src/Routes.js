import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation, withRouter } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { connect } from 'react-redux'


// Layout Blueprints

import { LeftSidebar, PresentationLayout } from './layout-blueprints';

//Acciones
import {getPlans, getEmpresas, getFuncs, getUsuariosT, getEmpleados, getClientes, postRegisterPlan, postRegisterUsuarioT, postRegisterEmpleado, postRegisterCliente, putUpdateUsuarioT, putUpdateEmpleado, putUpdateCliente, putUpdatePlan, postRegisterEmpresa} from './config/ActionCreators'



//Landing Page Roukka
import Plan from './containers/LandingPageRoukka/PlanComponent'
import Header from './containers/LandingPageRoukka/HeaderLandingPage'
import Contact from './containers/LandingPageRoukka/ContactComponent'
import About from './containers/LandingPageRoukka/AboutComponent'
import ComprarPlan from './containers/LandingPageRoukka/ComprarPlan'


//Landing Page Tenant

import HomeTenant from './containers/LandingPageEmpresa/HomeTenant'
import HeaderTenant from './containers/LandingPageEmpresa/HeaderLandingTenant'
import ContactTenant from './containers/LandingPageEmpresa/ContactTenant'


//Admin Roukka

import LeftAdminRoukka from './containers/AdminRoukka/LeftAdminRoukka'
import MPlanRoukka from './containers/AdminRoukka/MPlanRoukka'
import MUserRoukka from './containers/AdminRoukka/MUserRoukka'
import MEmpresaRoukka from './containers/AdminRoukka/MEmpresaRoukka'
import MDashboardRoukka from './containers/AdminRoukka/MDashboardRoukka'

//Admin Tenant

import DashboardTenant from './containers/AdminEmpresa/DashboardTenant'
import LeftAdminTenant from './containers/AdminEmpresa/LeftAdminTenant'
import MUsuarioTenant from './containers/AdminEmpresa/MUsuarioTenant'
import MEmpleadoTenant from './containers/AdminEmpresa/MEmpleadoTenant'
import MClienteTenant from './containers/AdminEmpresa/MClienteTenant'


// Example Pages

import Buttons from './example-pages/Buttons';
import Dropdowns from './example-pages/Dropdowns';
import NavigationMenus from './example-pages/NavigationMenus';
import ProgressBars from './example-pages/ProgressBars';
import Pagination from './example-pages/Pagination';
import Scrollable from './example-pages/Scrollable';
import Badges from './example-pages/Badges';
import Icons from './example-pages/Icons';
import UtilitiesHelpers from './example-pages/UtilitiesHelpers';
import RegularTables1 from './example-pages/RegularTables1';
import RegularTables4 from './example-pages/RegularTables4';
import FormsLayout from './example-pages/FormsLayout';
import FormsControls from './example-pages/FormsControls';
import axios from 'axios'
//import Home from './Components/HomeComponent'

const DashboardDefault = lazy(() => import('./example-pages/DashboardDefault'));
const Cards3 = lazy(() => import('./example-pages/Cards3'));
const ListGroups = lazy(() => import('./example-pages/ListGroups'));
const LandingPage = lazy(() => import('./example-pages/LandingPage'));
const Home = lazy(() => import ('./containers/LandingPageRoukka/HomeComponent')) ;
const Modals = lazy(() => import('./example-pages/Modals'));
const Notifications = lazy(() => import('./example-pages/Notifications'));
const Carousels = lazy(() => import('./example-pages/Carousels'));
const Popovers = lazy(() => import('./example-pages/Popovers'));
const Tooltips = lazy(() => import('./example-pages/Tooltips'));
const Tabs = lazy(() => import('./example-pages/Tabs'));
const ApexCharts = lazy(() => import('./example-pages/ApexCharts'));
const Maps = lazy(() => import('./example-pages/Maps'));
//pruebas
const API_URL = 'localhost:8000/';

const URLactual = window.location.hostname.split('.').shift();

class Routes extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if(URLactual==='localhost'){
      this.props.getClientes(URLactual)
      this.props.getPlans()
      this.props.getEmpresas()
      this.props.getFuncs()
      
    }else{
      console.log('funcionaa')
      this.props.getClientes(URLactual)
      this.props.getEmpresas()

      this.props.getUsuariosT(URLactual)
      this.props.getEmpleados(URLactual)
      this.props.getClientes(URLactual)

        const url = `http://qbano.${API_URL}usuarios/listarCliente/`;
        return axios.get(url)
        .then(empresas => {console.log(empresas.data)})    
        .catch(error => console.log(error));
    }
    
  }
  

  pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  


  render(){
    return (
      
      <AnimatePresence>
        <Suspense
          fallback={
            <div className="d-flex align-items-center vh-100 justify-content-center text-center font-weight-bold font-size-lg py-3">
              <div className="w-50 mx-auto">
                Please wait while we load the live preview examples
              </div>
            </div>
          }>  
          <Switch>
          
            <Redirect exact from="/" to="/Home" />
            
            <Route path={['/Home', '/Plans', '/Contactus','/Aboutus','/Comprar']}>
              <PresentationLayout>
                <Header />
                <Switch location={this.props.location} key={this.props.location.key}>    
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={this.pageVariants}
                    transition={this.pageTransition}>


                    <Route path="/Home" component={Home} />
                    <Route path="/Plans" component={() => <Plan plans={this.props.plans} />} />
                    <Route path="/Contactus" component={Contact} />
                    <Route path="/Aboutus" component={About} />
                    <Route path="/Comprar/:idPlan" component={({match}) => <ComprarPlan postRegisterEmpresa={this.props.postRegisterEmpresa} plans={this.props.plans} match={match}/>} />  
                  </motion.div>
                </Switch>
              </PresentationLayout>
            </Route>

            <Route path={['/LandingPage', '/ContactusEmpresa']}>
              <PresentationLayout>
                <HeaderTenant tenant={URLactual}/>
                <Switch location={this.props.location} key={this.props.location.key}>          
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={this.pageVariants}
                    transition={this.pageTransition}>

                    <Route path="/LandingPage" component={() => <HomeTenant tenant={this.props.empresas.empresas.filter(
                                                                                    empresa => empresa.schema_name == URLactual
                                                                                    )[0]}/>} 
                                                                />  
                    <Route path="/ContactusEmpresa" component={ContactTenant} />                        
                  </motion.div>
                </Switch>
              </PresentationLayout>
            </Route>

            <Route
              path={[
                '/DashboardDefault',
                '/Buttons',
                '/Dropdowns',
                '/NavigationMenus',
                '/ProgressBars',
                '/Pagination',
                '/Scrollable',
                '/Badges',
                '/Icons',
                '/UtilitiesHelpers',
                '/Cards3',
                '/ListGroups',
                '/Modals',
                '/Notifications',
                '/Carousels',
                '/Popovers',
                '/Tooltips',
                '/Tabs',
                '/RegularTables1',
                '/RegularTables4',
                '/FormsLayout',
                '/FormsControls',
                '/ApexCharts',
                '/Maps',
              ]}>
              <LeftSidebar>
                <Switch location={this.props.location} key={this.props.location.key}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={this.pageVariants}
                    transition={this.pageTransition}>
                    <Route
                      path="/DashboardDefault"
                      component={DashboardDefault}
                    />
                  
                    <Route path="/Buttons" component={Buttons} />
                    <Route path="/Dropdowns" component={Dropdowns} />
                    <Route path="/NavigationMenus" component={NavigationMenus} />
                    <Route path="/ProgressBars" component={ProgressBars} />
                    <Route path="/Pagination" component={Pagination} />
                    <Route path="/Scrollable" component={Scrollable} />
                    <Route path="/Badges" component={Badges} />
                    <Route path="/Icons" component={Icons} />
                    <Route
                      path="/UtilitiesHelpers"
                      component={UtilitiesHelpers}
                    />
                    <Route path="/Cards3" component={Cards3} />
                    <Route path="/ListGroups" component={ListGroups} />
                    <Route path="/Modals" component={Modals} />
                    <Route path="/Notifications" component={Notifications} />
                    <Route path="/Carousels" component={Carousels} />
                    <Route path="/Popovers" component={Popovers} />
                    <Route path="/Tooltips" component={Tooltips} />
                    <Route path="/Tabs" component={Tabs} />
                    <Route path="/RegularTables1" component={RegularTables1} />
                    <Route path="/RegularTables4" component={RegularTables4} />
                    <Route path="/FormsLayout" component={FormsLayout} />
                    <Route path="/FormsControls" component={FormsControls} />
                    <Route path="/ApexCharts" component={ApexCharts} />
                    <Route path="/Maps" component={Maps} />
                  </motion.div>
                </Switch>
              </LeftSidebar>
            </Route>

            {
            //Admin Roukka
            }
            <Route path={['/DashboardRoukka','/PlanRoukka', '/EmpresaRoukka', '/UserRoukka']}>
              <LeftAdminRoukka >

              <Switch location={this.props.location} key={this.props.location.key}>
              <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={this.pageVariants}
                    transition={this.pageTransition}>
                    <Route
                      path="/DashboardRoukka"
                      component={() => <MDashboardRoukka plans={this.props.plans} />}
                    />     
                    <Route
                      path="/PlanRoukka"
                      component={() => <MPlanRoukka plans={this.props.plans}  
                                                    postRegisterPlan={this.props.postRegisterPlan}
                                                    putUpdatePlan={this.props.putUpdatePlan}/>}
                    />
                    <Route
                      path="/EmpresaRoukka"
                      component={() => <MEmpresaRoukka empresas={this.props.empresas} />}
                    />
                    <Route 
                      path="/UserRoukka" 
                      component={MUserRoukka}
                    />
                </motion.div>
              </Switch>
              
              </LeftAdminRoukka>    
            </Route>

            { 
            //Admin tenant
            }
           
            <Route path={['/AdminTenant', '/DashboardTenant', '/UsuarioTenant', '/EmpleadoTenant', '/ClienteTenant']}>
              <PresentationLayout>
              <LeftAdminTenant >
                <Switch location={this.props.location} key={this.props.location.key}>          
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={this.pageVariants}
                    transition={this.pageTransition}>
                    <Route path="/ClienteTenant" component={() => <MClienteTenant postRegisterCliente={this.props.postRegisterCliente} 
                                                                                  clientes={this.props.clientes} 
                                                                                  putUpdateCliente={this.props.putUpdateCliente}/>} /> 
                    <Route path="/DashboardTenant" component={() => <DashboardTenant tenant={URLactual}/>} />
                    <Route path="/UsuarioTenant" component={() => <MUsuarioTenant tenant={URLactual}/>} />
                    <Route path="/EmpleadoTenant" component={() => <MEmpleadoTenant postRegisterEmpleado={this.props.postRegisterEmpleado} 
                                                                                  empleados={this.props.empleados} 
                                                                                  putUpdateEmpleado={this.props.putUpdateEmpleado}/>} />
                    
                                      
                  </motion.div>
                </Switch>
                </LeftAdminTenant >
              </PresentationLayout>  
            </Route>


          </Switch>  
        </Suspense>
      </AnimatePresence>
    );}
};


const mapStateToProps = state => {
  return {
      plans: state.Plans,
      empresas: state.Empresas,
      funcionalidades: state.Funcionalidades,
      usuarios: state.Usuarios,
      empleados: state.Empleados,
      clientes: state.Clientes,
  }
}

const mapDispatchToProps = (dispatch) => ({

  getPlans:() =>  {dispatch(getPlans())},
  getEmpresas: () => {dispatch(getEmpresas())},
  getFuncs: () => {dispatch(getFuncs())},
  getUsuariosT: (tenant) => {dispatch(getUsuariosT(tenant))},
  getEmpleados: (tenant) => {dispatch(getEmpleados(tenant))},
  getClientes: (tenant) => {dispatch(getClientes(tenant))},
  postRegisterPlan: (empresa) => dispatch(postRegisterPlan(empresa)),
  postRegisterEmpresa: (empresa) => dispatch(postRegisterEmpresa(empresa)),
  postRegisterUsuarioT: (usuario) => dispatch(postRegisterUsuarioT(usuario)),
  postRegisterEmpleado: (empleado) => dispatch(postRegisterEmpleado(empleado, URLactual)),
  postRegisterCliente: (cliente) => dispatch(postRegisterCliente(cliente, URLactual)),
  putUpdatePlan: (empresa) => dispatch(putUpdatePlan(empresa)),
  putUpdateUsuarioT: (usuario) => dispatch(putUpdateUsuarioT(usuario)),
  putUpdateEmpleado: (empleado) => dispatch(putUpdateEmpleado(empleado, URLactual)),
  putUpdateCliente: (cliente) => dispatch(putUpdateCliente(cliente, URLactual)),
  

  

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
