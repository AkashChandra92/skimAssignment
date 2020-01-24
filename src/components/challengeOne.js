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
    const value = Number(event.target.value)
    console.log(value, "yaaaasss")
    if (
      event.target.value >= 1 &&
      event.target.value <= 18 &&
      Number.isInteger(value)
    )   
    {
      console.log("the number is qualified for operations")
      this.setState({
        input: event.target.value
      });
    } else 
    console.log("Please enter an integer between 1 and 18")
  };

  factorial () {
    console.log("yooooo", this.state.input)
    var i,
      fact = 1;
    // for (i = this.state.input; i >= 1; i--) {
    //   fact = fact * i;
    //   console.log(fact);
    //   this.setState({
    //     output: fact
    //   });
    // }
  };

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
