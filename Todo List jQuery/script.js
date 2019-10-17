//check off todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});


//click on X to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

//add todo pressing enter
$("input").keypress(function(event){
  if(event.which === 13){
    //grabbing new todo text from input
    var todoText = ($(this).val());
    $(this).val(""); //clearing input
    //create a new li and add it to ul
    $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");
  }
});
