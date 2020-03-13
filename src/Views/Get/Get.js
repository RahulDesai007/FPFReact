import React, { Component } from 'react';
import './Get.css';
import HomeHeader from '../Header/HomeHeader'
import Footer from '../Footer/Footer'
import axios from 'axios'
import swal from 'sweetalert';
import Button from '@material-ui/core/Button';
import SweetAlert from 'react-bootstrap-sweetalert';
var data = [];
var index
var token
var value
const display = {
    display: 'block'
  };
  const hide = {
    display: 'none'
  };
class HomePage extends Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
            data ,
            value : '',
            toggle: false,
            title: ['Name', 'Age', 'Place', 'Gender'],
            readMore_alert: null
        };


    }
    toggle(event) {
        this.setState((prevState) => ({
          toggle: !prevState.toggle
        }));
      }
    onPost = (token) => {
        this.props.history.push('/Post')
    }

    onGet = () => {
        alert("You are already in get page")
    }

    onPostHome = (token) => {
        this.props.history.push('/Home')
    }

    onlogout = () => {
        this.props.history.push('/Login')
    }

    onDelete = (token) => {
        this.props.history.push('/Delete')
    }
    handleTableData = (personIndex, Value) => {
      console.log("Index---->", personIndex, Value )
      this.setState(
        {value :  Value}
        )
      const getAlert = () => (
<SweetAlert>
      <h1>{this.state.value}</h1>
</SweetAlert> 
      )
      this.setState({ readMore_alert: getAlert() });
      }
    
    componentDidMount() {

        axios.get('http://localhost:8000/route/posts', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'authorization' : token
            },
        })
            .then((responseJson) => {
                console.log("This is my response Json", responseJson.data)
                console.log("Get Data------>>>", responseJson.data.posts)
                //  var token = responseJson.data.token;
                // var message = responseJson.message;
                // var userId = responseJson.data.userId;
                this.setState(
                {data :  responseJson.data.posts}
                )
                console.log("data", data)
               
                var message = responseJson.data.message;
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
                    title: "Session Expired",
                    text: "Please Loging Again",
                    icon: "warning",
                    timer: 5000,
                    button: false
                  })
            });
    }




    renderTableHeader() {
        var header = ['Name']
        console.log("header---->", header)
        return header.map((header) => {
            return <th>{header}</th>
        })
    }

    renderTableData() {
        return this.state.data.map((data, index) => {
            console.log("Index--->", index)
            const { name, age, place, gender } = data //destructuring
            return (
                <tr>
                    <td style={{cursor:'pointer'}} onClick={() => this.handleTableData(index, data)}>{name}</td>
                    {/* <td>{age}</td>
                    <td>{place}</td>
                    <td>{gender}</td> */}
                </tr>
            )
        })
    }

    render() {
        // NOTE: I use data-attributes for easier E2E testing
        // but you don't need to target those (any css-selector will work)
   
        return (
            
            <div >
                
                <HomeHeader
                    click={() => this.onPost(token)}
                    clickhome={() => this.onPostHome(token)}
                    clickget={() => this.onGet()}
                    clickdelete={() => this.onDelete(token)}
                    logout={() => this.onlogout()} />
                <div>
                   
                    <h1 id='title' >Get Data</h1>
                    <table id='students'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
                <div>
                {this.state.readMore_alert}
      
      </div>
                
                <Footer />
            </div>
        );
    }
}
export default HomePage;