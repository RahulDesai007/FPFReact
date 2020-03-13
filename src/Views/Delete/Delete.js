import React, { Component } from 'react';
import './Delete.css';
import HomeHeader from '../Header/HomeHeader'
import Footer from '../Footer/Footer'
import axios from 'axios'
import Select from '@material-ui/core/Select';
import swal from 'sweetalert';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
var token
class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            name: '',

        };
        this.handleNameChange = this.handleNameChange.bind(this);
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
    handleNameChange(evt) {
        this.setState({
            name: evt.target.value,
        });
    };

    onSubmitDelete = () => {
        console.log("Calling Ajax function.....")
        console.log(this.state.name)
        const post = {
            name: this.state.name,
        };
        axios.post('http://localhost:8000/route/delete', post, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
        })
            .then((responseJson) => {
                console.log("This is my response Json", responseJson.data)
                //  var token = responseJson.data.token;
                // var message = responseJson.message;
                // var userId = responseJson.data.userId;
                var message = responseJson.data.message;
                if (message === "Deleted Post Sucessfully..") {
                    swal({
                        title: "Sucess",
                        text: "You have Sucessfully Deleted the Data",
                        icon: "success",
                        timer: 3000,
                        button: false
                      })
                    this.props.history.push('/Home', {token:token})
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
                    title: "Failure",
                    text: "Cannot Delete Data",
                    icon: "warning",
                    timer: 3000,
                    button: false
                  })
            });
    }

    onDelete = () => {
        alert ("You are already inside Delete Page")
    }
    handleRegister = () => {
        this.props.history.push('/Signup')
    }
    onPost = (token) => {
        this.props.history.push('/Post', {token:token})
    }
    onPostHome = (token) => {
        this.props.history.push('/Home', {token:token})
    }
    onGet = (token) => {
        this.props.history.push('/Get',{token:token})
    }
    onlogout = () => {
        this.props.history.push('/Login')
    }

    render() {
        token = this.props.location.state.token
        console.log("Delete Token", token)
        // NOTE: I use data-attributes for easier E2E testing
        // but you don't need to target those (any css-selector will work)
        return (
            <div >
                <HomeHeader
                    click={() => this.onPost(token)}
                    clickhome={() => this.onPostHome(token)}
                    clickget={() => this.onGet(token)}
                    clickdelete={() => this.onDelete()}
                    logout={() => this.onlogout()} />
                <h4 className="Delete" >
                    <h2>Delete Data Form</h2>
                    <TextField
                       id="outlined-basic"
                       label="Enter Name"
                       variant="outlined"
                        value={this.state.name}
                        onChange={this.handleNameChange} />
                    <br /><br />
                    <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        onClick={this.onSubmitDelete} >Delete</Button>
                </h4>
                <Footer />
            </div>
        );
    }
}
export default HomePage;