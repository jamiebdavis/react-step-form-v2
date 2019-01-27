import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class FormUsersDetails extends Component {
  state = {};
  render() {
    return (
      <div>
        <AppBar
          position="static"
          color="primary"
          style={{ backgroundColor: "purple" }}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Enter Details Here...
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          helperText=""
          placeholder="First name"
          onChange={this.props.handleChange("firstName")}
          defaultValue={this.props.values.firstName}
          required={true}
          margin="normal"
          name="firstName"
        />
        <br />
        <TextField
          helperText=""
          placeholder="Last name"
          onChange={this.props.handleChange("lastName")}
          defaultValue={this.props.values.lastName}
          required={true}
          margin="normal"
          name="lastName"
        />
        <br />
        <TextField
          helperText=""
          placeholder="Email"
          onChange={this.props.handleChange("email")}
          defaultValue={this.props.values.email}
          required={true}
          margin="normal"
          name="email"
        />
        <br />
        <Button
          style={styles.button}
          variant="contained"
          onClick={() => this.props.nextStep()}
        >
          Continue...
        </Button>
      </div>
    );
  }
}

const styles = {
  button: {
    margin: "15px",
    backgroundColor: "purple",
    color: "white",
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    borderRadius: 3,
    border: 0,
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
};

export default FormUsersDetails;
