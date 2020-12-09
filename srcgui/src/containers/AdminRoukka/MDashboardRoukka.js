import React, { Component } from 'react'
import PageTitle from '../../Components/PageTitle'

import { Card, Col, Row } from 'reactstrap'



function CardUser(props) {

    return (
        <Row>
            <Col md={5}>
                <Card className="p-3 mb-3">

                    <h1>nombre :{props.nombre} </h1>
                    <p>edad: {props.edad} </p>

                    arroz: {props.arroz}
                </Card>
            </Col>
        </Row>
    )

}








function MDashBoardRoukka(props) {

    const users = props.plans.plans.map(plan => {
        return (
            <CardUser nombre={plan.id} edad={plan.nombre} arroz={plan.precio} />
        )
    })
    return (
        <div>

        </div>
    )
}


export default MDashBoardRoukka
