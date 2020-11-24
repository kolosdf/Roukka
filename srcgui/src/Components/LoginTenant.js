import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Recaptcha from 'react-recaptcha';

import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { loginTenant } from '../config/ActionCreators'

export class LoginTenant extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isVerefied: false,
        };



        this.verifyCallback = this.verifyCallback.bind(this)
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this)
    }

    static propTypes = {
        loginTenant: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    }


    onSubmit = e => {
        const URLactual = window.location.hostname.split('.').shift();
        e.preventDefault()
        if (this.state.isVerefied) {
            this.props.loginTenant(this.state.username, this.state.password, URLactual)
        } else {
            alert('Verificar recaptcha')
        }

    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    recaptchaLoaded() {
        console.log('Done!');
    };

    verifyCallback(response) {
        if (response) {
            this.setState({ isVerefied: true })
            console.log('Done!');
        }

    };

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/DashboardTenant" />
        }
        const { username, password } = this.state
        return (
            <div className="col-md-6 m-auto">
                <div className="card card-body mt-5">
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                onChange={this.onChange}
                                value={username}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                onChange={this.onChange}
                                value={password}
                            />
                        </div>
                        <div className="form-group">
                            <Recaptcha
                                sitekey="6Lfy8OcZAAAAAJmSfXjMV7Arwr8dQGewe9IlCd47"
                                render="explicit"
                                verifyCallback={this.verifyCallback}
                                onloadCallback={this.recaptchaLoaded}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-first">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.Auth.isAuthenticated
})

export default connect(mapStateToProps, { loginTenant })(LoginTenant)
