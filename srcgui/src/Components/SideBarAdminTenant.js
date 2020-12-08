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
    icon: 'pe-7s-home',
    description:
      'This is a dashboard page example built using this template.',
    to: '/DashboardTenant'
  },

  {
    label: 'Gestión de Usuarios',
    icon: 'pe-7s-id',
    description:'Wide selection of cards with multiple styles, borders, actions and hover effects.',
    to: '/UsuarioTenant'

  },
  {
    label: 'Gestión de Empleados',
    icon: 'pe-7s-users',
    description: 'Implement in your applications Google or vector maps.',
    to: '/EmpleadoTenant'
  },
  {
    label: ' Gestión de Clientes',

    icon: 'pe-7s-user',
    description: 'Implement in your applications Google or vector maps.',
    to: '/ClienteTenant'
  },
  {
    label: 'Gestión de Menus',
    icon: 'pe-7s-coffee',

    content: [
      {
        label: 'Menus',
        description: 'Implement in your applications Google or vector maps.',
        to: '/MenuTenant'
      },
      {
        label: 'Platillos',
        description:
          'A drop-down list is a graphical control element, similar to a list box, that allows the user to choose one value from a list.',
        to: '/PlatilloTenant'
      },
      {
        label: 'Ingredientes',
        description: 'Implement in your applications Google or vector maps.',
        to: '/IngredienteTenant'
      }
    ]
  },

  {
    label: 'Facturacion',

    icon: 'pe-7s-cash',
    description: 'Implement',
    to: '/FacturacionTenant'
  },


   {
    label: 'Configuracion',
    icon: 'pe-7s-config',
    description: 'Implement',
    to: '/InformacionTenant'

  }


];



const SidebarHeader = () => {
  return (
    <Fragment>
      <div className="app-sidebar--header">
        <div className="nav-logo">
          <Link
            to="/DashboardDefault"
            title="Tenant React Admin Dashboard">
            <i>
              <img
                alt="Roukka"
                src={projectLogo}
              />
            </i>
            <span>Tenant</span>
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



class SidebarTenant extends Component {
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

export default SidebarTenant;
