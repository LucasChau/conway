import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from '../components/Introduction';
import Body from '../components/Body';
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
        <Body/>
      </Container>
    );
  }
}


export default connect()(App);
