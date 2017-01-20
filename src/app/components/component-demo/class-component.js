import React, { Component } from 'react';

export class SampleComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Some sample class component</div>
  }
}

export class DataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {inputTextContent: 'Test content'};
  }

  render() {
    return (
      <div>
        <h1>{this.props.componentHeading}</h1>

        {/*Tell about bind(this)*/}
        <input type="text" value={this.state.inputTextContent} onChange={this.onInputChange.bind(this)}/>
        <h3>{this.state.inputTextContent}</h3>
      </div>
    )
  }

  onInputChange(event) {
    this.setState({inputTextContent: event.target.value})
  }
}