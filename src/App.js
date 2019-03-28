import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'Green',
      color: 'White',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      margin: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightGreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showState){ 
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
              return <Person 
                          click={() => this.deletePersonHanlder(index)}
                          name={person.name} 
                          age={person.age}
                          key={person.id}
                          changed={(event) => this.onChangeHandler(event, person.id)}/>
            }
          )}
        </div>
      );
      style.backgroundColor = 'Red';


    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }



    return (
        <div className="App">
          <h1>This is a React App</h1>
          <p className={classes.join(' ')}>This is really working</p> 
          <button style={style} onClick={this.toggleNameHandler}>toggle Name</button>
          {persons}
        </div>
    );
  }
}

export default App;
