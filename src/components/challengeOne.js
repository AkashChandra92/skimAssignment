import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class ChallengeOne extends Component {
  state = {
    input: null,
    output: null
  };

  // handleChange is going to change the value of the state depending on the input from the user
  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  // the function factorial is going to check if the number is an integer between 1 and 18 and then calculate the factorial
  factorial() {
    // value is the number given by the user. The conversion is done to change the data type from string to number.
    const value = Number(this.state.input);
    if (value >= 1 && value <= 18 && Number.isInteger(value)) {
      var i,
        fact = 1;
      for (i = this.state.input; i >= 1; i--) {
        fact = fact * i;
        console.log(fact);
        this.setState({
          output: fact
        });
      }
    } else 
    console.log("Please enter an integer between 1 and 18");
  }

  // handleSubmit is called when the user clicks on submit.
  handleSubmit = event => {
    event.preventDefault();
    this.factorial();
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div>
          <Typography component="h1" variant="h5" color="t000000" align="top">
            Please enter an integer between 1 and 18 to get the factorial
          </Typography>
          <form className="inputForm" noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="inputOne"
              label="input"
              name="input"
              autoComplete="number"
              autoFocus
              onChange={this.handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="Button"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </form>
          <p>Factorial is : {this.state.output}</p>
        </div>
      </Container>
    );
  }
}

export default ChallengeOne;
