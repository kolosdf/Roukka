import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Sidebar, Header, Footer } from '../../layout-components';

import SidebarTenant from '../../Components/SideBarAdminTenant' 

const LeftAdminTenant = props => {
  const { children } = props;

  return (
    <Fragment>
      <div className="app-wrapper app-sidebar-fixed app-header-fixed">
        <div>
          <SidebarTenant />
        </div>
        <div className="app-main">
          <Header />
          <div className="app-content">
            <div className="app-content--inner">
              <div className="app-content--inner__wrapper">{children}</div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

LeftAdminTenant.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = state => ({
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

export default connect(mapStateToProps)(LeftAdminTenant);
