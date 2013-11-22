// load google fonts async
WebFont.load({
	google: { families: [ 'Source+Sans+Pro:400,300,600:latin' ] }
	
	// load Source Sans Pro: light, normal, bold, light italic, normal italic, bold italic : latin subset
	// google: { families: [ 'Source+Sans+Pro:400,300,600,600italic,400italic,300italic:latin' ] }
});

$(document).ready(function() {
	var isTouch = 'click';
	if(Modernizr.touch) {
		isTouch = 'touchend'
	}


	// resposive nav init
	var navigation = responsiveNav(".navigation", {
		insert: "before",
		open: function(){
			$('.nav-collapse a').on(isTouch, function(){
				navigation.toggle();
			});
		}
	});


	// Smooth Scroll
	var headerHeight = $("#header").outerHeight();
	if(Modernizr.mq('(orientation: landscape) or (max-width: 610px)')) {
		headerHeight = 0;
	}

	$('.navigation').on('click touchend', 'a[href*=#]', function(event) {
		//event.preventDefault();
		var $this = $(this);

		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
			// is-active class for the clicked nav item
			$this.parent().addClass('is-active').siblings().removeClass('is-active');

			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top - headerHeight;
				$('html,body').stop().animate({scrollTop: targetOffset}, 1000);
			}
		}
		return false;
	});
});
