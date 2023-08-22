const swiper = new Swiper('.swiper', {
  speed: 600,
  spaceBetween: 100,
	autoplay: {
		delay: 4000,
		disableoninteraction: false,
	},
	pagination: {
    el: '.swiper-pagination',
  },
	effect: 'fade',
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	loop: true,
	keyboard: true,
});