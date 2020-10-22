import React, { Component } from 'react'

export class LandingPage2 extends Component {
    
    render() {
        const URLactual = window.location.hostname.split('.').shift();
        return (
            <div>
                Hola soy el tenant = {URLactual}
            </div>
        )
    }
}

export default LandingPage2
