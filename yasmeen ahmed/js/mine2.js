

jQuery(document).ready(function ($) {

    'use strict';

    var slider = $('#slider');
    var slidesWrapper = $('.slides');
    var slides = $('.slides li');
    var activeSlide = $('.slides.active');

    /*var timer = function() {
        setInterval(changeSlide, 10000);
    }*/

    function changeSlide() {
        var a = slidesWrapper.find('.active');
        
        var b = a.next('li');
        
        if( b.length === 0 ) {
            console.log();
            a.removeClass('active');
            slides.first().addClass('active');
        } else {
            a.removeClass('active');
            b.addClass('active');
        }
        //
    }

  //timer();

    $('.slide-nav-down').click(function(e) {
        clearInterval(changeSlide);
        changeSlide();
    
    });


    $('.slide-nav-up').click(function(e) {
        clearInterval(changeSlide);
        changeSlide();
    
    });
    
 /*   $('.slide-nav-down').click(function(e) {
        clearInterval(changeSlide);
        changeSlide();
    
    });
    */
/*    
    $('.slide-nav-up').on('mousedown', function() {
        $(this).css({'opacity': 1});
    });

    $('.slide-nav-up').on('mouseup', function() {
        $(this).css({'opacity': 0.7});
    });
  
    $('.slide-nav-up').on('mouseup', function() {
        $('.slide-nav-down').css({'opacity': 1});
    });
   
    $('.slide-nav-down').on('mouseup', function() {
        $(this).css({'opacity': 0.7});
    });
     $('.slide-nav-down').on('mousedown', function() {
        $(this).css({'opacity': 1});
    });

     $('.slide-nav-down').on('mousedown', function() {
        $('.slide-nav-up').css({'opacity': 1});
    });
*/
  
});






/*
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
	
*/

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

