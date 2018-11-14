import React, { Component } from 'react';
import LL from './linkedList';
import LinkedListComp from './components/LinkedListComp'
// import './App.css';

let linkedList = null;
function createLL() {
  linkedList = new LL.LinkList('Head');
  console.log(linkedList);
}

let nodeCounter = 0;
function addNode() {
  if (linkedList) {
    nodeCounter++;
    linkedList.add(nodeCounter);
    console.log(linkedList.show());
  } else {
    console.log('Please create a linked list first.');
  }
}


class App extends Component {
  render() {
    return (
      <div className="linkedListApp">
        <button onClick={createLL}>Create Linked List</button>
        <button onClick={addNode}>Add a node</button>
        <h1>This is my new beginning</h1>
        <LinkedListComp/>
      </div>
    );
  }
}

export default App;
