console.log("hello world from js file");

function myFunction(){
    console.log("hello from inside a function!");
    alert("This in an alert")
}

function myMouseOver(){
    console.log("hello from mouseover!");
}

var count=0;
function addToDiv(){
    var div = document.getElementById('mydiv');
    count++;
    div.innerHTML += 'Adding more stuff #' + count + '</br>';
}

function clearDiv(){
    var div = document.getElementById('mydiv');
    div.innerHTML = "";
}

function moveCircleLeft() {
    var shape = document.getElementById('circle');
    var x = parseInt(shape.getAttribute("cx"));
    x += 10; 
    shape.setAttribute("cx", x)
}

function moveLeft(id) {
    var shape = document.getElementById(id);
    var xpos = parseInt(shape.getAttribute('mydata:xtrans'));
    xpos += 20;
    console.log('Shape = ' + id + ', xpos = ' + xpos + ', transform = ' + shape.getAttribute("transform"));
    shape.setAttribute('transform','translate(' + xpos + ',0)');
    shape.setAttribute('mydata:xtrans', xpos);
}