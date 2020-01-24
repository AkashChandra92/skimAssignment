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

  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  factorial() {
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
      console.log(`The factorial is: ${this.state.output}`)
    } else 
    console.log("Please enter an integer between 1 and 18");
  }

  handleSubmit = event => {
    event.preventDefault();
    this.factorial();
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div>
          <Typography component="h1" variant="h5" color="t000000" align="top">
            Please enter a number to get the factorial
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
