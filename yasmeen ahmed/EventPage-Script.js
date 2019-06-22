//button


//$(document).ready(function(){
  //  $("#show").click(function(){
        
      
        //$(".event-img-2").fadeOut(3000).
         // $("#details-2").css("display", "block");
           // $("#details-2").slideUp(2000);
   // });
    //$("#hide").click(function(){
      //  $("#container-img2").fadeIn(3000);
    //});
//});


/// End button
$("#show").click(
    function(){
      
       $("#details").css("display", "block");
        $("#details").animate( {
            right:'-90%'},2000
        
        )
        
        $("#container-img").fadeOut(2000);
        $("#hide").fadeIn(2000);
          $("#show").hide();
          $("#show2").fadeOut(2000);
         $("#info").hide();
         
    }
    )
$("#hide").click(
    function(){
      
       $("#details").css("display", "none");
        $("#details").animate( {
            right:'30px'},1000
        
        )
      
        $("#container-img").fadeIn(2000);
        $("#hide").hide();
        $("#show").fadeIn(2000);
         $("#show2").show();
        $("#show").show();
         
    }
    )
$("#show2").click(
    function(){
      
       $("#details-2").css("display", "block");
        $("#details-2").animate( {
            right:'90%'},2000
        
        )
        
        $("#container-img1").fadeOut(2000);
        $("#hide2").fadeIn(2000);
          $("#show2").hide();
          $("#show").fadeOut(2000);
             $("#info2").hide();
    }
    )
$("#hide2").click(
    function(){
      
       $("#details-2").css("display", "none");
        $("#details-2").animate( {
            right:'30px'},1000
        
        )
      
        $("#container-img1").fadeIn(2000);
        $("#hide2").hide();
        $("#show").fadeIn(2000);
         $("#show2").show();
        $("#show").show();
        
    }
    )
//////////////////////
$("#more").click(
    function(){
      
        
        $("#info").slideToggle(1000);
        
    }
    )
$("#more2").click(
    function(){
      
        
        $("#info2").slideToggle(1000);
        
    }
    )
////////////////////////
function openWin() {
    window.open("");
}