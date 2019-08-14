//get button
var callApiButton = document.getElementById("submit");

//set onclick
callApiButton.onclick = function(){
    
    var bURL = document.getElementById("baseurl").value;
    var aCall = document.getElementById("apicall").value;    
    
    
    $.ajax({
        url: bURL + aCall,
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            var output = document.getElementById("jsonbox");
            output.value = JSON.stringify(result, null, 2);
            
            var sH = $("#jsonbox")[0].scrollHeight + 10;

            $("#jsonbox").height(sH);
    
        }
    });
    
    
}
