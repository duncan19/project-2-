$(document).ready(function() {
  $("#code-Form").submit(function(){
    var color =  parseInt($("#color").val());
    var time =  parseInt($("#time").val());
    var pet =  parseInt($("#pet").val());
    var sport = parseInt($("#sport").val());
    var shoe =  parseInt($("#shoe-size").val())

    $(".main").hide();
    $(".results").show();
    if (color + time + pet + sport + shoe === 10) {
      $(".language-c").show();
    } else if (color + time + pet + sport + shoe  > 10){
      $(".language-ruby").show();
    } else {
      $(".language-python").show();
    }
    event.preventDefault();
    $("#reset-btn").click(function(){
      location.reload();
    });
  });
});
