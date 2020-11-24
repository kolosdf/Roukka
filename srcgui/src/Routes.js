import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { connect } from 'react-redux'

import PrivateRoute from './Components/PrivateRoute'


// Layout Blueprints

import { LeftSidebar, PresentationLayout } from './layout-blueprints';

//Acciones
import {
  getPlans, getEmpresas, getFuncionalidades, getUsuarios, getUsuariosT, getEmpleados, getClientes, getIngredientes, getMenus, getPlatillos,
  postRegisterPlan, postRegisterUsuario, putUpdateUsuario, postRegisterUsuarioT, postRegisterEmpleado, postRegisterCliente, postRegisterEmpresa, postRegisterIngrediente, postRegisterFuncionalidad, postRegisterMenu, postRegisterPlatillo,
  putUpdateUsuarioT, putUpdateEmpleado, putUpdateCliente, putUpdatePlan, putUpdateIngrediente, putUpdateFuncionalidad, putUpdateMenu, putUpdatePlatillo, addCarrito, deleteIngrediente
} from './config/ActionCreators'



//Landing Page Roukka
import Plan from './containers/LandingPageRoukka/PlanComponent'
import Header from './containers/LandingPageRoukka/HeaderLandingPage'
import Contact from './containers/LandingPageRoukka/ContactComponent'
import About from './containers/LandingPageRoukka/AboutComponent'
import ComprarPlan from './containers/LandingPageRoukka/ComprarPlan'
import Login from './Components/LoginRoukka'


//Landing Page Tenant

import HomeTenant from './containers/LandingPageEmpresa/HomeTenant'
import HeaderTenant from './containers/LandingPageEmpresa/HeaderLandingTenant'
import ContactTenant from './containers/LandingPageEmpresa/ContactTenant'
import MenuTenant from './containers/LandingPageEmpresa/MenuTenant'
import ListarPlatillo from './containers/LandingPageEmpresa/ListarPlatillo'
import LoginTenant from './Components/LoginTenant'


//Admin Roukka

import LeftAdminRoukka from './containers/AdminRoukka/LeftAdminRoukka'
import MPlanRoukka from './containers/AdminRoukka/MPlanRoukka'
import MUsuarioRoukka from './containers/AdminRoukka/MUsuarioRoukka'
import MEmpresaRoukka from './containers/AdminRoukka/MEmpresaRoukka'
import MDashboardRoukka from './containers/AdminRoukka/MDashboardRoukka'
import MFuncionRoukka from './containers/AdminRoukka/MFuncionRoukka'

//Admin Tenant

import DashboardTenant from './containers/AdminEmpresa/DashboardTenant'
import LeftAdminTenant from './containers/AdminEmpresa/LeftAdminTenant'
import MUsuarioTenant from './containers/AdminEmpresa/MUsuarioTenant'
import MEmpleadoTenant from './containers/AdminEmpresa/MEmpleadoTenant'
import MClienteTenant from './containers/AdminEmpresa/MClienteTenant'
import MMenuTenant from './containers/AdminEmpresa/MMenuTenant'
import MPlatilloTenant from './containers/AdminEmpresa/MPlatilloTenant'
import MIngredienteTenant from './containers/AdminEmpresa/MIngredienteTenant'
import MFacturacion from './containers/AdminEmpresa/MFacturación'

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
const Home = lazy(() => import('./containers/LandingPageRoukka/HomeComponent'));
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
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    if (URLactual === 'localhost') {
      this.props.getPlans()
      this.props.getEmpresas()
      this.props.getFuncionalidades()
      this.props.getUsuarios()

    } else {
      console.log('funcionaa')
      this.props.getClientes(URLactual)
      this.props.getEmpresas()
      this.props.getUsuariosT(URLactual)
      this.props.getEmpleados(URLactual)
      this.props.getClientes(URLactual)
      this.props.getIngredientes(URLactual)
      this.props.getPlatillos(URLactual)
      this.props.getMenus(URLactual)

      const url = `http://qbano.${API_URL}usuarios/listarCliente/`;
      return axios.get(url)
        .then(empresas => { console.log(empresas.data) })
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




  render() {
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

            <Route path={['/Home', '/Plans', '/Contactus', '/Aboutus', '/Comprar', '/Login']}>
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
                    <Route path="/Comprar/:idPlan" component={({ match }) => <ComprarPlan postRegisterEmpresa={this.props.postRegisterEmpresa} plans={this.props.plans} match={match} />} />
                    <Route path="/Login" component={Login} />
                  </motion.div>
                </Switch>
              </PresentationLayout>
            </Route>

            <Route path={['/LandingPage', '/ContactusEmpresa', '/MenuEmpresa', '/ListarMenu', '/LoginEmpresa']}>
              <PresentationLayout>
                <HeaderTenant tenant={URLactual} />
                <Switch location={this.props.location} key={this.props.location.key}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={this.pageVariants}
                    transition={this.pageTransition}>

                    <Route path="/LandingPage" component={() => <HomeTenant tenant={this.props.empresas.empresas.filter(
                      empresa => empresa.schema_name == URLactual
                    )[0]} />}
                    />
                    <Route path="/ContactusEmpresa" component={ContactTenant} />
                    <Route path="/MenuEmpresa" component={() => <MenuTenant menus={this.props.menus} />} />
                    <Route path="/ListarMenu/:idMenu" component={({ match }) => <ListarPlatillo menus={this.props.menus} addCarrito={this.props.addCarrito} platillos={this.props.platillos} match={match} />} />
                    <Route path="/LoginEmpresa" component={LoginTenant} />
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
            <Route path={['/DashboardRoukka', '/PlanRoukka', '/FuncionRoukka', '/EmpresaRoukka', '/UserRoukka']}>
              <LeftAdminRoukka >

                <Switch location={this.props.location} key={this.props.location.key}>
                  <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={this.pageVariants}
                    transition={this.pageTransition}>
                    <PrivateRoute
                      path="/DashboardRoukka"
                      component={() => <MDashboardRoukka plans={this.props.plans} />}
                    />
                    <PrivateRoute
                      path="/PlanRoukka"
                      component={() => <MPlanRoukka plans={this.props.plans}
                        funciones={this.props.funcionalidades}
                        postRegisterPlan={this.props.postRegisterPlan}
                        putUpdatePlan={this.props.putUpdatePlan} />}
                    />
                    <PrivateRoute
                      path="/FuncionRoukka"
                      component={() => <MFuncionRoukka funcionalidades={this.props.funcionalidades}
                        postRegisterFuncionalidad={this.props.postRegisterFuncionalidad}
                        putUpdateFuncionalidad={this.props.putUpdateFuncionalidad} />}
                    />
                    <PrivateRoute
                      path="/EmpresaRoukka"
                      component={() => <MEmpresaRoukka empresas={this.props.empresas} />}
                    />
                    <PrivateRoute
                      path="/UserRoukka"
                      component={() => <MUsuarioRoukka usuarios={this.props.usuarios}
                        postRegisterUsuario={this.props.postRegisterUsuario}
                        putUpdateUsuario={this.props.putUpdateUsuario} />}
                    />
                  </motion.div>
                </Switch>

              </LeftAdminRoukka>
            </Route>

            {
              //Admin tenant
            }
            <Route path={['/AdminTenant', '/DashboardTenant', '/UsuarioTenant', '/EmpleadoTenant', '/ClienteTenant', '/MenuTenant', '/PlatilloTenant', '/IngredienteTenant', '/FacturacionTenant']}>
              <PresentationLayout>
                <LeftAdminTenant >
                  <Switch location={this.props.location} key={this.props.location.key}>
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={this.pageVariants}
                      transition={this.pageTransition}>
                      <PrivateRoute path="/ClienteTenant" component={() => <MClienteTenant postRegisterCliente={this.props.postRegisterCliente}
                        clientes={this.props.clientes}
                        putUpdateCliente={this.props.putUpdateCliente} />} />
                      <PrivateRoute path="/DashboardTenant" component={() => <DashboardTenant tenant={URLactual} />} />
                      <PrivateRoute path="/UsuarioTenant" component={() => <MUsuarioTenant postRegisterUsuarioT={this.props.postRegisterUsuarioT}
                        usuariosT={this.props.usuariosT}
                        putUpdateUsuarioT={this.props.putUpdateUsuarioT} />} />
                      <PrivateRoute path="/EmpleadoTenant" component={() => <MEmpleadoTenant postRegisterEmpleado={this.props.postRegisterEmpleado}
                        empleados={this.props.empleados}
                        putUpdateEmpleado={this.props.putUpdateEmpleado} />} />
                      <PrivateRoute path="/MenuTenant" component={() => <MMenuTenant postRegisterMenu={this.props.postRegisterMenu}
                        menus={this.props.menus}
                        platillos={this.props.platillos}
                        putUpdateMenu={this.props.putUpdateMenu} />} />
                      <PrivateRoute path="/PlatilloTenant" component={() => <MPlatilloTenant postRegisterPlatillo={this.props.postRegisterPlatillo}
                        platillos={this.props.platillos}
                        ingredientes={this.props.ingredientes}
                        putUpdatePlatillo={this.props.putUpdatePlatillo} />} />
                      <PrivateRoute path="/IngredienteTenant" component={() => <MIngredienteTenant postRegisterIngrediente={this.props.postRegisterIngrediente}
                        ingredientes={this.props.ingredientes}
                        putUpdateIngrediente={this.props.putUpdateIngrediente} deleteIngrediente={this.props.deleteIngrediente} />} />
                      <PrivateRoute path="/FacturacionTenant" component={() => <MFacturacion postRegisterPlatillo={this.props.postRegisterPlatillo}
                        platillos={this.props.platillos}
                        clientes={this.props.clientes}
                        ingredientes={this.props.ingredientes}
                        putUpdatePlatillo={this.props.putUpdatePlatillo} />} />



                    </motion.div>
                  </Switch>
                </LeftAdminTenant >
              </PresentationLayout>
            </Route>


          </Switch>
        </Suspense>
      </AnimatePresence>
    );
  }
};


const mapStateToProps = state => {
  return {
    plans: state.Plans,
    empresas: state.Empresas,
    funcionalidades: state.Funcionalidades,
    usuarios: state.Usuarios,
    empleados: state.Empleados,
    clientes: state.Clientes,
    ingredientes: state.Ingredientes,
    usuariosT: state.UsuariosT,
    platillos: state.Platillos,
    menus: state.Menus,
  }
}

const mapDispatchToProps = (dispatch) => ({

  getPlans: () => { dispatch(getPlans()) },
  getEmpresas: () => { dispatch(getEmpresas()) },
  getFuncionalidades: () => { dispatch(getFuncionalidades()) },
  getUsuarios: () => { dispatch(getUsuarios()) },
  getUsuariosT: (tenant) => { dispatch(getUsuariosT(tenant)) },
  getEmpleados: (tenant) => { dispatch(getEmpleados(tenant)) },
  getClientes: (tenant) => { dispatch(getClientes(tenant)) },
  getIngredientes: (tenant) => { dispatch(getIngredientes(tenant)) },
  getPlatillos: (tenant) => { dispatch(getPlatillos(tenant)) },
  getMenus: (tenant) => { dispatch(getMenus(tenant)) },
  postRegisterPlan: (empresa) => dispatch(postRegisterPlan(empresa)),
  postRegisterFuncionalidad: (funcionalidad) => dispatch(postRegisterFuncionalidad(funcionalidad)),
  postRegisterEmpresa: (empresa) => dispatch(postRegisterEmpresa(empresa)),
  postRegisterUsuario: (usuario) => dispatch(postRegisterUsuario(usuario)),
  postRegisterUsuarioT: (usuario) => dispatch(postRegisterUsuarioT(usuario, URLactual)),
  postRegisterEmpleado: (empleado) => dispatch(postRegisterEmpleado(empleado, URLactual)),
  postRegisterCliente: (cliente) => dispatch(postRegisterCliente(cliente, URLactual)),
  postRegisterIngrediente: (ingrediente) => dispatch(postRegisterIngrediente(ingrediente, URLactual)),
  postRegisterPlatillo: (platillo) => dispatch(postRegisterPlatillo(platillo, URLactual)),
  postRegisterMenu: (menu) => dispatch(postRegisterMenu(menu, URLactual)),
  putUpdatePlan: (empresa) => dispatch(putUpdatePlan(empresa)),
  putUpdateFuncionalidad: (funcionalidad) => dispatch(putUpdateFuncionalidad(funcionalidad)),
  putUpdateUsuarioT: (usuario) => dispatch(putUpdateUsuarioT(usuario, URLactual)),
  putUpdateUsuario: (usuario) => dispatch(putUpdateUsuario(usuario)),
  putUpdateEmpleado: (empleado) => dispatch(putUpdateEmpleado(empleado, URLactual)),
  putUpdateCliente: (cliente) => dispatch(putUpdateCliente(cliente, URLactual)),
  putUpdateIngrediente: (ingrediente) => dispatch(putUpdateIngrediente(ingrediente, URLactual)),
  putUpdatePlatillo: (platillo) => dispatch(putUpdatePlatillo(platillo, URLactual)),
  putUpdateMenu: (menu) => dispatch(putUpdateMenu(menu, URLactual)),
  deleteIngrediente: (ingrediente) => dispatch(deleteIngrediente(ingrediente, URLactual)),

  addCarrito: (carrito) => dispatch(addCarrito(carrito))







});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));
