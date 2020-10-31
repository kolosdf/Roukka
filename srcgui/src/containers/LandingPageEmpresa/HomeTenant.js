import React, { Component } from 'react'

export class HomeTenant extends Component {
    constructor(props){
        super(props)
    }
    
    render() {

        if(this.props.tenant== null){
            return <div></div>
        }else{
            return (
                <div>
                    <img width="20" height="400" alt="..." className="card-img-top" src={this.props.tenant.imagen} />
                   
                    
                    {console.log(this.props.tenant)}
    
    
                    que es esta mierda
                </div>
            )
        }
        
        
    }
}

export default HomeTenant
