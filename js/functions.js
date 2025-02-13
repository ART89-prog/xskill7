document.addEventListener("DOMContentLoaded", function () {
	// Есть ли поддержка тач событий или это apple устройство
	if (!is_touch_device() || !/(Mac|iPhone|iPod|MacIntel|iPad)/i.test(navigator.platform)) document.documentElement.classList.add('custom_scroll')



	// Установка ширины стандартного скроллбара
	document.documentElement.style.setProperty('--scroll_width', widthScroll() + 'px')


	// Моб. версия
	fakeResize = false
	fakeResize2 = true

	if (document.body.clientWidth < 375) {
		document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
	}

	if (is_touch_device()) {
		// Закрытие моб. меню свайпом справо на лево
		let ts

		$('body').on('touchstart', (e) => { ts = e.originalEvent.touches[0].clientX })

		$('body').on('touchend', (e) => {
			let te = e.originalEvent.changedTouches[0].clientX

			if ($('body').hasClass('menu_open') && ts > te + 50) {
				// Свайп справо на лево
				$('header .mob_menu_btn').removeClass('active')
				$('body').removeClass('menu_open')
				$('header .menu').removeClass('show')
				$('.overlay').fadeOut(300)
			} else if (ts < te - 50) {
				// Свайп слева на право
			}
		})
	}
})



// Табы
var locationHash = window.location.hash

$('body').on('click', '.tabs_mobile button', function (e) {
	setTimeout(() => {
		var top = $(this).offset().top; // получаем координаты блока
		$('body, html').animate({scrollTop: top}, 800); // плавно переходим к блоку
	}, 100)   	
});

$('body').on('click', '.tabs button', function (e) {
	e.preventDefault()

	if (!$(this).hasClass('active')) {
		$(".tabs_mobile button").removeClass("active")
		const $parent = $(this).closest('.tabs_container'),
			activeTab = $(this).data('content'),
			$activeTabContent = $(activeTab),
			level = $(this).data('level')

		$parent.find('.tabs:first button').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$(this).addClass('active')
		$activeTabContent.addClass('active')
	}
})

if (locationHash && $('.tabs_container').length) {
	const $activeTab = $('.tabs button[data-content=' + locationHash + ']'),
		$activeTabContent = $(locationHash),
		$parent = $activeTab.closest('.tabs_container'),
		level = $activeTab.data('level')

	$parent.find('.tabs:first button').removeClass('active')
	$parent.find('.tab_content.' + level).removeClass('active')

	$activeTab.addClass('active')
	$activeTabContent.addClass('active')

	$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
}






// Вспомогательные функции
const setHeight = className => {
	let maxheight = 0

	className.each(function () {
		let elHeight = $(this).outerHeight()

		if (elHeight > maxheight) maxheight = elHeight
	})

	className.outerHeight(maxheight)
}


const is_touch_device = () => !!('ontouchstart' in window)


const widthScroll = () => {
	let div = document.createElement('div')

	div.style.overflowY = 'scroll'
	div.style.width = '50px'
	div.style.height = '50px'
	div.style.visibility = 'hidden'

	document.body.appendChild(div)

	let scrollWidth = div.offsetWidth - div.clientWidth
	document.body.removeChild(div)

	return scrollWidth
}