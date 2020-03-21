// import React from 'react';
// import Logo from '../../assets/images/vytal-nav-logo.png';
// import UserStore from '../../common/user-store';
// import { getAllPatient } from '../../services/patient-service';
// import { Combobox } from 'react-widgets';
// import { Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import _ from 'lodash';

// import SearchableSelect from '../SearchableSelect';
// export default class DashboardNav extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       patients: [],
//       filteredpatients: [],
//       filtername: '',
//       searchPatientValue: ''
//     };
//   }
// //   filterColors = inputValue => {
// //     return colourOptions.filter(i =>
// //       i.label.toLowerCase().includes(inputValue.toLowerCase())
// //     );
// //   };

//   onNewPatientSearchFetchHandler = inputValue => {
//     if (!inputValue) {
//       return Promise.resolve([]);
//     }
//     return getAllPatient({ fullname: inputValue })
//       .then(response => {
//         let patients = response.data.message.data.map(patient => {
//           patient.name =
//             patient.firstname + ' ' + patient.lastname + ' ' + patient.phone;
//           patient.label = patient.name;
//           patient.value = patient._id;
//           return patient;
//         });
//         this.setState({ filteredpatients: patients });
//         return patients;
//       })
//       .catch(function(error) {
//         return [];
//       });
//   };

//   onPatientSearchchangeHandler = value => {
//     if (value) {
//       this.props.parentProps.history.push(`/patient-profile/${value._id}`);
//     }
//   };

//   toggleSidebar = e => {
//     let isOpen = $('#leftsidebar').hasClass('sidebar-collapse');
//     if (isOpen) {
//       $('#leftsidebar').removeClass('sidebar-collapse');
//       $('.dashnavbar').removeClass('sidebar-collapse');
//       $('.theme-cyan > .content').removeClass('sidebar-collapse');
//     } else {
//       $('#leftsidebar').addClass('sidebar-collapse');
//       $('.dashnavbar').addClass('sidebar-collapse');
//       $('.theme-cyan > .content').addClass('sidebar-collapse');
//     }
//   };

//   onSearchInputChange = value => {
//     this.setState({ searchPatientValue: value });
//   };
//   render() {
//     let patients = this.state.patients;
//     let ListItem = ({ item }) => {
//       var fullname = item.firstname + ' ' + item.lastname + ' ' + item.phone;
//       return (
//         <span>
//           <strong>{fullname}</strong>
//         </span>
//       );
//     };
//     return (
//       <nav className="navbar p-l-5 p-r-5 dashnavbar">
//         <ul className="nav navbar-nav navbar-left">
//           <li>
//             <a href="javascript:void(0);" className="d-xl-none" data-close="true" onClick={this.toggleSidebar}>
//             <i className="fa fa-bars"></i></a>
//           </li>
//           <li>
//             <div className="navbar-header">
//               <a href="javascript:void(0);" className="bars" />
//               <Link to="/dashboard" className="navbar-brand">
//                 <img src={Logo} width="70" alt="Vytal" />
//                 <span className="m-l-10">Connect</span>
//               </Link>
//             </div>
//           </li>
//           <li>
//             <a href="javascript:void(0);" className="ls-toggle-btn" data-close="true" onClick={this.toggleSidebar}>
//                             <i className="zmdi zmdi-swap" title="Maximize screen"></i></a>
                
//           </li>
//           <li className="dropdown" style={{ display: 'none' }}>
//             <a
//               href="javascript:void(0);"
//               className="dropdown-toggle"
//               data-toggle="dropdown"
//               role="button"
//             >
//               <i className="zmdi zmdi-notifications" />
//               <div className="notify">
//                 <span className="heartbit" />
//                 <span className="point" />
//               </div>
//             </a>
//           </li>
//           <li className="dropdown" style={{ display: 'none' }}>
//             {' '}
//             <a
//               href="javascript:void(0);"
//               className="dropdown-toggle"
//               data-toggle="dropdown"
//               role="button"
//             >
//               <i className="zmdi zmdi-flag" />
//             </a>
//           </li>

//           <li>
//             <Link to={`/doctor-event`}>
//               <i className="zmdi zmdi-calendar" title="View Schedule"/>
//             </Link>
//           </li>
//           <li>
//             <Link to={`/contact`}>
//               <i className="zmdi zmdi-account-box-phone" title="View/Add Business Contacts"/>
//             </Link>
//           </li>
//           <li className="hidden-sm-down">
//             <div className="input-group">
//               <div className="" style={{ width: '250px' }}>
//                 <SearchableSelect
//                   promiseOptions={this.onNewPatientSearchFetchHandler}
//                   onChange={this.onPatientSearchchangeHandler}
//                   placeholder="Search Patient"
//                   inputValue={this.state.searchPatientValue}
//                   onInputChange={this.onSearchInputChange}
//                   isClearable={true}
//                   className="hide-arrow"
//                 />
//               </div>
//             </div>
//           </li>
//           {/* <li className="hidden-sm-down">
//             <div className="input-group">
//               <Combobox
//                 busy
//                 busySpinner={<span className="fa fa-search" />}
//                 placeholder="Search Patient..."
//                 name="firstname"
//                 data={patients}
//                 caseSensitive={false}
//                 onSelect={value => {
//                   this.props.parentProps.history.push(
//                     `/patient-profile/${value._id}`
//                   );
//                 }}
//                 minLength={3}
//                 filter="contains"
//                 itemComponent={ListItem}
//                 textField="firstname"
//                 valueField="_id"
//                 value={this.state.firstname}
//                 onChange={value => {
//                   this.setState({ firstname: value });
//                 }}
//               />
//             </div>
//           </li> */}
//           <li className="float-right switch-icon-wrapper">
//             <a
//               href="/"
//               className="mega-menu"
//               onClick={UserStore.logout}
//               data-close="true"
//             >
//               <i className="zmdi zmdi-power" />
//             </a>
//           </li>
//         </ul>
//       </nav>
//     );
//   }
// }
