import React, { Component } from 'react';
import LL from './linkedList2'

class LinkedListComp extends Component {

    constructor() {
        super();
        this.ll = null;
        this.state = {
            count : this.listLength(),
            allNodes: this.showAllNodes(),
            placeInLL: 0,
            displayVal: " "
        }
    }

    createLL = () => {
        let llHeadName = document.getElementById('newLL').value;
        this.ll = new LL.LinkList(llHeadName);
        this.setState({count: this.listLength()});    
        this.setState({allNodes:this.showAllNodes()});
    }


    onNewNode = () => {
        let val = document.getElementById("newNV").value;
        if (this.ll) {
            this.ll.add(val);
            this.setState({count: this.listLength()});    
            this.setState({allNodes:this.showAllNodes()});
        }
    }

    onGoForward = () => {
        let nextPlace = this.state.placeInLL;
        nextPlace++;
        if (nextPlace <= this.state.count) {
            this.setState({displayVal:this.ll.traverseTo(nextPlace)});
            this.setState({placeInLL:nextPlace});
        }
        
    }

    onGoBack = () => {
        let nextPlace = this.state.placeInLL;
        nextPlace--;
        if (nextPlace >= 0) {
            this.setState({displayVal:this.ll.traverseTo(nextPlace)});
            this.setState({placeInLL:nextPlace});
        }
    }

    goToFirst = () => {
        let goalStr = "No node selected";
        if (this.ll) {
            let goal = 1;
            goalStr = this.ll.traverseTo(goal);
            this.setState({displayVal:goalStr});
            this.setState({placeInLL:goal});
        } 
        return goalStr;
    }

    goToLast = () => {
        let goalStr = "";
        if (this.ll) {
            let goal = this.listLength();
            goalStr = this.ll.traverseTo(goal);
            this.setState({displayVal:goalStr});
            this.setState({placeInLL:goal});
        } 
        return goalStr;
    }

    showAllNodes = () => {
        let nodeStr = " ";
        if (this.ll) {
            nodeStr = this.ll.show();
        } else {
            nodeStr = "Please create a new linked list"
        }
        return nodeStr;
    }

    listLength = () => {
        let listNum = 0;
        if (this.ll) {
            listNum = this.ll.lengthLL();
        }
        return listNum;
    }

    removeNode = () => {
        let nodeNum = parseInt(document.getElementById("delNode").value);
        let newList = "";
        if (this.ll) {
            newList = this.ll.remove(nodeNum);
            this.setState({allNodes:this.ll.show()});
            this.setState({count:this.ll.lengthLL()});
        }
    }

    insertNode = () => {
        let nodeNum = parseInt(document.getElementById("insertNodePl").value);
        let nodeVal = document.getElementById("insertNodeVal").value;
        let newList = "";
        if (this.ll) {
            newList = this.ll.insert(nodeNum, nodeVal);
            this.setState({allNodes:this.ll.show()});
            this.setState({count:this.ll.lengthLL()});
        }
    }
    

    render() {
        return (
        <div className="linkedList"> 
        <p> {this.props.name} </p>

        <input type='text' id='newLL'></input> 
        <button onClick={this.createLL}> Create Linked List</button> <br></br>

        <input type='text' id='newNV'></input>
        <button onClick={this.onNewNode}> Add New Node </button>

        <p> You have {this.state.count} nodes right now: <br></br>
            <em>{this.state.allNodes}</em> <br></br>
        </p>

        <h2>Traverse the list</h2>
        <button onClick={this.goToFirst}> Go to First </button>
        <button onClick={this.goToLast}> Go to Last </button> <br></br>
        <button onClick={this.onGoForward}> Go Forward </button>
        <button onClick={this.onGoBack}> Go Back </button> <br></br>
        
        <br></br>
        <button onClick={this.removeNode}> Remove node #</button> 
        <input type='text' id='delNode'></input>  <br></br>

        <br></br>
        Insert a new node at: 
        <input type='text' id='insertNodePl'></input> <br></br>
        with value: 
        <input type='text' id='insertNodeVal'></input>  
        <button onClick={this.insertNode}>Insert</button>

        <p>Current node value: {this.state.displayVal}</p>
        </div>

        );
    }
}

export default LinkedListComp;