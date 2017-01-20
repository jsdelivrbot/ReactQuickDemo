import React, { Component } from 'react';

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log('Component Constructor!')
  }

  componentWillMount() {
    console.log('Component WILL MOUNT!')
  }

  componentDidMount() {
    console.log('Component DID MOUNT!')
  }

  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECEIVE PROPS!')
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('Component SHOULD UPDATE!');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }

  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

  render() {
    console.log('Component RENDER');
    return (
      <div>
        <h1>Lifecycle</h1>
        <button onClick={() => {
          this.setState({});
        }}>Click me!</button>
      </div>
    );
  }
}