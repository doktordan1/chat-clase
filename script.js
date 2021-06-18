$( document ).ready(function() {
	let username = '',
		profilePic = $('#profileImage').attr('src');
    $('#login-btn').click(function(e){
    	if ($('#userName').val().trim() !== '' ){
    		username = $('#userName').val();
    		$('.userName').text(username);
    		$('#settings').hide();
    		$('#chatContainer').show();
    	}

    	if ($('#profileUrl').val().trim() !== ''){
    		changeProfilePic()
    	}
    });

    $('#profileUrl').change(function(e){
		changeProfilePic()
    });

    $('#settingsIcon').click(function(e){
    	$('#login-btn').text('Guardar Cambios');
		$('#chatContainer').hide();
		$('#settings').show();
    });

    $('#messages').keyup(function(e){
    	if (($('#messages').val().trim() !== '') && (e.keyCode == 13)){
		    $('#chat').append('<li class="chipContainer">'+
		    	'<span class="userName">'+username+'</span>'+
		    	'<span class="messageGroup"><img class="profilePic" src="'+profilePic +'"/><span><span class="message">'
		    	+ $('#messages').val() + '</span></span></li>')
		    $('#messages').val('');
    	}
    });

    function changeProfilePic(){
    	profilePic = $('#profileUrl').val();
		$('#profileImage').attr('src',profilePic);
		$('.profilePic').attr('src',profilePic);
    }
});