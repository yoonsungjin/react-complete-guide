import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons :[
      { id: 'aaa1', name: 'Max', age: '28'},
      { id: 'aaa2', name: 'Nanny', age: '33'},
      { id: 'aaa3', name: 'Stepanie', age: '20'}
    ],
    otherstate : 'be quiet',
    showPerson: false
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
    const doesShow = !this.state.showPerson;
    this.setState({showPerson: doesShow});
  }

  render() {
    let persons = null;

    if(this.state.showPerson){ 
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHanlder}
            changed={this.onChangeHandler}
          />
        </div>
      );
    }
    return (
            <div className={classes.App}>
              <Cockpit 
                showPersons={this.state.showPersons}
                persons={this.state.persons} 
                clicked={this.toggleNameHandler} />
              {persons}
            </div>
        );
  }
}

export default App;
