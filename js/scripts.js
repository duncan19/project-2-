$(document).ready(function{
$("#code-Form").submit(function(){
    var color =  parseInt($("#color").val());
    var time =  parseInt($("#time").val());
    var pet =  parseInt($("#pet").val());
    var sport = parseInt($("#sport").val());
    var shoe =  parseInt($("#shoe-size").val())

    if (color + time + pet + sport + shoe === 10) {
          $("#language-c#").show();
        } else if (color + time + pet + sport + shoe  > 10){
          $("#naguage-ruby").show();
        } else {
          $("#language-python").show();
        }




})
})
