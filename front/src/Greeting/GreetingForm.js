import React, { Component } from 'react';

class GreetingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({to: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.greet();
  }

  async greet() {
    let response = await fetch(`${process.env.BACKEND_HOST}/hello/${this.state.to}`);

    if (!response.ok) {
      let respText = await response.text();
      alert(`HTTP Error: ${respText}`);
      return;
    }

    let respJson = await response.json();
    this.props.setGreeting(respJson.message);
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            To:
            <input type="text" defaultValue={this.state.to} onChange={this.handleChange} />
          </label>
          <button type="submit">Greet</button>
        </form>
      </>
    );
  }
}

export default GreetingForm;
