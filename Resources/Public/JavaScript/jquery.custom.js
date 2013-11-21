$(document).ready(function() {
	
	// Smooth Scroll
	$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		&& location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var headerHeight = $("#header").height()+40;
				var targetOffset = $target.offset().top-headerHeight;
				
				$('html,body').animate({scrollTop: targetOffset}, 1000);
				return false;
			}
		}
	});
    
});
