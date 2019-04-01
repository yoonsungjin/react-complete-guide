import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons :[
      { id: 'aaa1', name: 'Max', age: '28'},
      { id: 'aaa2', name: 'Nanny', age: '33'},
      { id: 'aaa3', name: 'Stepanie', age: '20'}
    ],
    otherstate : 'be quiet',
    showState: false
  };

  onChangeHandler = (event, id) => {
    //get index
    const personsIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //get person with index
    const person = {...this.state.persons[personsIndex]};

    //apply event.target.value
    person.name = event.target.value; 

    //mutate persons
    const persons = [...this.state.persons];
    persons[personsIndex] = person;

    //setStatus
    this.setState({persons : persons});
  }

  deletePersonHanlder = (index) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  toggleNameHandler = () => {
    const doesShow = !this.state.showState;
    this.setState({showState: doesShow});
  }

  render() {
    let persons = null;
    let btnClass = '';

    if(this.state.showState){ 
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHanlder}
            changed={this.onChangeHandler}
          />
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

return (
        <div className={classes.App}>
          <h1>This is a React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p> 
          <button className={btnClass} onClick={this.toggleNameHandler}>toggle Name</button>
          {persons}
        </div>
    );
  }
}

export default App;
