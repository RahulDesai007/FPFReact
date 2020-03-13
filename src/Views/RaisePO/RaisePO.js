import React, { Component } from 'react';
import './Post.css';
import HomeHeader from '../Header/HomeHeader'
import Footer from '../Footer/Footer'
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import swal from 'sweetalert';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
var token
class Post extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            place: '',
            gender: '',
            error: '',
        };
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePlaceChange = this.handlePlaceChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
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
    handleAgeChange(evt) {
        this.setState({
            age: evt.target.value,
        });
    };

    handlePlaceChange(evt) {
        this.setState({
            place: evt.target.value,
        });
    }

    handleGenderChange(evt) {
        this.setState({
            gender: evt.target.value,
        });
    }

    onSubmitPost = () => {
        console.log("Calling Ajax function.....")
        console.log(this.state.name)
        const post = {
            name: this.state.name,
            age: this.state.age,
            place: this.state.place,
            gender: this.state.gender,
        };
        axios.post('http://localhost:8000/route/posts', post, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
               // 'authorization' : token
                
            },
        })
            .then((responseJson) => {
                console.log("This is my response Json", responseJson.data)
                //  var token = responseJson.data.token;
                // var message = responseJson.message;
                // var userId = responseJson.data.userId;
                var message = responseJson.data.message;
                if (message === "Post created successfully!") {
                    swal({
                        title: "Sucess",
                        text: "You have Sucessfully Posted Your Data",
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
                    title: "Post Data Failure",
                    text: "Data Not Posted",
                    icon: "warning",
                    timer: 3000,
                    button: false
                  })
            });
    }
    handleRegister = () => {
        this.props.history.push('/Signup')
    }
    onPost = () => {
        alert("You are already in Post page")
    }
    onPostHome = (token) => {
        this.props.history.push('/Home', {token:token})
    }
    onGet = (token) => {
        this.props.history.push('/Get',{token:token})
    }

    onDelete = (token) => {
        this.props.history.push('/Delete', {token:token})
    }

    onlogout = () => {
        this.props.history.push('/Logout')
    }


    render() {
        // token = this.props.location.state.token
        // console.log("Post Token---->", token)
        // NOTE: I use data-attributes for easier E2E testing
        // but you don't need to target those (any css-selector will work)
        return (
            <div >
                <HomeHeader
                    click={() => this.onPost()}
                    clickhome={() => this.onPostHome(token)}
                    clickget={() => this.onGet(token)}
                    clickdelete={() => this.onDelete(token)}
                    logout={() => this.onlogout()} />
                <div className="Post" >
                    <h2>Raise P/O form</h2>
                        <TextField
                            id="outlined-basic"
                            label="PO ID"
                            variant="outlined"
                            value={this.state.name}
                            onChange={this.handleNameChange} />
                        <br /><br />
                        <TextField
                            id="outlined-basic"
                            label="Model"
                            variant="outlined"
                            value={this.state.age}
                            onChange={this.handleAgeChange} 
                            style={{alignleft: '39px'}}/>
                        <br /><br />
                        <TextField
                            id="outlined-basic"
                            label="Varient"
                            variant="outlined"
                            value={this.state.place}
                            onChange={this.handlePlaceChange} />
                        <br /><br />
                        <TextField
                            id="outlined-basic"
                            label="Color"
                            variant="outlined"
                            value={this.state.place}
                            onChange={this.handlePlaceChange} />
                        
                        <br /><br />

                        <TextField
                            id="outlined-basic"
                            label="Capacity"
                            variant="outlined"
                            value={this.state.place}
                            onChange={this.handlePlaceChange} />
                    
                    <br /><br />

                    <Button
                        variant="contained"
                        color="primary"
                        component="span"
                        onClick={this.onSubmitPost} >Submit</Button>
                </div>
                {/* <Footer /> */}
            </div>
        );
    }
}
export default Post;