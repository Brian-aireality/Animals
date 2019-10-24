$(document).ready(function(){
  $("form#animals").submit(function(event) {
    event.preventDefault();
    var selection = $('#animal-type').val();

console.log(selection);
  // $(".output").text(selection);

  if (selection === "Turtles") {
        $(".turtle").show();
      } else if (selection === "Snakes"){
        $(".snake").show();
      } else {
        $(".insect").show();
      }



  });



});
