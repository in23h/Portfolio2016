;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				console.log('hi?');
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});


})(jQuery)