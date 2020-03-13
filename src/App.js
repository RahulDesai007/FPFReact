import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Radium from 'radium'
import Person from './Views/Person/Person'
import Select from '@material-ui/core/Select';



class App extends Component {
  state = {
    persons : [
      { name : 'Rahul', place : 'Panvel' , id : '22'}, 
      { name : 'Test', place : 'Banglore', id : '11' },
      { name : 'Ram', place : 'Mulund', id : '90' }
    ],
    showPersons : false
  }

  deletePersonHandler = (personIndex) => {
    console.log("delete button clicked.......")
    const persons = this.state.persons;
    persons.push(personIndex, 1); //this removes 1 element from array
    this.setState({persons : persons})  // setting old state to the new Person state
  }

  nameChangedHandler = (event, id) => {
    console.log("printing events------->>>", id)
   const personIndex = this.state.persons.findIndex(p => {     //find element in array by Index
     return p.id === id
   })
    
   const person = {
     ...this.state.persons[personIndex]
     
   };
 
   person.name = event.target.value;

   const persons = this.state.persons;
   persons[personIndex] = person;

 this.setState({ persons : persons })
  }
  togglePersonsHandler = () => {
    console.log("printing events------->>>")
    const doesShow = this.state.showPersons; // false
    this.setState( { showPersons: !doesShow } ); //it will set to !false which is true
    console.log("comming to line 49")
    //this.setState( { showPersons: !doesShow } );
  }

  render() {
    const style = {
      backgroundColor : 'green',
      color : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding : '8px', 
      boxShadow: '0 2px 3px rgb(73, 10, 219)', 
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen'
      }
    }
     let persons = null;
    if (this.state.showPersons === true){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
         return<Person 
        click={() => this.deletePersonHandler(index)}
        name={person.name} 
        place={person.place}
        id={person.id}
        changed = {(event) => this.nameChangedHandler(event, person.id)} 
        />
        
          })}
      
        
        </div>
      )
        style.backgroundColor = 'red'    //changing it to red when if condation will be true       
        style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
        };
      }
    
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //class will turn to red
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

  return (
    <div className="App">
      <h1>CURD Test</h1>
      <p className={classes.join(' ')}>This is really Working</p>
      <button 
      style={style}
      onClick={this.togglePersonsHandler} >Switch Button</button>
      {persons}

    <Select
                            native
                            data-test="gender"
                            value={this.state.gender}
                            onChange={this.handleGenderChange}

                        >
                            <option value="" />
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Select>
    </div>
  );
}

}

export default Radium(App);
