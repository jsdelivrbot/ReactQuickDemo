import React, { Component } from 'react';

export class WithParams extends Component {
  render() {
    return <div>{this.props.params.someParam}</div>
  }
}

export class WithOptionalParams extends Component {
  render() {
    return (
      <div>
        <div>Required Param - {this.props.params.someParam}</div>
        <div>Optional Param - {this.props.params.optionalParam}</div>
      </div>
    )
  }
}

export class QueryParam extends Component {
  render() {
    return (
      <div>
        <div>Query Param - {this.props.location.query.someQuery}</div>
      </div>
    )
  }
}