import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Layout Blueprints

import { LeftSidebar, PresentationLayout } from './layout-blueprints';





//Landing Page Roukka
import Plan from './containers/LandingPageRoukka/PlanComponent'
import Header from './containers/LandingPageRoukka/HeaderLandingPage'
import Contact from './containers/LandingPageRoukka/ContactComponent'
import About from './containers/LandingPageRoukka/AboutComponent'
import ComprarPlan from './containers/LandingPageRoukka/ComprarPlan'


//A ver

import LandingPage2 from './containers/AdminEmpresa/LandingPage'

//Admin Roukka

import LeftAdminRoukka from './containers/AdminRoukka/LeftAdminRoukka'
import MPlanRoukka from './containers/AdminRoukka/MPlanRoukka'
import MUserRoukka from './containers/AdminRoukka/MUserRoukka'
import MEmpresaRoukka from './containers/AdminRoukka/MEmpresaRoukka'
import MDashboardRoukka from './containers/AdminRoukka/MDashboardRoukka'


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

const Routes = () => {
  const location = useLocation();

  const pageVariants = {
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

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

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
          
          <Route path={['/LandingPage', '/Home', '/Plans','/Contactus','/Aboutus','/Comprar']}>
            <PresentationLayout>
              <Header />
              <Switch location={location} key={location.pathname}>          
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/Home" component={Home} />
                  <Route path="/Plans" component={Plan} />
                  <Route path="/Contactus" component={Contact} />
                  <Route path="/Aboutus" component={About} />
                  <Route path="/Comprar/:idPlan" component={ComprarPlan} />         
                </motion.div>
              </Switch>
            </PresentationLayout>
          </Route>

          <Route path={['/LandingPageTenant']}>
            <PresentationLayout>
              <Switch location={location} key={location.pathname}>          
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/LandingPageTenant" component={LandingPage2} />
                          
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
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
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
            <LeftAdminRoukka>

            <Switch location={location} key={location.pathname}>
            <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route
                    path="/DashboardRoukka"
                    component={MDashboardRoukka}
                  />
                  <Route
                    path="/PlanRoukka"
                    component={MPlanRoukka}
                  />
                  <Route
                    path="/EmpresaRoukka"
                    component={MEmpresaRoukka}
                  />
                  <Route
                    path="/UserRoukka"
                    component={MUserRoukka}
                  />
              </motion.div>
            </Switch>


            </LeftAdminRoukka>
            
          </Route>

        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};

export default Routes;
