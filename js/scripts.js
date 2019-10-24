$(document).ready(function(){
  $("form#animals").submit(function(event) {
    event.preventDefault();
    var selection = $('#animal-type').val();

  if (selection === "Turtles") {
        $(".turtle").show();
        $(".snake").hide();
        $(".insect").hide();
      } else if (selection === "Snakes"){
        $(".snake").show();
        $(".turtle").hide();
        $(".insect").hide();
      } else {
        $(".insect").show();
        $(".turtle").hide();
        $(".snake").hide();
      }



  });



});
