import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

console.log("this is just a test app");

const Success = () => {
  return (
    <div>
      <AppBar
        position="static"
        color="primary"
        style={{ backgroundColor: "purple" }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Success
          </Typography>
        </Toolbar>
      </AppBar>
      <h1>Thank you for your submission</h1>
      <p>someone will be in contact soon</p>

      <p>
        <em>(Not really, see console.log)</em>
      </p>
    </div>
  );
};

export default Success;
