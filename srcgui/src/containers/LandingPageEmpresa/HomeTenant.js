import React, { Component } from 'react'

export class HomeTenant extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        
        return (
            <div>
                Hola soy el tenant = {this.props.tenant}
                {console.log(this.props.tenant)}


                que es esta mierda
            </div>
        )
    }
}

export default HomeTenant
