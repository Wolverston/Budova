$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
	
	$('.read-more').click(function () {
		if ($('.realty-text').hasClass('opened')) {
			$('.realty-text').animate({height: 80}, 200).toggleClass('opened');
			$(this).closest('.button-wrapper').toggleClass('backgrounded');
		} else {
			$(this).closest('.button-wrapper').toggleClass('backgrounded');
			$('.realty-text').animate({height: $('.realty-text')[0].scrollHeight}, 200).toggleClass('opened');
		}
	}); 

	$('.application').click(function (e) {
		if ($(e.target).hasClass('application'))			
		$(this).toggleClass('application-active');
	}); 

	function FilterInput(event) {
		var keyCode = ('which' in event) ? event.which : event.keyCode;

		isNotWanted = (keyCode == 69 || keyCode == 101);
		return !isNotWanted;
	};
	
	function handlePaste (e) {
		var clipboardData, pastedData;

		// Get pasted data via clipboard API
		clipboardData = e.clipboardData || window.clipboardData;
		pastedData = clipboardData.getData('Text').toUpperCase();

		if(pastedData.indexOf('E')>-1) {
			//alert('found an E');
			e.stopPropagation();
			e.preventDefault();
		}
	};

	$('#nav-icon').on('click', function(){
		$('.nav').toggleClass('visible');
	});


	$(".scroller").hide();
	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.scroller').fadeIn();
			} else {
				$('.scroller').fadeOut();
			}
		});

		$('.scroller').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});