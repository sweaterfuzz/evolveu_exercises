var mike,jo,mary,w1,w2;

mike = [5,5,5];
jo = [1,1,1];
mary = [3,3,3];

// mike = [116,94,123];
// jo = [89,120,103];
// mary = [97,134,105];

// function expression
var avgOf3 = function(a) {
    return (a[0]+a[1]+a[2])/3.0;
}

// ternary expressions - which of the three averages are the highest?
w1 = avgOf3(mike) >= avgOf3(jo) ? avgOf3(mike) : avgOf3(jo);
w2 = w1 >= avgOf3(mary) ? w1 : avgOf3(mary);

console.log('the winning avg score is ' + w2);

// Objects (dictionaries)
var furryCat = {
    firstname: 'Gerald',
    lastname: 'Shoes',
    birthYear: 2010,
    favToys: ['ball','catnip','string'],
    job: 'being cute',
    isDog: false,
    calcAge: function(){
        this.age = 2018 - this.birthYear;
    }
};
console.log(furryCat.firstname); // dot notation to access attribute
console.log(furryCat['favToys']); // bracket notation to access attribute
furryCat.calcAge();
console.log('cats age is ' + furryCat.age);

furryCat.job = 'playing with string';
console.log(furryCat);

// alternate object instatiation
var puppy = new Object;
puppy.firstname = 'Snoops';
puppy.job = 'get belly rubs';
puppy.isDog = true;
puppy.favToys = ['ball','stick','frisby'];
console.log(puppy);

var shelly = {
    height: 1.4,
    mass: 50,
    calcBmi: function(){
        this.bmi = this.mass/(this.height*this.height);
    }
}

var sandy = {
    height: 1.9,
    mass: 70,
    calcBmi: function(){
        this.bmi = this.mass/(this.height*this.height);
    }
}

shelly.calcBmi();
sandy.calcBmi();
console.log('two bmis: ' + shelly.bmi + ', ' + sandy.bmi)

// 5th Coding challenge

var foodBills = {
    bills: [124,48,268,180],
    tips: [],
    totals: [],
    calcTip: function() {
        for (var i=0; i<this.bills.length; i++){
            var aBill = this.bills[i];
            if (aBill < 50) {
                this.tips[i] = aBill*0.2;
            } else if ((aBill >= 50) && (aBill < 200)) {
                this.tips[i] = aBill*0.15;
            } else { 
                this.tips[i] = aBill*0.1;
            };
        };
    },
    calcTotals: function() {
        for (var i=0; i<this.bills.length; i++) {
            this.totals[i] = this.bills[i] + this.tips[i];
        };
    }
}

function averageBill(tots) {
    var sum = 0;
    for (var i=0; i < tots.length; i++) {
        sum = sum + tots[i];
    }
    return sum/tots.length;
};

foodBills.calcTip();
foodBills.calcTotals();
foodBills.average = averageBill(foodBills.totals);

console.log('bills: ' + foodBills.bills);
console.log('tips: ' + foodBills.tips);
console.log('totals: ' + foodBills.totals);
console.log('average totals: ' + foodBills.average);
console.log(foodBills);