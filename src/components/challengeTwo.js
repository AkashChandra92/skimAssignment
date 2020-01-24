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
      input : event.target.value
    })
    // const value = Number(event.target.value)
    // if (
    //   event.target.value >= 1 &&
    //   event.target.value <= 18 &&
    //   Number.isInteger(value)
    // )   
    // {
      // this.setState({
      //   input: event.target.value
      // });
    //   console.log("The number is qualified for operations")
    // } else 
    // console.log("Please enter an integer between 1 and 18")
  };

  factorial ()  {
    console.log("yooooo")
    var i,
      fact = 1;
    for (i = this.state.input; i >= 1; i--) {
      fact = fact * i;
      console.log(fact);
      this.setState({
        output: fact
      });
    }
  };

  handleSubmit = event => {
    console.log(`the state input is :" ${this.state.input}`)
    event.preventDefault();
    // this.factorial();
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
              id="inputTwo"
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
