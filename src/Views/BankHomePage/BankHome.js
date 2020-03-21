import React, { Component } from 'react';
import moment from 'moment';

import './Home.css';
import HomeHeader from '../Header/HomeHeader'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import WorkIcon from '@material-ui/icons/Work';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
//import DashboardNav from '../Header/dashbordNav';
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
        {/* <DashboardNav/> */}
        <HomeHeader
          click={() => this.onPost()}
          clickhome={() => this.onPostHome()}
          clickget={() => this.onGet()}
          clickdelete={() => this.onDelete()}
          logout={() => this.onlogout()}
        />
        {/* <h1 className="Home">This is Bank Dashbord</h1> */}
        <div >
          
          <div className="dashboard-card">
            <div>
              <div>

              </div>
              <div>
              <AssignmentIndIcon  style={{ fontSize: 50 }}/>
                <div><h2  style={{ marginTop:-5 }}>Dealer 1</h2></div>
                <div style={{ marginTop: -18 , marginRight : 300 }}>
                <h4>Total Credit</h4>
                <a style={{ fontSize: 30 }}>100</a>
                </div>
                <div style={{ marginTop: -100 , marginRight : -12 }}>
                <h4>Available Credit</h4>
                <a style={{ fontSize: 30 }}>30</a>
                </div>
                <div style={{ marginTop: -100 , marginRight : -300 }}>
                <h4>Credit Score</h4>
                <a style={{ fontSize: 30 }}>30%</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div className="dashboard1-card">
            <div>
              <div>
              <AssignmentIndIcon  style={{ fontSize: 50 }}/>
                <div><h2  style={{ marginTop:-5 }}>Dealer 2</h2></div>
                <div style={{ marginTop: -18 , marginRight : 300 }}>
                <h4>Total Credit</h4>
                <a style={{ fontSize: 30 }}> 130</a>
                </div>
                <div style={{ marginTop: -100 , marginRight : -12 }}>
                <h4>Available Credit</h4>
                <a style={{ fontSize: 30 }}>50</a>
                </div>
                <div style={{ marginTop: -100 , marginRight : -300 }}>
                <h4>Credit Score</h4>
                <a style={{ fontSize: 30 }}>40%</a>
                </div>
              
              </div>
              <div >
              </div>
        </div>
        <div className="pogen-card">
            <div>
              <div>

              </div>
              <div>
              <WorkIcon  style={{ fontSize: 50 }}/>
                <div><h2  style={{ marginTop:-5 }}>Purchase Order's</h2></div>
                <div style={{ marginTop: -18 , marginRight : 250 }}>
                <h4>Generated</h4>
                    <a style={{ fontSize: 30 }}>200</a>
                </div>
                <div style={{ marginTop: -100 , marginRight : 30 }}>
                <h4>Recieved</h4>
                <a style={{ fontSize: 30}}>30</a>
                </div>
                <div style={{ marginTop: -100 , marginRight : -210 }}>
                <h4>Inventry Ageing</h4>
                <a style={{ fontSize: 30}}>10</a>
                </div>
              </div>
            </div>
          </div>
          <div className="loangen-card">
            <div>
              <div>

              </div>
              <div>
              <AccountBalanceIcon  style={{ fontSize: 50 }}/>
                <div><h3  style={{ marginTop:-5 }}>Total Number of Loans Issued</h3></div>
                <div style={{ marginTop: -18 , marginRight : -10 ,fontSize: 50 }}>
                 520
                </div>
              </div>
            </div>
          </div>

          <div className="loangen-card">
            <div>
              <div>

              </div>
              <div>
              <AccountBalanceIcon  style={{ fontSize: 50 }}/>
                <div><h3  style={{ marginTop:-5 }}>Total Number of Loans Issued</h3></div>
                <div style={{ marginTop: -18 , marginRight : -10 ,fontSize: 50 }}>
                 520
                </div>
              </div>
            </div>
          </div>
          <div className="calender-card">
            <div>
              <div>
              <CalendarTodayIcon style={{ fontSize: 50 }}/>

              </div>
              <div>
              <div><h1  style={{ marginTop: 5, fontSize: 25,  }}>{moment().format('dddd')}</h1></div>
               
              <div><a  style={{ marginTop: 100 , fontSize: 60 ,  marginRight : 180 }}>{moment().format('D')}</a></div>
                  
              <div><h2  style={{ marginTop: -60 ,fontSize: 30, marginRight : -100 }}>{moment().format('MMMM, YYYY')}</h2></div>
                
              </div>
            </div>
          </div>
        </div>
        
        </div>
          
          
        

      


        
              <Footer
              style={{ height : 10}}/>
            
         
        </div>
      
      
      
      
    );
  }
}
export default HomePage;