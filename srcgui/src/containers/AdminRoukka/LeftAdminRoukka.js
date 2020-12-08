
import React, { Fragment } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Sidebar, Footer } from '../../layout-components';

import Header from '../../Components/Header'

import SidebarRoukka from '../../Components/SideBarAdminRoukka'

const LeftAdminRoukka = props => {
  const { children } = props;

  return (
    <Fragment>
      <div className="app-wrapper app-sidebar-fixed app-header-fixed">
        <div>
          <SidebarRoukka />
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

LeftAdminRoukka.propTypes = {
  children: PropTypes.node
};

const mapStateToProps = state => ({
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

export default connect(mapStateToProps)(LeftAdminRoukka);
