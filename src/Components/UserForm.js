import React, { Component } from "react";

class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    job: "",
    city: "",
    bio: ""
  };

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  };

  previousStep = () => {
    this.setState({ step: this.state.step - 1 });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, job, city, bio } = this.state;
    const values = { firstName, lastName, email, job, city, bio };
    return (
      <div>
        <h1>test</h1>
      </div>
    );
  }
}

export default UserForm;
