
import React, { Fragment, Component } from 'react';

import clsx from 'clsx';

import { Button, Nav, Collapse, Navbar, NavbarToggler, NavbarBrand, NavItem } from 'reactstrap';

import { connect } from 'react-redux';

import { setSidebarToggleMobile } from '../../reducers/ThemeOptions';
import { NavLink } from 'react-router-dom'
import HeaderUserbox from '../../layout-components/HeaderUserbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    toggleSidebarMobile = () => {
        let { sidebarToggleMobile, setSidebarToggleMobile } = this.props;
        setSidebarToggleMobile(!sidebarToggleMobile);
    };

    render() {
        let { sidebarToggleMobile } = this.props;
        return (
            <Fragment>

                <Navbar light expand="md">
                    <div className="container">
                        <button
                            className={clsx(
                                'navbar-toggler hamburger hamburger--elastic toggle-mobile-sidebar-btn',
                                { 'is-active': this.state.isNavOpen }
                            )}
                            onClick={this.toggleNav}>
                            <span className="hamburger-box">
                                <span className="hamburger-inner" />
                            </span>
                        </button>

                        <NavbarBrand className="ml-1 mr-auto" href="/">
                            Roukka
                    </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="navbar-nav" navbar>

                                <NavItem>
                                    <NavLink className="nav-link  ml-5" to="/Home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>

                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link ml-5" to="/Aboutus">
                                        <span className="fa fa-info fa-lg"></span> Sobre Nosotros
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link ml-5" to="/Plans">
                                        <span className="fa fa-list fa-lg"></span>  Nuestros Planes
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link ml-5" to="/Contactus">
                                        <span className="fa fa-address-card fa-lg"></span> Contactanos
                                </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link ml-5" to="/PlanRoukka">
                                        <span className="fa fa-address-card fa-lg"></span> Ir
                                </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link ml-5" to="/Login">
                                        <FontAwesomeIcon
                                            icon={['fas', 'sign-in-alt']}
                                            className="opacity-8"
                                            size="1x"
                                        />
                                        <span> Login</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>

                    </div>

                </Navbar>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = dispatch => ({
    setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
