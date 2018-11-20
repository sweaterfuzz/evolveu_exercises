import React, { Component } from 'react';
import LinkedListComp from './components/LinkedListComp'

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
      </div>
    );
  }
}

export default App;
