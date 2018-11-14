import React, { Component } from 'react';
import LL from './linkedList2'

class LinkedList extends Component {

    onNewNode(e) {
        console.log('onNewNode',e);
        let val = document.getElementById("newNV").value;
        console.log('Value: ', val);
        let newList = new LL.LinkList(val);
        console.log('linked list: ', newList.show());
        newList.add('second node');
        console.log('linked list after add: ', newList.show());
    }

    render() {
        return (
        <div className="linkedList"> 
        hello from linked list component <br/>
        <button onClick={this.onNewNode}> New Node </button>
        <input type='text' id='newNV'></input>
        </div>
        );
    }
}

export default LinkedList;