import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

class FormPersonalDetails extends Component {
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
              Enter Personal Here...
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          helperText=""
          placeholder="Bio"
          onChange={this.props.handleChange("bio")}
          defaultValue={this.props.values.bio}
          required={true}
          margin="normal"
          name="bio"
        />
        <br />
        <TextField
          helperText=""
          placeholder="City"
          onChange={this.props.handleChange("city")}
          defaultValue={this.props.values.city}
          required={true}
          margin="normal"
          name="city"
        />
        <br />
        <TextField
          helperText=""
          placeholder="Job"
          onChange={this.props.handleChange("job")}
          defaultValue={this.props.values.job}
          required={true}
          margin="normal"
          name="job"
        />
        <br />
        <Button
          style={styles.button}
          variant="contained"
          onClick={() => this.props.previousStep()}
        >
          Previous Page...
        </Button>
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
    color: "white"
  }
};

export default FormPersonalDetails;
