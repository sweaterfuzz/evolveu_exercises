// Function constructor

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        console.log(2018-this.yearOfBirth);
    };
}

// alternate way to assign a method to a constructor
Person.prototype.youngerAge = function() {
    console.log(2014-this.yearOfBirth);
};

// assign a common piece of data to all instances:
Person.prototype.lastName = 'Newman';

var kate = new Person('Kate', 1982, 'programmer');

kate.calculateAge();
kate.youngerAge();
console.log(kate.lastName);


// object.create - allows for more complex inheritance 

var petProto = {
    calculateAge: function(){
        console.log(2018-this.yearOfBirth);
    }
};

var kitty = Object.create(petProto);
kitty.name = 'boots';
kitty.yearOfBirth = 2008;
kitty.sound = 'meow';

// or attributes can be assigned this way:
var puppy = Object.create(petProto, 
    {
        name: {value: 'patches'},
        yearOfBirth: {value: 2013},
        sound: {value: 'woof'}
    });


// functions can be passed as arguments to other functions (not shown)
// functions can return functions because of closures

var teacherQuestion = interviewQuestion('teacher'); 
// teacherQuestion is the closure for interviewQuestion
// closures allow vars internal to a function to 'stay alive' in another object

function interviewQuestion(job) {
    return function(name) {
        // case 1
        if (job === 'teacher') {
            console.log(name+', what subject do you teach?');
        };
        // case 2 
        // case 3}
    } 
}

teacherQuestion('Annie');
interviewQuestion('teacher')('Pat');

// IIFE (immediately invoked function expression)
// round brackets make the function an expression rather than a declaration
// score var cannot be accessed from outside the IIFE

(function() {
    var score = Math.random()*10;
    console.log(score >= 5);
})();

(function(goodLuck) {
    var score = Math.random()*10;
    console.log(score >= 5 - goodLuck);
})(5); // 5 is the value of goodLuck var


// Section 5 coding challenge

var Question = function(theQuestion, theAnswers, correctAns) {
    this.theQuestion = theQuestion;
    this.theAnswers = theAnswers;
    this.correctAns = correctAns;
}