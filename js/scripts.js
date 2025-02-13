$(() => {


	// Ширина окна для ресайза
	WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
	WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
	BODY = document.getElementsByTagName('body')[0]
	OVERLAY = document.querySelector('.overlay')



	$('body').on('click', '.modal_link', function (e) {
		e.preventDefault()

		Fancybox.close(true)
		Fancybox.show([{
			src: $(this).data('content'),
			type: 'inline',
		}]);
	})



	var mySwiper = new Swiper('.reviews .swiper', {
		speed: 17000,
		slidesPerView: 3,
		spaceBetween: 35,
		loop: true,
		autoplay: {
			delay: 10,
			reverseDirection: true,
		},
		breakpoints: {
			0: {
				speed: 17000,
				slidesPerView: 1,
				spaceBetween: 20,
				autoplay: {
					delay: 0,
				},
			},
			576: {
				speed: 17000,
				slidesPerView: 2,
				spaceBetween: 20,
				autoplay: {
					delay: 0,
				},
			},

			768: {
				speed: 17000,
				slidesPerView: 2,
				spaceBetween: 30,
				autoplay: {
					delay: 0,
				},
			},

			992: {
				speed: 17000,
				slidesPerView: 3,
				spaceBetween: 35,
				autoplay: {
					delay: 0,
				},
			},

			1600: {
				speed: 17000,
				slidesPerView: 3,
				spaceBetween: 35,
				autoplay: {
					delay: 0,
				},
			}
		}
	});

	var mySwiper3 = new Swiper('.reviews .swiper_mt35', {
		speed: 17000,
		slidesPerView: 3,
		spaceBetween: 35,
		loop: true,
		autoplay: {
			delay: 10,
			reverseDirection: false,
		},
		breakpoints: {
			0: {
				speed: 17000,
				slidesPerView: 1,
				spaceBetween: 20,
				autoplay: {
					delay: 0,
				},
			},
			576: {
				speed: 17000,
				slidesPerView: 2,
				spaceBetween: 20,
				autoplay: {
					delay: 0,
				},
			},

			768: {
				speed: 17000,
				slidesPerView: 2,
				spaceBetween: 30,
				autoplay: {
					delay: 0,
				},
			},

			992: {
				speed: 17000,
				slidesPerView: 3,
				spaceBetween: 35,
				autoplay: {
					delay: 0,
				},
			},

			1600: {
				speed: 17000,
				slidesPerView: 3,
				spaceBetween: 35,
				autoplay: {
					delay: 0,
					reverseDirection: false
				},
			}
		}
	});



		AOS.init();


		// Fancybox
		Fancybox.defaults.autoFocus = false
		Fancybox.defaults.trapFocus = false
		Fancybox.defaults.dragToClose = false
		Fancybox.defaults.placeFocusBack = false
		Fancybox.defaults.l10n = {
			CLOSE: "Закрыть",
			NEXT: "Следующий",
			PREV: "Предыдущий",
			MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
		}

		Fancybox.defaults.template = {
			closeButton: '<img src=images/close.svg>',
			// spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
			// main: null
		}



		$('input[type=tel]').inputmask('+7 (999) 999-99-99')



		$('body').on('click', '.tabs button', function (e) {
			e.preventDefault()

			const $item2 = $(this).closest('.tabs button')

			if ($item2.hasClass('active2')) {
				$item2.removeClass('active2').find('.tabs_desc').slideUp(400)
			} else {
				$accordion.find('.tabs button').removeClass('active2')
				$accordion.find('.tabs_desc').slideUp(400)

				$item2.addClass('active2').find('.tabs_desc').slideDown(400)
			}

		})


		window.addEventListener('resize', function () {
			WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight

			let windowW = window.outerWidth

			if (typeof WW !== 'undefined' && WW != windowW) {


				// Перезапись ширины окна
				WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth


				// Моб. версия
				if (!fakeResize) {
					fakeResize = true
					fakeResize2 = false

					document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
				}

				if (!fakeResize2) {
					fakeResize2 = true

					if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
				} else {
					fakeResize = false
					fakeResize2 = true
				}
			}
		})



	})