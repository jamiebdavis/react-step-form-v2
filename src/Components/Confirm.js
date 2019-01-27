import React, { Component } from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@material-ui/core";

//PUSH TO DATA TO API AT LATER DATE

class Confirm extends Component {
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
              Confirm Details
            </Typography>
          </Toolbar>
        </AppBar>

        <List component="ul">
          <ListItem button={false}>
            <ListItemText
              primary="First Name"
              secondary={this.props.values.firstName}
            />
          </ListItem>

          <ListItem button={false}>
            <ListItemText
              primary="Last Name"
              secondary={this.props.values.lastName}
            />
          </ListItem>

          <ListItem button={false}>
            <ListItemText
              primary="Email Address"
              secondary={this.props.values.email}
            />
          </ListItem>

          <Divider />
          <ListItem button={false}>
            <ListItemText primary="Bio" secondary={this.props.values.bio} />
          </ListItem>

          <ListItem button={false}>
            <ListItemText
              primary="Home City"
              secondary={this.props.values.city}
            />
          </ListItem>

          <ListItem button={false}>
            <ListItemText
              primary="Occupation"
              secondary={this.props.values.job}
            />
          </ListItem>
        </List>

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
  },
  listItem: {
    alignItem: "center"
  }
};

export default Confirm;
