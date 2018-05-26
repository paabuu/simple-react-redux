import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from './react-redux';

class App extends Component {
  render() {
    return (
        <div>
            <h1>counter</h1>
            <h1>{ this.props.count }</h1>
            <button onClick={ this.props.inc }>+</button>
            <button onClick={ this.props.dec }>-</button>
        </div>
    );
  }
}

export default connect(state => ({
    count: state.count
}), dispatch => ({
    inc: () => dispatch({ type: 'INC' }),
    dec: () => dispatch({ type: 'DEC' })
}))(App);
