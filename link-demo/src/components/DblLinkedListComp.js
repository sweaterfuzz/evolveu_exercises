import React, { Component } from 'react';
import LL from './DblLinkedList';

class DblLinkedListComp extends Component {

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
        let currPlace = this.state.placeInLL;
        if (currPlace < this.listLength()) {
            let newVal = this.ll.getNextVal(currPlace).nodeVal;
            let newPlace = currPlace + 1;
            this.setState({displayVal:newVal});
            this.setState({placeInLL:newPlace});
        }
        
    }

    onGoBack = () => {
        let currPlace = this.state.placeInLL;
        if (currPlace > 1) {
            let newVal = this.ll.getPrevVal(currPlace).nodeVal;
            let newPlace = currPlace - 1;
            this.setState({displayVal:newVal});
            this.setState({placeInLL:newPlace});
        }
    }

    goToFirst = () => {
        let goalStr = "No node selected";
        if (this.ll) {
            let goal = 1;
            goalStr = this.ll.traverseTo(goal).nodeVal;
            this.setState({displayVal:goalStr});
            this.setState({placeInLL:goal});
        } 
        return goalStr;
    }

    goToLast = () => {
        let goalStr = "";
        if (this.ll) {
            let goal = this.listLength();
            goalStr = this.ll.traverseTo(goal).nodeVal;
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

    render() {
        return (
        <div className="linkedList"> 
        <h2> Double Linked List Fun!</h2>

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

        <p>Current node value: {this.state.displayVal}, {this.state.placeInLL}</p>
        </div>

        );
    }
}

export default DblLinkedListComp;