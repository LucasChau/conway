import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ConwayGrid from '../containers/ConwayGrid';
import PatternCreator from '../containers/PatternCreator';
import Instruction from '../components/Instruction';

export default function Body() {
    return (
        <Row style={{marginBottom:'100px'}}>
            <Col xs={3}><Instruction/></Col>
            <Col xs={6}><ConwayGrid/></Col>
            <Col xs={3}><PatternCreator/></Col>
        </Row>
    )
}
