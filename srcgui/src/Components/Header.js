import React, { Fragment, Component } from 'react';

import clsx from 'clsx';

import { connect } from 'react-redux';

import { setSidebarToggleMobile } from '../reducers/ThemeOptions';

import { logout } from '../config/ActionCreators'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    ListGroup,
    ListGroupItem,
    Nav,
    NavItem,
    NavLink,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';

import avatar5 from '../assets/images/avatars/avatar5.jpg';

const URLactual = window.location.hostname.split('.').shift();

const HeaderUserBox = ({ logout, user }) => {
    return (
        <Fragment>
            <UncontrolledDropdown className="user-box position-relative ml-2">
                <DropdownToggle
                    color="link"
                    className="p-0 text-left d-flex align-items-center">
                    <div className="d-block bg-first d-44 rounded-sm overflow-hidden">
                        <h1 className="text-center text-white">{user ? user.first_name.slice(0, 1).toUpperCase() : ""}</h1>
                    </div>
                    <div className="d-none d-xl-block pl-2">
                        <div className="font-weight-bold">{user ? user.first_name + " " + user.last_name : ""}</div>
                        <span className="text-black-50">{user ? user.tipo : ""}</span>
                    </div>
                    <span className="pl-1 pl-xl-3">
                        <FontAwesomeIcon
                            icon={['fas', 'angle-down']}
                            className="opacity-5"
                        />
                    </span>
                </DropdownToggle>
                <DropdownMenu right className="dropdown-menu-lg overflow-hidden p-0">
                    <ListGroup flush className="text-left bg-transparent">
                        <ListGroupItem className="rounded-top">
                            <Nav pills className="nav-neutral-primary flex-column">
                                <NavItem>
                                    <NavLink href="#" onClick={logout.bind(this, URLactual)}>
                                        Salir
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </ListGroupItem>
                    </ListGroup>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Fragment>
    )
}

class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired,
        sidebarToggleMobile: PropTypes.bool.isRequired
    }


    toggleSidebarMobile = () => {
        let { sidebarToggleMobile, setSidebarToggleMobile } = this.props;
        setSidebarToggleMobile(!sidebarToggleMobile);
    };

    render() {
        let { sidebarToggleMobile, auth } = this.props;
        return (
            <Fragment>
                <div className="app-header">
                    <div className="app-header--pane">
                        <button
                            className={clsx(
                                'navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn',
                                { 'is-active': sidebarToggleMobile }
                            )}
                            onClick={this.toggleSidebarMobile}>
                            <span className="hamburger-box">
                                <span className="hamburger-inner" />
                            </span>
                        </button>


                    </div>
                    <div className="app-header--pane">
                        <HeaderUserBox user={this.props.auth.usuario} logout={this.props.logout} />
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile,
    auth: state.Auth
});

const mapDispatchToProps = dispatch => ({
    setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable)),
    logout: (tenant) => dispatch(logout(tenant))

});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
