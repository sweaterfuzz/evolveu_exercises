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

document.querySelector('#moveToBottom').addEventListener("click", function(){
    //document.getElementById("demo").innerHTML = "Hello World";
    var infoString = document.querySelector('#infoInTextArea').value;
    myPrint(infoString);
    document.querySelector('#bottomBox').textContent = infoString;
});