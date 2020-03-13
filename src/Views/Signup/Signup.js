import React, { Component } from 'react';
import './Signup.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      name: 'Rahul',
      error: '',
    };
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }
  dismissError() {
    this.setState({ error: '' });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }
    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    return this.setState({ error: '' });
  }
  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };
  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  handleRegister = () => {

    console.log("Calling Ajax function.....")
    console.log(this.state.username)
    console.log(this.state.password)
    const post = {
      email: this.state.username,
      password: this.state.password,
      name: this.state.name

    };
    console.log("post----->>>>", post)
    axios.put('http://localhost:8000/auth/signup', post, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json',
      },
    })
      .then((responseJson) => {
        console.log("This is my response Json", responseJson.data)
        var userId = responseJson.data.userId;
        var message = responseJson.data.message;
        //   console.log("token"+ token);
        //   console.log("userId"+userId);
        //  alert(message)
        if (message === 'User created Sucessfully') {
          swal({
            title: "Sucess",
            text: "You have Sucessfully Registered",
            icon: "success",
            timer: 3000,
            button: false
          })
          this.props.history.push('/Login')
        }

      })
      .catch((error) => {
        console.error(error);
        swal({
          title: "Registration Faliure",
          text: "Please Check Your Data",
          icon: "warning",
          timer: 3000,
          button: false
        })
        this.props.history.push('/Login')
      });
    //this.props.history.push('/Login')
  }
  render() {

    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)
    return (
      <div>
        <Header />
        <div className="Signup">

          <form onSubmit={this.handleSubmit}>
            {
              this.state.error &&
              <h3 data-test="error" onClick={this.dismissError}>
                <button onClick={this.dismissError}>✖</button>
                {this.state.error}
              </h3>
            }

            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={this.state.name}
              onChange={this.handleUserNameChange} />
            <br /><br />
            <TextField
              id="outlined-basic"
              label="Email Id"
              variant="outlined"
              value={this.state.username}
              onChange={this.handleUserChange} />
            <br /><br />
            <TextField
              type="password"
              id="outlined-basic"
              label="Password"
              variant="outlined" />
            <br /><br />
            <TextField
              type="password"
              id="outlined-basic"
              label="Confirm Password"
              variant="outlined"
              value={this.state.password}
              onChange={this.handlePassChange}
            />
            <br /><br />
            <Button
              variant="contained"
              color="primary"
              component="span"
              onClick={this.handleRegister}>Register</Button>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Signup;    