$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

let user_icon = document.querySelector('.user-header__icon');
user_icon.addEventListener("click", function () {
	let user_menu = document.querySelector('.user-header__menu');
	user_menu.classList.toggle('_active');
});

let user_arrow = document.querySelector('.user-header__arrow');
user_arrow.addEventListener("click", function () {
	let user_menu = document.querySelector('.user-header__menu');
	user_menu.classList.toggle('_active');
});

$(document).ready(function () {
	$('.main-slider').slick({
		arrows: true,
		prevArrow: '.decor-main-slider__arrow_prev',
		nextArrow: '.decor-main-slider__arrow_next',
		slidesToShow: 1,
		slidesToScroll: 1,
		easing: 'ease',
		adaptiveHeight: true,
	});
});

$(document).ready(function () {
	$('.lots__slider').slick({
		arrows: true,
		prevArrow: '.control-slider-lots__arrow_left',
		nextArrow: '.control-slider-lots__arrow_right',
		slidesToShow: 3,
		slidesToScroll: 1,
		easing: 'ease',
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 910,
			settings: {
				slidesToShow: 2,
			}
		},{
			breakpoint: 615,
			settings: {
				slidesToShow: 1,
			}
		}]
	});
});

$(document).ready(function () {
	$('.quotes__slider').slick({
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		easing: 'ease',
		nextArrow: '.control-slider-quotes__circle'
	});
});

function ibg() {
let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}
ibg();
