import React, { Component } from 'react';
import './Login.css';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import axios from 'axios'
import swal from 'sweetalert';
import Popup from "reactjs-popup";
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class LoginPage extends Component {
  document
  constructor() {
    super();
    this.state = {
      type: '',
      username: '',
      password: '',
      error: '',
    };
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
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
  handleTypeChange(evt) {
    this.setState({
        type: evt.target.value,
    });
}
  handleRegister = () => {
    this.props.history.push('/Signup')
  }
  handleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem('document', JSON.stringify(this.state));
    console.log("Calling Ajax function.....")
    console.log(this.state.username)
    console.log(this.state.password)
    const post = {
      email: this.state.username,
      password: this.state.password
    };
    axios.post('http://localhost:8000/auth/login', post, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json',
      },
    })
      .then((responseJson) => {
        console.log("This is my response Json", responseJson.data)
        // var message = responseJson.message;
        var userId = responseJson.data.userId;
        var message = responseJson.data.message;
        console.log("userId" + userId);
        console.log("Type", this.state.type)
        if (message === "Login Sucessfull" && this.state.type === "Dealer") {
          swal({
            title: "Sucess",
            text: "You have Sucessfully Logged In",
            icon: "success",
            timer: 3000,
            button: false
          })
          this.props.history.push('/DealerHome')
        }

        if (message === "Login Sucessfull" && this.state.type === "Bank") {
          swal({
            title: "Sucess",
            text: "You have Sucessfully Logged In",
            icon: "success",
            timer: 3000,
            button: false
          })
          this.props.history.push('/BankHome')
        }

        if (message === "Login Sucessfull" && this.state.type === "OEM") {
          swal({
            title: "Sucess",
            text: "You have Sucessfully Logged In",
            icon: "success",
            timer: 3000,
            button: false
          })
          this.props.history.push('/OEMHome')
        }
        // if (message === 'User Not Found !' || message === ' Email or Password wrong!' || message === 'Register Please!') {
        //          } else  {
        //         (message === 'undefined')
        //          console.log("Homepage");
        //          console.log('token'+token);
        //        //  this.props.navigation.navigate('HomePage',{token: token,user:user});
        //     }

      })
      .catch((error) => {
        console.error(error);
        swal({
          title: "Login Failure",
          text: "Please Check Creadentials",
          icon: "warning",
          timer: 3000,
          button: false
        })
      });
  }

  componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));

    if (localStorage.getItem('document')) {
      this.setState({
        username: this.documentData.username,
        password: this.documentData.password,
        error: this.documentData.error
      })
    } else {
      this.setState({
        username: '',
        password: '',
        error: '',
      })
    }
  }

  render() {

    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)
    return (
      <div>
        <div className="Background">
        <br/>
        <div className="Login" >
         <br/>
          <form onSubmit={this.handleSubmit}>
            {
              this.state.error &&
              <h3 data-test="error" onClick={this.dismissError}>
                <button onClick={this.dismissError}>✖</button>
                {this.state.error}
              </h3>
            }
            <h2>Account Login</h2>
<FormControl >
                        <InputLabel>
                            I am
                        </InputLabel>
                        <Select
                            style={{minWidth: "220px"}}  
                            native
                            data-test="type"
                            value={this.state.type}
                            onChange={this.handleTypeChange}

                        >
                            <option value="" />
                            <option value="Dealer">Dealer</option>
                            <option value="Bank">Bank</option>
                            <option value="OEM">OEM</option>
                        </Select>
                    </FormControl>
                    <br /><br />
            <TextField
              id="outlined-basic"
              label="Email Id"
              variant="outlined"
              value={this.state.username}
              onChange={this.handleUserChange} />
            <br /><br />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              data-test="password"
              value={this.state.password}
              onChange={this.handlePassChange} />
            <br /><br />
            <Button
              variant="contained"
              color="primary"
              component="span"
              onClick={this.handleLogin}>Submit</Button>
          </form>
          <br/><br/><br/><br/>
          
          
          
        </div>
        
        </div>
        
      </div>
      
    );
  }
}
export default LoginPage;