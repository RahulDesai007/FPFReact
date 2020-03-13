import React, { Component } from 'react';
import './Home.css';
import HomeHeader from '../Header/HomeHeader'
import Footer from '../Footer/Footer'
import axios from 'axios'
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

  this.props.history.push('/Post')
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
<h1 className="Home">This is OEM Dashbord</h1>
<Footer/>
</div>
);
}
}
export default HomePage;