import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

export default class App extends Component {
  render() {
    return (
        <div>
          Router Demo Class
          <ul>
            <li><Link to="/base">Base</Link></li>
            <li><Link to="/withParam/RequiredValue">With Param</Link></li>
            <li><Link to="/optionalParam/RequiredValue">Optional Param - empty</Link></li>
            <li><Link to="/optionalParam/RequiredValue/OptionalValue">Optional Param</Link></li>
            <li><Link to="/queryParam?someQuery=alabala">Query Param</Link></li>
          </ul>
          <hr/>

          {this.props.children}
        </div>
    );
  }
}

