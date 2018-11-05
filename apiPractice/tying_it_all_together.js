var myModule = function() {
    var myString = 'string from myModule';
    console.log('Hi!');
    myPrint('Using fake print from myModule');

    function myFunc() {
        console.log('hello from myFunc', myString);
    }
    //return 'return from myModule';
    // return an object - can grant outside access to local vars and functions.
    return {
        outsideStuff: 'object stuff',
        outsideNum: 42,
        outsideName: myString,
        outsideFunc: myFunc
    };
}(); // assign and execute simultaneously; creates an object out of a function

console.log(myModule);
console.log(myModule.myString); // encapsulated variable, not accessible to global scope
myModule.outsideFunc(); 

(function() {
    console.log('Iffy!');
})();

function myPrint(someInfo) {
    console.log(someInfo);
};

myPrint('Hi from fake print');

// take text from top div and move it to the bottom div
document.querySelector('#moveToBottom').addEventListener("click", function(){
    var infoString = document.querySelector('#infoInTextArea').value;
    myPrint(infoString);
    document.querySelector('#bottomBox').textContent = infoString;
});

var playModule = function() {
    console.log('play mod');
}();

document.querySelector('#jsonEvent').addEventListener("click", function(){
    myPrint('json module stuff');
});

document.querySelector('#arrayPrint').addEventListener("click", function(){
    var fibSeries = [1,1,2,3,5,8];
    var fibString = ""
    for (var i=0; i < fibSeries.length; i++){
        fibString += "fibSeries " + i + "  " + fibSeries[i] + "\r\n";
    }
    document.getElementById('outputArea').setAttribute('style', 'white-space:pre;');
    document.getElementById('outputArea').textContent = fibString;
});

document.querySelector('#objectPrint').addEventListener("click", function(){
    var cityObject = {
        name: 'Calgary',
        population: 1200000,
        province: 'Alberta',
        hasMoutains: true,
    };
    document.getElementById('outputArea').textContent = JSON.stringify(cityObject);
});