const fs = require('fs');
var content;
// First I want to read the file
fs.readFile('DATA.csv', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    //content = data;
    content = data.split("\r");

    // Invoke the next step here however you like
    //console.log(content);
    processFile();          // Or put the next step in a function and invoke it
});

function processFile() {
    console.log(content[0].split(","));
    let smallSet = []
    for (var i=1; i<800; i++) {
        splitEntry = content[i].split(",");
        if (splitEntry[1]==='ANTELOPE') {
            smallSet.push(splitEntry[0]);
        }
    }
    console.log(smallSet);
}