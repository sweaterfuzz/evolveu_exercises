class Person {
    constructor(name, age, bankAccnt,) {
      this.name = name;
      this.age = age;
      this.bankAccnt = bankAccnt;
    }

    birthday() {
        return this.age++;
    }

    payMe(amount) {
        this.bankAccnt += amount;
    }
}

class Farmer extends Person {
    constructor(name, age, bankAccnt) {
        super(name, age, bankAccnt); // call the super class constructor 
        this.amount = 100000;
        this.month = 1;
    }

    pay() {
        if (this.month % 12 === 0){
            this.payMe(this.amount);
        }
        this.month++;
    }
    
}

class FSD extends Person {
    constructor(name, age, bankAccnt) {
        super(name, age, bankAccnt); // call the super class constructor 
        this.amount = 5000;
    }

    pay() {
        this.payMe(this.amount);
    }
}

class Clerk extends Person {
    constructor(name, age, bankAccnt) {
        super(name, age, bankAccnt); // call the super class constructor 
        this.amount = 15;
        this.hoursPerMonth = 150;
    }

    pay() {   
        this.payMe(this.amount*this.hoursPerMonth);
    }
}

var people, jenny, craig, pat, sunny;

jenny = new Farmer('Jenny', 34, 0);
craig = new FSD('Craig', 24, 0);
pat = new Clerk('Pat', 52, 0);
sunny = new Farmer('Sunny', 45, 0);

people = [jenny, craig, pat, sunny];

for (var i=0; i<people.length; i++) {
    console.log(people[i]);
}

for (var month=1; month<37; month++) {
    for (var i=0; i<people.length; i++) {
        people[i].pay();
        if (month % 12 === 0) {
            people[i].birthday();
        }
    }
}

for (var i=0; i<people.length; i++) {
    console.log(people[i]);
}