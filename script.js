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
      

  $(".fa-arrow-down").click(function(){
		var $element = $(".what-we-offer").offset().top;
	
		$("html,body").animate({
			scrollTop : $element
    }, 900);
  });
});