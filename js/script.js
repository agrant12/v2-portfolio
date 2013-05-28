jQuery(document).ready(function(){

	$('body').each(function(){
			$(this).find('section:first').show();
	});
	$('a').click(function(){
		if(!$(this).hasClass('current')){
			$(this).addClass('current').parent('li').siblings('li').find('a.current').removeClass('current');
			$($(this).attr('href')).fadeIn("slow").siblings('section').hide();
		
		if($(this).hasClass('home') || $(this).hasClass('contact')){
			$('.sub_menu').slideUp();
		}
			/* Smooth Scroll back to Top */
			$("html, body").animate({ scrollTop: 0 }, "slow");
		}

		this.blur();
		return false;
	});


	$('.work').on('click', function() {

		var defaultToggleState = true;

        if (defaultToggleState) {

            $('.sub_menu').slideDown();
        
            defaultToggleState = false;
        } else {

            $('.sub_menu').slideUp();

            defaultToggleState = true;
        }

	});
});