import React, { Component } from 'react';
import '../styles/stack.css';

class Stack extends Component {
  render() {
    return (
      <div className="skillstack">
        <ul>
          <li><img src={require('../styles/img/github.png')} alt="Frame"/></li>
          <li><img src={require('../styles/img/JavaScript.png')} alt="Frame"/></li>
          <li><img src={require('../styles/img/jquery.png')} alt="Frame"/></li>
          <li><img id="node" src={require('../styles/img/node.png')} alt="Frame"/></li>
          <li><img src={require('../styles/img/PostgreSQL.png')} alt="Frame"/></li>
          <li><img src={require('../styles/img/react.png')} alt="Frame"/></li>
          <li><img src={require('../styles/img/redux.png')} alt="Frame"/></li>
          <li><img src={require('../styles/img/ruby.png')} alt="Frame"/></li>
        </ul>
      </div>
    );
  }
}

export default Stack;