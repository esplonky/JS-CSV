$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "test.csv",
        dataType: "text",
        success: function(data) {processData(data);}
    });
});

function processData(allText){
    var record_num = 3;
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++){
        var data = allTextLines[i].split(',');
        if (data.length == Headers.length) {
            var tarr = [];
            
            for (var j=0; j<Headers.length; j++){
            }
                 
            
            }
        }
    }