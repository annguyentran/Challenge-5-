
function realtime(){
var DateTime = new Date();
$('#realTime').html(DateTime);

}

$(document).ready(function(){
setInterval(realtime, 1000);

});