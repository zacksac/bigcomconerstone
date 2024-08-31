if ($(window).width() <= 1024) {
  $(".explore .expaa").click(function(){
    //event.preventDefault();
   // $(".t4s-push-menu-btn").click();
        
    })
  $('.explore').click(function () {
      console.log("test");
      // $(".msmenu1").hide();
      $('.explore').not(this).find(".msmenu1").hide();
       $(this).find('.msmenu1').fadeToggle(500);
      
     });

$(window).click(function() {
 $(".msmenu1").hide();
});

$('.explore').click(function(event){
  event.stopPropagation();
});


  
}else{
$('.explore').mouseenter(function () {
       $(this).find('.msmenu1').fadeIn(500);
      
     });

 $('.explore').mouseleave(function () {
        $(this).find('.msmenu1').hide();
     }
 ).mouseleave();


}