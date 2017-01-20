import React, { Component } from 'react';

import {Sample, WithParams} from './func-component'
import {SampleComponent, DataComponent} from './class-component'
import Lifecycle from './lifecycle-component'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {stateVariable: 1};
  }
  // render() {
  //   return (
  //       <div>
  //         <Sample />
  //         <hr />
  //         <WithParams alabala="neshto" contentMessage="Hello sfrom function component!!"/>
  //       </div>
  //   );
  // }

  // render() {
  //   return (
  //     <div>
  //       <SampleComponent/>
  //       <hr/>
  //       <DataComponent componentHeading="Heading of class Component" />
  //     </div>
  //   );
  // }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({stateVariable: this.state.stateVariable++})}>Parent button</button>
        <Lifecycle someProp={this.state.stateVariable}/>
      </div>

    )
  }
}