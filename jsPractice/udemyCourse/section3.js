///////////////////////////////////////
// Lecture: Hoisting

calcAge(1991);

function calcAge(year) {
    console.log(2018-year);
};

//retire(1990);

var retire = function(year) {
    console.log(65 - (2018-year));
};

// variables: scope and hoisting

console.log(age); //undefined error - age is created in memory but not defined yet
var age = 23;
console.log(age);

function dummy() {
    var age = 65;
    console.log(age);
};
dummy();
console.log(age);


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// console.log(this); // default 'this' is the window object.

dummyFunc(3);
function dummyFunc(num) {
    console.log(2018 - num);
    console.log(this); // still window object
};

var bunny = {
    name: 'fluffy',
    age: 5,
    calcBunny: function() {
        console.log(this);
        console.log(2018 - this.age);

        // function innerFunction() {
        //     console.log(this); // reverts 'this' to window object
        // }
        // innerFunction();
    }
};

bunny.calcBunny();

var kitty = {
    name: 'venn',
    age: 3,
};

// method borrowing:
kitty.calcKitty = bunny.calcBunny; // can be same method name to mimic inheritance
kitty.calcKitty();
