var playModule = function() {
    console.log('play mod');

    document.getElementById('jsonEvent').addEventListener("click", function(){
        var arrayString = document.getElementById('infoInTextArea').value;       
        document.getElementById('bottomBox').textContent = printArray(arrayString);
        document.getElementById('leftBox').textContent = arrayMin(arrayString);
        document.getElementById('rightBox').textContent = arrayMax(arrayString); 
        console.log('json event click');
    });

    var fibString = "[1,1,2,3,5,8]";
    document.querySelector('#arrayPrint').addEventListener("click", function(){
        document.getElementById('outputArea').textContent = printByLine(fibString);
    });

    function printArray(anArray) {
        var tempObj = JSON.parse(anArray);
        return JSON.stringify(tempObj);
    };

    function printByLine(anArray) {
        var tempObj = JSON.parse(anArray);
        var tempString = "";
        for (var i=0; i<tempObj.length; i++){
            tempString += "Element " + i + ":  " + tempObj[i] + "\r\n";
        };
        document.getElementById('outputArea').setAttribute('style', 'white-space:pre;');
        return tempString;   
    };

    function arrayMin(anArray) {
        var tempObj = JSON.parse(anArray);
        return JSON.stringify(Math.min.apply(null, tempObj));
    };

    function arrayMax(anArray) {
        var tempObj = JSON.parse(anArray);
        return JSON.stringify(Math.max.apply(null, tempObj));
    };

    var cityObject = {
        name: 'Calgary',
        population: 1200000,
        province: 'Alberta',
        hasMoutains: true,
    };
    document.getElementById('objectPrint').addEventListener("click", function() {
        document.getElementById('outputArea').textContent = JSON.stringify(cityObject);
    }); 

    // take text from top div and move it to the bottom div
    document.getElementById('moveToBottom').addEventListener("click", function(){
        var infoString = document.querySelector('#infoInTextArea').value;
        document.querySelector('#bottomBox').textContent = infoString;
    });

    var divCounter = 0;
    document.getElementById('createDiv').addEventListener("click", function() {
        console.log('create a div');

        var elem = document.createElement('div');
        elem.className = 'newDiv';
        elem.id = 'freshDiv'+divCounter;
        
        document.body.appendChild(elem);
        var t = document.createTextNode(divCounter); 
        elem.append(t);

        elem.addEventListener('click', function() {
            console.log("new div clicked");
            document.getElementById(this.id).remove();
        })

        divCounter++;
    });

}();
