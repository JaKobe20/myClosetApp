

$(".contentContainer").css("min-height",$(window).height());


$('#submitSignUp').click(function() {
	$.ajax('/api/signup', {
		method: 'POST',
		data: {
			name: $('#nameField').val(),
			username: $('#usernameField').val(),
			password: $('#passwordField').val()
		},
		success: function(data) {
			alert('User ' + $('#usernameField').val() + ' created!');
			$('#nameField').val('');
			$('#usernameField').val('');
			$('#passwordField').val('');
		}
	})

});


$('#logInButton').click(function() {
	$.ajax('/api/login', {
		method: 'POST',
		data: {
			username: $('#logInUsername').val(),
			password: $('#logInPassword').val()
		},

		success: function(data) {
			alert(data.message);
			
			
			$('#logInUsername').val('');
			$('#logInPassword').val('');
		},

	})

});




function test() {
	alert('test');
}

