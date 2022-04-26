import React, { Component } from 'react';

class GreetingOutput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div>{this.props.greeting}</div>
      </>
    );
  }
}

export default GreetingOutput;
