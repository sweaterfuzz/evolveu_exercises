class Friends {
    constructor() {
        this.friends = [];
    }

    addFriend = (name, age, activity) => {
        this.friends.push(new People(name,age,activity));
        return this.listFriends();
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
        return this.listFriends();
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
}


class People {
    constructor(name,age,activities) {
        this.name = name;
        this.age = age;
        this.activities = activities;
    }

    show() {
        return this.name + ", " + this.age + ", " + this.activities;
    }

    birthday() {
        this.age++
        return this.age;
    }
}


export default {People, Friends};