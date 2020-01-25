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

  //  handleChange is going to change the value of the state depending on the input from the user
  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  // the function message is going to run a loop from 1 to the number specified by the user
  messages() {
    // value is the number given by the user. The conversion is done to change the data type from string to number.
    const value = Number(this.state.input);
    var i ;
    for (i=1; i <= value; i++) {
      if(i%3===0 && i%5!==0){
        console.log("SKIM")
      }else
      if(i%5===0 && i%3!==0){
        console.log("is a great place to work!!")
      }else if(i%3===0 && i%5===0){
        console.log("SKIM is a great place to work")
      }else
      console.log(i)
    }
  }

  // handleSubmit is called when the user clicks on submit.
  handleSubmit = event => {
    event.preventDefault();
    this.messages();
  };
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div>
          <Typography component="h1" variant="h5" color="initial" align="center">
            Please enter a number to get messages in console
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
        </div>
      </Container>
    );
  }
}

export default ChallengeOne;
