import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
        <div>
          {/*{this.helloWorld()}*/}
          {/*{this.styledHelloWorld()}*/}
          {/*{this.collectionRender()}*/}
          {this.ifRendering(1)} <hr/> {this.ifRendering(5)}
        </div>
    );
  }

  helloWorld() {
    return <div>Hello world</div>
  }

  styledHelloWorld() {
    let styles = {
      fontSize: '24px',
      backgroundColor: 'green',
      color: 'purple'
    };

    return <div style={styles}>Hello world!!</div>
  }

  collectionRender() {
    let someData = ['pesho', 'gosho', 'rumen'];
    return someData.map((item, index) => {
        return <h3 key={index}>{item}</h3>
      }
    )
  }

  ifRendering(someValue) {
    if (someValue == 1) {
      return <div>Some result</div>;
    } else {
      return <div>Default result</div>;
    }
  }
}

