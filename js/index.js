$(document).ready(function(){
  $(".first-list-element").addClass("active");
 $(".nav-item").click(function(){
   $(".nav-item").removeClass("active");
   $(this).addClass("active");
 });
 $("#toggler").click(function(){
     $("#wrap").toggleClass("toggled");

     var left=$(".sidebar").css("left");
     if(left=="0px"){
         $(".sidebar").css({"left":"-17rem"});
         $("#layer").fadeOut();
     }
     else{
         $(".sidebar").css({"left":"0px"});
         $("#layer").fadeIn();
     }
 });
 $("#layer").click(function(){
     $(".sidebar").css({"left":"-17rem"});
     $("#layer").fadeOut();
 });
 $(".search-icon").click(function(){
   $(".search-input").slideToggle("slow");
 });
});