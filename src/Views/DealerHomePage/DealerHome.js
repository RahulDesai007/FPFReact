import React, { Component } from 'react';
import './Home.css';
import HomeHeader from '../Header/HomeHeader'
import Footer from '../Footer/Footer'
import axios from 'axios'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
class HomePage extends Component {
constructor() {
super();
this.state = {
username: 'rahdesai7@gmail.com',
password: 'Rpqb@123',
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
  this.props.history.push('/Signup')
}
onPost = () => {

  this.props.history.push('/RaisePO')
}

onDelete = () => {
  this.props.history.push('/Delete')
}

onGet = () => {
  console.log("onGetToken----->")
  this.props.history.push('/Get')
}

onlogout = () => {
  this.props.history.push('/login')
}
onPostHome = () => {
 alert("You are already in Home Page")
}

render() {
// NOTE: I use data-attributes for easier E2E testing
// but you don't need to target those (any css-selector will work)
return (
  
  <div >
  <HomeHeader 
  click={() => this.onPost()} 
  clickhome={() => this.onPostHome()}
  clickget={() => this.onGet()}
  clickdelete={() => this.onDelete()}
  logout={() => this.onlogout()} 
  />
<h1 className="Home">This is Dealer Dashbord</h1>

<Footer/>
</div>
);
}
}
export default HomePage;