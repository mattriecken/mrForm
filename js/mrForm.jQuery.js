(function( $ ) {
	
	$.fn.mrForm = function() {
		
		var defaultFirstName = $('#mrForm_firstName').val();
		var defaultLastName = $('#mrForm_lastName').val();
		var defaultEmail = $('#mrForm_email').val();
		var defaultConfirmEmail = $('#mrForm_confirmEmail').val();

		$(this).find(':input').focus(function() {
			
			// First name
			if ($(this).attr('id') == 'mrForm_firstName')
			{
				// If the value is = defaultFirstName, clear the element
				if($(this).val() == defaultFirstName) $(this).val('');
				
				// On blur, if the value is blank, reset the value to defaultFirstName
				$(this).blur(function() {
					if ($(this).val() == '') $(this).val(defaultFirstName);
				});	
				
				$(this).keyup(function(){

					var currentValue = $(this).val();

					// Check for valid element input and set status message
					if (currentValue.match(/^[A-Za-z-]+$/))
					{
						$(this).css('background', 'url(images/check_green.jpg) no-repeat scroll');
						$(this).css('background-position', 'right');
					} else {
						$(this).css('background', 'url(images/check_gray.jpg) no-repeat scroll');
						$(this).css('background-position', 'right');
					}
				});
			}
			
			// Last name
			if ($(this).attr('id') == 'mrForm_lastName')
			{
				// If the value is = defaultLastName, clear the element
				if($(this).val() == defaultLastName) $(this).val('');
				
				// On blur, if the value is blank, reset the value to defaultLastName
				$(this).blur(function() {
					if ($(this).val() == '') $(this).val(defaultLastName);
				});
				
				$(this).keyup(function(){
					
					var currentValue = $(this).val();
				
					// Check for valid element input and set status message
					if (currentValue.match(/^[A-Za-z-]+$/))
					{
						$(this).css('background', 'url(images/check_green.jpg) no-repeat scroll');
						$(this).css('background-position', 'right');
					} else {
						$(this).css('background', 'url(images/check_gray.jpg) no-repeat scroll');
						$(this).css('background-position', 'right');
					}
				});
			}
			
			// E-mail
			if ($(this).attr('id') == 'mrForm_email')
			{				
				// If the value is = defaultEmail, clear the element
				if($(this).val() == defaultEmail) $(this).val('');
				
				// On blur, if the value is blank, reset the value to defaultEmail
				$(this).blur(function() {
					if ($(this).val() == '') $(this).val(defaultEmail);
				});
				
				$(this).keyup(function(){
					
					var currentValue = $(this).val(); 
					
					// Check for valid element input and set status message
					if (currentValue.match(/^[_A-Za-z0-9-]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/))
					{
						$(this).css('background', 'url(images/check_green.jpg) no-repeat scroll');
						$(this).css('background-position', 'right');
					} else {
						$(this).css('background', 'url(images/check_gray.jpg) no-repeat scroll');
						$(this).css('background-position', 'right');
					}
					
					// Validate against #mrForm_confirmEmail if user filled that element in first
					if (currentValue == $('#mrForm_confirmEmail').val())
					{
						$('#mrForm_confirmEmail').css('background', 'url(images/check_green.jpg) no-repeat scroll');
						$('#mrForm_confirmEmail').css('background-position', 'right');
					} else {
						$('#mrForm_confirmEmail').css('background', 'url(images/check_gray.jpg) no-repeat scroll');
						$('#mrForm_confirmEmail').css('background-position', 'right');
					}
				});
			}
			
			// Confirm E-mail
			if ($(this).attr('id') == 'mrForm_confirmEmail')
			{
				// If the value is = defaultConfirmEmail, clear the element
				if($(this).val() == defaultConfirmEmail) $(this).val('');
				
				// On blur, if the value is blank, reset the value to defaultConfirmEmail
				$(this).blur(function() {
					if ($(this).val() == '') $(this).val(defaultConfirmEmail);
				});
				
				$(this).keyup(function(){
					
					var currentValue = $(this).val(); 
					
					if (currentValue == $('#mrForm_email').val())
					{
						$(this).css('background', 'url(images/check_green.jpg) no-repeat scroll');
						$(this).css('background-position', 'right');
					} else {
						$(this).css('background', 'url(images/check_gray.jpg) no-repeat scroll');
						$(this).css('background-position', 'right');
					}
				});
			}
		});
	};
})( jQuery );