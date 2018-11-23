import React, { Component } from 'react';
import PPl from './people'

class PeopleComp extends Component {

    constructor() {
        super();
        this.friendlist = null;
        this.state = {
            count : 0,
            combinedAges: 0
        };
    }

    addFriend = () => {
        let name = document.getElementById('friendName').value;
        let age = parseInt(document.getElementById('friendAge').value);
        let activity = document.getElementById('friendActivity').value;
        let newFriend = new PPl.People(name,age,activity);

        if (this.friendlist === null) {
            this.friendlist = new PPl.Friends()
        }
        
        this.friendlist.addFriend(newFriend);
        
        //let numFriends = this.state.count + 1; 
        let numFriends = this.friendlist.friends.length;
        this.setState({count:numFriends});

        //let friendAges = this.state.combinedAges + age;
        let friendAges = this.friendlist.totalAge() + age;
        this.setState({combinedAges:friendAges});

        document.getElementById("friendList").innerHTML = this.friendlist.listFriends();
    }

    listFriends = () => {
        let allFriends = "";
        if (this.friends) {
            for (var f=0; f<this.friends.length ; f++) {
                allFriends += this.friends[f].show() + "<br>";
            }
        }
        return allFriends;
        
    }

    birthdays = () => {
        if (this.friends) {
            for (var f=0; f<this.friends.length ; f++) {
                this.friends[f].birthday();
            }
        }
        document.getElementById("friendList").innerHTML = this.listFriends();
        let newAges = this.totalAge();
        this.setState({combinedAges:newAges});
    }

    totalAge = () => {
        let ages = 0;
        if (this.friends) {
            for (var f=0; f<this.friends.length ; f++) {
                ages += this.friends[f].age;
            }
        }
        return ages;
    }

    render() {
        return (
        <div className="community"> 
        <h2>Hello from all my friends</h2>

        <FriendInfo passFriendInfo={this.addFriend}/> <br></br>

        You have {this.state.count} friends right now: <br></br>
        <p id="friendList"></p>
        <button onClick={this.birthdays}> It's everyone's birthdays!</button> <br></br>
        Their combined ages are now: {this.state.combinedAges} 
        </div>

        );
    }
}

class FriendInfo extends Component {
    render() {
        return (
            <div className="friendInfo">
            Name: <input type='text' id='friendName'></input><br></br>
            Age: <input type='text' id='friendAge'></input> <br></br>
            Favourite Activity: <input type='text' id='friendActivity'></input> <br></br>
            <button onClick={this.props.passFriendInfo}> Add a new friend</button> <br></br>
            </div>
        );
    }
}

export default PeopleComp;