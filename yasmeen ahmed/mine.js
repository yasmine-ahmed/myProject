
/*

$('.box').backgroundMove();

$('.box').backgroundMove({

  movementStrength:'50'

});

*/



var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(50, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(50, $(window).height() / 2 - e.clientY));
  lFollowX = (80 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (70 * lMouseY) / 100;

});

moveBackground();









$(".right-arrow ").mouseenter(

function(){
    
    $(".line").animate({width:'0px'},1000)
    $(".next").animate({right:'27px'},1000)
    $(".hidediv2").show()
    $(".hidediv2").animate({right:'87px'},1000)
    
   
}
    
    
    

)
$(".right-arrow ").mouseleave(

function(){
    
    $(".line").animate({width:'100px'},1000)
    $(".next").animate({right:'150px'},1000)
    $(".hidediv2").animate({right:'210px'},1000 )
    $(".hidediv2").hide()
    
    
    
   
}
    )

    $(".circle1 ").mouseenter(

function(){
    
    $(".circle1").css({stroke:'white'},1000)
   
}
    

)
 $(".circle1 ").mouseleave(

function(){
    
    $(".circle1").css({stroke:'dodgerblue'},1000)
   
}
    

)

var typed = new Typed('.wordmove', {
  strings: ["WEB SECURITY ..", "BIG DATA ..","CLOUD COMPUTING ..","ANDROID DEVELOPMENT ..","WEB DEVELOPMENT ..","IOS DEVELOPMENT .."],
  typeSpeed: 30,
    loop:true
});






 $(".spinner  ").mouseenter(

function(){
    
    $(".anotherbg").show(1000)
   
  



   
}
)
$("body").click(

function(){
    
    $(".anotherbg").hide(1000)
    $(".here").animate({top:'40%'},1000)
  
}
)


$(".playvideo svg").click(

function(){
     
   
   
     $(".videos").show(1000)
    
}

)

$(".x").click(

function(){
     
   
   
     $(".videos").hide(1000)
    
}

)

$(document).ready(function(){
 $('.owl-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:4
            }
        }
    })
});


$(document).ready(function(){
    
    
     $("#loading").fadeOut(3000)
})









var filters = document.querySelector(".filters"), // the SVG that contains the filters
	defs = filters.querySelector("defs"), // the  element inside the SVG
	blur = defs.querySelector("#blur"), // the blur filter
	blurFilter = blur.firstElementChild; // the feGaussianBlur primitive
blurFilter.setAttribute("stdDeviation","12,0");


// go through all the objects that need a blur filter
$(".js-blur").each(function(i){
	// clone the filter
	var blurClone=blur.cloneNode(true);

	// create and set a new ID so we can use the filter through CSS
	var blurId="blur"+i;
	blurClone.setAttribute("id",blurId);

	defs.appendChild(blurClone);

	// set the CSS
	var filter="url(#"+blurId+")";
	$(this)
		.css({
			webkitFilter:filter,
			filter:filter
		})
		// store the filter reference on the object for practicity
		.data("blur",blurClone)
	;
});












$('.owl-carousel').owlCarousel({
    loop:true,
})


$(".menu2").click(

function(){
     
   
   
     $(".selector").fadeIn(1000)
     $(".content").fadeIn(1000)
   
    
}

)
$(".x2").click(

function(){
     
   
   
     $(".selector").fadeOut(1000)
     $(".content").fadeOut(1000)
   
    
}

)





$(".right-arrow2 ").mouseenter(

function(){
    
    $(".line2").animate({width:'0px'},1000)
    $(".prev2").animate({left:'-80px'},1000)
    $(".hidediv3").show()
    $(".hidediv3").animate({left:'117px'},1000)
    
   
}
    
    
    

)
$(".right-arrow2 ").mouseleave(

function(){
    
    $(".line2").animate({width:'100px'},1000)
    $(".prev2").animate({left:'110px'},1000)
    $(".hidediv3").animate({left:'240px'},1000 )
    $(".hidediv3").hide()
    
    
    
   
}
    )





/*-----------------------------------------------------------------------------*/



$('#exampleInputEmail1').first().keyup(function () {
    var $email = this.value;
    validateEmail($email);
});

function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(email)) {
        $('#exampleInputEmail1').css({"border-color":"red"});
        
    } else {
        $('#exampleInputEmail1').css({"border-color":"green"});
    }
}




(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();





$(".attendance h4").click(

function(){
    
    $(".loginattendance").show(1000)
    
    
    
   
}
    )





$(".close").click(

function(){
    
    $(".loginattendance").hide(1000)
    
    
    
   
}
    )




$(".contactus2").click(

function(){
    
    $(".contactus").show(1000)
    
    
    
   
}
    )





















 function goattend()

{
    window.location.replace("./attendancepage.html")
}


$(".event").click(

function(){
    
    $(".main").show(1000)
    
    
    
   
}
    )





































/*


$('.slider').slick({
  arrows: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  draggable: false
});

$('.slider')
  .on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-list').addClass('do-transition')
  })
  .on('afterChange', function(){
    $('.slick-list').removeClass('do-transition')
  });
   


*/




