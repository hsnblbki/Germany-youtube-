$(document).ready(function(){
 $("#myBtn").on("click",function(){
    read();
 });
 $(".reply").click(function(){
     $(this).parents("div.row").next("div.card-inner").toggle();
 });
});
function read(){
    var dots=document.getElementById("dots");
    var textBtn=document.getElementById("myBtn");
    var moretext=document.getElementById("more");
    if(dots.style.display === "none"){
        dots.style.display="inline";
        textBtn.innerHTML="mehr Ansehen";
        moretext.style.display="none";
    }
    else{
        dots.style.display="none";
        textBtn.innerHTML="Weniger Anzeigen";
        moretext.style.display="inline";
    }
}