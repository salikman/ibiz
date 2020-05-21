(function($) {
	"use strict";
	///////////////////////////
	// Btn nav collapse
	$('#nav .navbar-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});
	///////////////////////////
	// Презагрузка
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
	});
	// $('#location .location-block .location-expand').on('click', function () {
	// 	$('#location').toggleClass('open');
	// });
	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		$('.contacts').removeClass('open');
		var wScroll = $(this).scrollTop();
		var wWidth = $(this).width();

		
		if (wWidth < 841) {
			$('#nav').removeClass('fixed-nav');
		} else {
			wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');
		}
	});
	
	///////////////////////////
	// Скролл
	$("a[href^='#info']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	///////////////////////////
	// Модальные окна
	var contactsLink = document.querySelector('.contacts__link'),
		contacts  = document.querySelector('.contacts'),
		langSwitch = document.querySelector('.lang-switch'),
		lang = document.querySelector('.lang');

	function btnHeader(a, b) {
		$(a).on('click', function() {
			$(b).toggleClass('open');
		});
	}
	btnHeader(contactsLink, contacts);
	btnHeader(langSwitch, lang);

	var callModal = document.getElementById("callModal"),
		callBtn = document.getElementById("callBtn"),
		span = document.getElementsByClassName("close")[0];
	
	var apartModal = document.getElementById("apartModal"),
		apartBtn = document.getElementById("apartBtn"),
		span1 = document.getElementsByClassName("close1")[0]; 

	function modalWindow(a,b,c) {
		$(a).on('click', function () {
			$(b).css('display', 'flex');
		});
		$(c).on('click', function () {
			$(b).css('display', 'none');
		});
		$(window).on('click', function(event) {
			if (event.target == b) {
				$(b).css('display', 'none');
			}
		});
	}

	modalWindow(callBtn, callModal, span);
	modalWindow(apartBtn, apartModal, span1);


	
	// slick slider
	$('.slider-list').slick({
		centerMode: true,
		centerPadding: '100px',
		slidesToShow: 1,
		variableWidth: true,
		prevArrow: '<button class="gallery-arrow gallery-arrow-prev wow bounceInRight" data-wow-duration="1s" data-wow-delay="0s"></button>',
		nextArrow: '<button class="gallery-arrow gallery-arrow-next wow bounceInLeft" data-wow-duration="1s" data-wow-delay="0s"></button>',
		responsive: [
			{
				breakpoint: 1073,
				settings: {
					centerPadding: '10px',
				}	
			} 
		]
	});
	$('.progress-slider').slick({
		prevArrow: '<button class="progress-arrow progress-arrow-prev"></button>',
		nextArrow: '<button class="progress-arrow progress-arrow-next"></button>',
		dots: true,
		dotsClass: 'dots dots-offset',
	});
	
	$('.stocks-slider').slick({
		prevArrow: '<button class="progress-arrow progress-arrow-prev"></button>',
		nextArrow: '<button class="progress-arrow progress-arrow-next"></button>',
		dots: true,
		dotsClass: 'dots dots-offset',
	});
	$('.news-slider').slick({
		prevArrow: '<button class="progress-arrow progress-arrow-prev"></button>',
		nextArrow: '<button class="progress-arrow progress-arrow-next"></button>',
		dots: true,
		dotsClass: 'dots dots-offset',
	});
	$('.building__slider').slick({
		arrows: false,
		infinite: true,
		slidesToShow: 3,
		centerPadding: '10px',
		slidesToScroll: 3,
		dots: true,
		dotsClass: 'dots dots-offset',
		responsive: [
			{
				breakpoint: 1220,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,

				}	
			},
			{
				breakpoint: 880,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,

				}	
			} 
		]
	});

	// Нумерация слайдера
	var $slider = $('.contractor-slider');
	if ($slider.length) {
		var currentSlide;
		var slidesCount;
		var sliderCounter = document.createElement('div');
		sliderCounter.classList.add('slider-quantity');
		
		var updateSliderCounter = function(slick, currentIndex) {
		  currentSlide = slick.slickCurrentSlide() + 1;
		  slidesCount = slick.slideCount;
		  $(sliderCounter).html(
			  '<span class="num-slide">' + currentSlide + '</span>' 
			  + '/' + 
			  '<span class="num-total">' + slidesCount + '</span>')
		};
	  
		$slider.on('init', function(event, slick) {
		  $slider.append(sliderCounter);
		  updateSliderCounter(slick);
		});
	  
		$slider.on('afterChange', function(event, slick, currentSlide) {
		  updateSliderCounter(slick, currentSlide);
		});
	  
		$slider.slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			prevArrow: '<button class="contractor-arrow contractor-arrow-prev"></button>',
			nextArrow: '<button class="contractor-arrow contractor-arrow-next"></button>',
			responsive: [
				{
					breakpoint: 1241,
					settings: {
					  slidesToShow: 3,
					  slidesToScroll: 1,
					}	
				},
				{
					breakpoint: 765,
					settings: {
					  slidesToShow: 2,
					  slidesToScroll: 1,
					}	
				},
				{
					breakpoint: 520,
					settings: {
					  slidesToShow: 1,
					  slidesToScroll: 1,
					}	
				}
	
			]
		});
	}
})(jQuery);