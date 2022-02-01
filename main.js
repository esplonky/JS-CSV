$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "test.csv",
        dataType: "text",
        success: function(data) {processData(data);}
    });
});

function processData(allText){
    const para = document.createElement("p");
    const elemBody = document.getElementById("nameNumAdd")
    var record_num = 3;
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++){
        var data = allTextLines[i].split(',');
            for (var j=0; j<data.length; j++){
            
                var node = document.createTextNode(data[j]);
                para.appendChild(node);
            }
        }
    }