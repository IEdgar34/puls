$(document).ready(function(){
    $('.carousel__wrapper').slick({
        speed: 1200,
        /* adaptiveHeight: true, */
        /* autoplay: true, */
        
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
              breakpoint: 900,
              settings: {
                arrows: false,
                /* autoplay: false, */
                dots: true,
                /* centerMode: true, */
                /* focusOnSelect: true, */
                /* fade: true, */
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

     
   /*  $('.card__link').each(function(i) {lic
        $(this).on('click',function(e) {
            e.preventDefault();
            $('.card__item-block').eq(i).toggleClass('card__item-block_active');
            $('.card__descr-block').eq(i).toggleClass('card__descr-block_active');
        })
    });
     */
    
    /* $('.descr__link').each(function(i) {
        $(this).on('click',function(e) {
            e.preventDefault();
            $('.card__item-block').eq(i).toggleClass('card__item-block_active');
            $('.card__descr-block').eq(i).toggleClass('card__descr-block_active');
        })
    }); */
    
    function toggleSlide (item){
        $(item).each(function(i) {
            $(this).on('click',function(e) {
                e.preventDefault();
                $('.card__item-block').eq(i).toggleClass('card__item-block_active');
                $('.card__descr-block').eq(i).toggleClass('card__descr-block_active');
            })
        });
    };
    toggleSlide ('.descr__link');
    toggleSlide ('.card__link');


    //modal

    $('[data-modal=consultation]').on('click',function(){
        $('.overlay, #consultation').fadeIn('faste');
        
    });
    $('.modal__close').on('click',function(){
      $('.overlay, #consultation, #order, #mesage').fadeOut();
    });

    $('.card_btn').on('click', function(){
      $('.overlay, #order').fadeIn();
    })


    $('.card_btn').each(function(i){
      $(this).on('click',function(){
        $('#order .modal__subtitle').text($('.card__title').eq(i).text())
      })
    });



 


    
    function valideForms(form){
        $(form).validate({
            rules:{
              name: "required",
              phone: "required",
              email: {
                required: true,
                email: true
              }
            },
            messages:{
                name: "пожалуйста введите ваше имя",
                phone: "введите ваш номер телефона",
            email: {
                required: "введите вашу почту",
                email: "неверныая почта"

               }
            }
        });
      
    };  

    valideForms('#order form');
    valideForms('#consultation form');
    valideForms('#form1');



    $('input[name=phone]').mask("+7 (999) 999-99-99");


    $('form').submit(function(e){
     	e.preventDefault();
      	$.ajax({
        	type: "POST",
        	url: "../mailer/smart.php",
        	data: $(this).serialize()
      	}).done(function(){
        	$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #mesage').fadeIn();

			
			$('form').trigger('reset');
      	});
		return false;
    });
    


    $(window).scroll(function(){
      if ($(this).scrollTop() > 500){
        $('.pageup').fadeIn();
      }else{
        $('.pageup').fadeOut(); q
      }
    });

    /* $('.pageup').on('click',function(){
      $(window).scrollTop(0);
    }); */

   	$('a[href=#up]').click(function(){
		const _href = $(this).attr('href');
		$('html, body').animate({scrollTop: $(_href).offset().top+'px'});
		return false;
	})
 	


    new WOW().init();
	
}); 
