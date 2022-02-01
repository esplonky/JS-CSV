//var csv = require('jquery-csv');

var listOfNames = $.csv.toArrays("test.csv")
var bodyElem = document.getElementById("nameNumAdd");

function printNamesOnScreen(namesList){
        for(var i=0; i<3; i++){
           var content = document.createTextNode(namesList.i);
        }
}
console.log(listOfNames);
printNamesOnScreen(listOfNames);