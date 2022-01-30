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
    var entries = allText[0].split(',');
    var lines = [];
}