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

  var height = parseInt(prompt("How tall are you in inches?"));

    if (height <48) {
      $(".death-coaster").hide();
      $(".baby-coaster").show();
      $(".goldilocks-coaster").hide();
    } else if (height > 83){
      $(".death-coaster").hide();
      $(".baby-coaster").hide();
      $(".goldilocks-coaster").show();
    } else {
      $(".death-coaster").show();
      $(".baby-coaster").hide();
      $(".goldilocks-coaster").show();
    }

});

// });
