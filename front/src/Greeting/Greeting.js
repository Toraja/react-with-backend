import React, { Component } from 'react';
// somehow importing `React` is necessary as it is referenced in complied js
import GreetingForm from './GreetingForm.js';
import GreetingOutput from './GreetingOutput.js';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: '',
    };
    // Without this, `this.setState is not a function` error occurs.
    // The reason is that the context of `this` changes when the function is
    // passed around, and `this` will be no longer `Greeting` object.
    this.setGreeting = this.setGreeting.bind(this);
  }

  setGreeting(greeting) {
    this.setState({greeting: greeting});
  }

  render() {
    return (
      <>
        <GreetingForm setGreeting={this.setGreeting} />
        <GreetingOutput greeting={this.state.greeting} />
      </>
    );
  }
}

export default Greeting;
