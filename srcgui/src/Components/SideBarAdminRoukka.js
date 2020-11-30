import React, { Fragment, Component } from 'react';

import { Link } from 'react-router-dom';

import projectLogo from '../assets/images/react.svg';

import PerfectScrollbar from 'react-perfect-scrollbar';

import RouterLink from '../layout-components/ReactMetismenuRouterLink'

import MetisMenu from 'react-metismenu';
import clsx from 'clsx';

const sidebarMenuContent = [
  {
    label: 'Dashboards',
    icon: 'pe-7s-safe',
    description:
        'This is a dashboard page example built using this template.',
    to: '/DashboardRoukka'
  },

  {
    label: 'Gestion de Planes',
    icon: 'pe-7s-network',
    content: [
      {
        label: 'Planes',
        description:'Wide selection of cards with multiple styles, borders, actions and hover effects.',
        to: '/PlanRoukka'
      },
      {
        label: 'Funcionalidades',
        description:
          'A drop-down list is a graphical control element, similar to a list box, that allows the user to choose one value from a list.',
        to: '/FuncionRoukka'
      },
    ]  
  },
  {
    label: 'Gestión de Empresas',
    icon: 'pe-7s-portfolio',
    description: 'Implement in your applications Google or vector maps.',
    to: '/EmpresaRoukka'
  },
  {
    label: ' Gestión de Usuarios',
    icon: 'pe-7s-users',
    description: 'Implement in your applications Google or vector maps.',
    to: '/UserRoukka'
  },

  {
    label: 'Maps',
    icon: 'pe-7s-way',
    description: 'Implement in your applications Google or vector maps.',
    to: '/Plans'
  }
];



const SidebarHeader = () => { 
    return (
      <Fragment>
        <div className="app-sidebar--header">
          <div className="nav-logo">
            <Link
              to="/DashboardDefault"
              title="Roukka React Admin Dashboard">
              <i>
                <img
                  alt="Roukka"
                  src={projectLogo}
                />
              </i>
              <span>Roukka</span>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  
}


class SidebarMenu extends Component {
    render() {
      return (
        <Fragment>
          <PerfectScrollbar>
            <div className="sidebar-navigation">
              <div className="sidebar-header">
                <span>Menú de Navegación</span>
              </div>
              <MetisMenu
                content={sidebarMenuContent}
                LinkComponent={RouterLink}
                activeLinkFromLocation
                iconNamePrefix=""
                noBuiltInClassNames={true}
                classNameItemActive="active"
                classNameIcon="sidebar-icon"
                iconNameStateVisible="sidebar-icon-indicator"
                iconNameStateHidden="sidebar-icon-indicator"
                classNameItemHasVisibleChild="submenu-open"
                classNameItemHasActiveChild="active"
                classNameStateIcon="pe-7s-angle-down"
              />
            </div>
          </PerfectScrollbar>
        </Fragment>
      );
    }
  }



  class SidebarRoukka extends Component {
    toggleSidebarMobile = () => {
      let { sidebarToggleMobile, setSidebarToggleMobile } = this.props;
      setSidebarToggleMobile(!sidebarToggleMobile);
    };
  
    render() {
      let { sidebarToggleMobile } = this.props;
  
      return (
        <Fragment>
          <div className="app-sidebar app-sidebar--dark">
            <SidebarHeader />
            <div className="app-sidebar--content">
              <SidebarMenu />
            </div>
          </div>
          <div
            onClick={this.toggleSidebarMobile}
            className={clsx('app-sidebar-overlay', {
              'is-active': sidebarToggleMobile
            })}
          />
        </Fragment>
      );
    }
  }
  
  export default SidebarRoukka;
