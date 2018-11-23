import React, { Component } from 'react';
import LinkedListComp from './components/LinkedListComp';
import PeopleComp from './components/peopleComp';

class App extends Component {

  onPassedFunction = () => {
    console.log("hello from the App function");
  }
  
  render() {
    return (
      <div className="linkedListApp">
        {/* <LinkedListComp name='Top' func={this.onPassedFunction}/> */}
        <h1>Linked List Demo</h1>
        <LinkedListComp name='props getting passed'/>
        <h1>Friends Demo</h1>
        <PeopleComp/>
      </div>
    );
  }
}

export default App;
