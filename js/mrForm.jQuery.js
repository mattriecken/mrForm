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
						$(this).attr('statusMessage', 'Valid E-mail');
					} else {
						$(this).attr('statusMessage', 'Invalid E-mail');
					}
					
					// Update the status message
					$('#mrForm_emailStatusMessage').html($(this).attr('statusMessage'));

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
						$(this).attr('statusMessage', 'E-mails match!');
					} else {
						$(this).attr('statusMessage', 'E-mails do not match');
					}
					
					// Update the status message
					$('#mrForm_confirmEmailStatusMessage').html($(this).attr('statusMessage'));
					
				});
			}
			

		});
		
	};
	
})( jQuery );