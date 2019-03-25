import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons :[
      { name: 'Tom', age: '12'},
      { name: 'Bom', age: '11'},
      { name: 'Com', age: '11'}
    ],
    otherstate : 'be quiet',
    showState: false
  };

  changeNameHandler = (myname) => {
    this.setState({
      persons :[
        { name: myname, age: '22'},
        { name: 'Fax', age: '21'},
        { name: 'Tax', age: '21'}
      ]
      });
  };

  onChangeHandler = (event) => {
    this.setState({
      persons :[
        { name: 'Fax', age: '22'},
        { name: event.target.value, age: '21'},
        { name: 'Tax', age: '21'}
      ]
      });
  };

  toggleNameHandler = () => {
    const doesShow = !this.state.showState;
    this.setState({showState: doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'White',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      margin: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showState){ 
      persons = (
      <div>
        {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age}/>
          }
        )};
        </div>
      );

    }

    return (
      <div className="App">
        <button style={style} onClick={this.toggleNameHandler}>toggle Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
