import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';
import Async from 'react-code-splitting';


const Welcome = props => (
  <Async load={import('../Views/Welcome/Welcome')} componentProps={props} />
)


const Login = props => (
  <Async load={import('../Views/LoginPage/Login')} componentProps={props} />
)

const Signup = props => (
    <Async load={import('../Views/Signup/Signup')} componentProps={props} />
  )

const DealerHome = props => (
    <Async load={import('../Views/DealerHomePage/DealerHome')} componentProps={props} />
)

const BankHome = props => (
  <Async load={import('../Views/BankHomePage/BankHome')} componentProps={props} />
)

const OEMHome = props => (
  <Async load={import('../Views/OEMHomePage /OEMHome')} componentProps={props} />
)

const RaisePO = props => (
    <Async load={import('../Views/RaisePO/RaisePO')} componentProps={props} />
)

const HomeHeader = props => (
  <Async load={import('../Views/Header/HomeHeader')} componentProps={props} />
)

const Get = props => (
  <Async load={import('../Views/Get/Get')} componentProps={props}  />
)

const Delete = props => (
  <Async load={import('../Views/Delete/Delete')} componentProps={props} />
)


const routes = (
  <div>
    <Switch>
      <Redirect exact from="/" to="/Login" />
      <Route exact path="/Welcome" component={Welcome} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Signup" component={Signup} /> 
      <Route exact path="/DealerHome" component={DealerHome} /> 
      <Route exact path="/BankHome" component={BankHome} /> 
      <Route exact path="/OEMHome" component={OEMHome} />
      <Route exact path="/RaisePO" component={RaisePO} /> 
      <Route exact path="/HomeHeader" component={HomeHeader} />
      <Route exact path="/Get" component={Get} />
      <Route exact path="/Delete" component={Delete} /> 

       
    </Switch>
  </div>
);

export default routes; 
