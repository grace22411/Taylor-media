$(document).ready(function(){
  $(".fa-times").click(function () {
    $(".modal-content").fadeOut();
  });

  $(".fa-bars").click(function () {
    $(".modal-content").show();
  })

  $(".fa-times").click(function () {
    $(".modal-content").fadeOut();
    $(".success").fadeOut();
  });
      
});