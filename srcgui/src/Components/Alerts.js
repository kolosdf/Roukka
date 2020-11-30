import React, { Component, Fragment } from 'react'
import { withAlert } from 'react-alert'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'



export class Alerts extends Component {

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.first_name) alert.error(`Name: ${error.msg.first_name.join()} `);
            if (error.msg.email) alert.error(`Email: ${error.msg.email.join()} `);

            //Plan
            if (error.msg.funciones) alert.error(`Funciones: ${error.msg.funciones.join()} `);

            //Menus
            if (error.msg.platillos) alert.error(`Platillos: ${error.msg.platillos.join()} `);

            //Platillos
            if (error.msg.ingredientes) alert.error(`Platillos: ${error.msg.ingredientes.join()} `);

            //Login
            if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
        }

        if (message !== prevProps.message) {

            //if (message.deleteLead) alert.success(message.deleteLead)

            if (message.editPlan) alert.success(message.editPlan)
            if (message.addPlan) alert.success(message.addPlan)

            if (message.editFunc) alert.success(message.editFunc)
            if (message.addFunc) alert.success(message.addFunc)

            if (message.editUser) alert.success(message.editUser)
            if (message.addUser) alert.success(message.addUser)

            if (message.editEmp) alert.success(message.editEmp)
            if (message.addEmp) alert.success(message.addEmp)

            if (message.editClie) alert.success(message.editClie)
            if (message.addClie) alert.success(message.addClie)

            if (message.editMenu) alert.success(message.editMenu)
            if (message.addMenu) alert.success(message.addMenu)

            if (message.editPlati) alert.success(message.editPlati)
            if (message.addPlati) alert.success(message.addPlati)

            if (message.editIngre) alert.success(message.editIngre)
            if (message.addIngre) alert.success(message.addIngre)
        }


    }

    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = state => ({
    error: state.Errors,
    message: state.Messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));
