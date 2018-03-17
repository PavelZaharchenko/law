$(function() {
	var startPosition;
	var fotorama = $('.fotorama').fotorama().data('fotorama');

	$(window).scroll(checkSticky);
	$(window).resize(resizeWindow);

	$('.fotorama').on('fotorama:ready', function(){ setTimeout(resizeWindow, 100); });
	$('.cover .prev').click(function(){ fotorama.show('<'); });
	$('.cover .next').click(function(){ fotorama.show('>'); });

	$("#menu-toggle").click(function(e) {
    	e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });

    $('#menu-toggle').click(function(){ $(this).toggleClass('open'); });

	$('.sidebar-nav-link').click(function(e) {
		e.preventDefault();
		var elementClick = $(this).attr('href');
		var top = $(elementClick).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
	});

	// popUp
	$(".read-more").each(function(index, el) {
		$(el).click(function(){
			$('.popup').hide();
	   		$('#div' + (index + 1)).fadeIn(200);   
		})
	});

	$(".cancel").click(function() {
		$('.popup').fadeOut(300);
	});

	// helpers
	function resizeWindow(){
		var sliderHeight = $('.slider').height();
		$('.cover').height(sliderHeight);
		$('.button').height(sliderHeight);

		var sliderWidth = $('.slider').width();
		$('.cover').width(sliderWidth);

		startPosition = $('.cover').outerHeight() - $('.menu').outerHeight();
		$('.menu').width($('.container').width());
		checkSticky();
	};

	function checkSticky(){
		if ($(window).scrollTop() > startPosition){
			$('.menu').addClass('sticky');
		} else $('.menu').removeClass('sticky');
	}
});