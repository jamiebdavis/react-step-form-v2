import React, { Component } from "react";
import FormUsersDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

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
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, job, city, bio } = this.state;
    const values = { firstName, lastName, email, job, city, bio };

    let form;

    if (step === 1) {
      form = (
        <FormUsersDetails
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
        />
      );
    }
    if (step === 2) {
      form = (
        <FormPersonalDetails
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          handleChange={this.handleChange}
          values={values}
        />
      );
    }
    if (step === 3) {
      form = (
        <Confirm
          nextStep={this.nextStep}
          previousStep={this.previousStep}
          values={values}
        />
      );
    }
    if (step === 4) {
      form = <Success />;
    }

    return <div>{form}</div>;
  }
}

export default UserForm;
