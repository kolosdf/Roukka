import React, { Component } from 'react'

import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const URLactual = window.location.hostname.split('.').shift();

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isLoading) {
                    //spinner
                    return <h2>Loading...</h2>

                } else if (!auth.isAuthenticated && URLactual === 'localhost') {
                    return <Redirect to="/login" />

                } else if (!auth.isAuthenticated && URLactual !== 'localhost') {
                    return <Redirect to="/loginEmpresa" />
                } else {
                    return <Component {...props} />
                }

            }}
        />
    )
}

const mapStateToProps = state => ({
    auth: state.Auth
})

export default connect(mapStateToProps)(PrivateRoute)
