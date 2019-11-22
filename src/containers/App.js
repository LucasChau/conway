import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from '../components/Introduction';
import { Row, Col } from 'react-bootstrap'
import Instruction from '../components/Instruction';
import ConwayGrid from './ConwayGrid';
import PatternCreator from './PatternCreator';
import { initializeSocket } from '../actions/websocket.js';
import { Container } from 'react-bootstrap';
import '../index.css';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(initializeSocket());
  }

  render() {
    return (
      <Container>
        <Header/>        
        <Row style={{marginBottom:'100px'}}>
            <Col xs={2}><Instruction/></Col>
            <Col xs={8}><ConwayGrid/></Col>
            <Col xs={2}><PatternCreator/></Col>
        </Row>
      </Container>
    );
  }
}


export default connect()(App);
