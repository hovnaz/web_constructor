// Get request from server by socket
socket.on('request', function(message){
	let code = message[1];
	message = message[0];

	message = message.split(' ')

	if (message[0] == 'EditZeroBlock') {
		$('#ArtBoard').html('');
		if (code['html'] != '_') {
			WF.Create(code['html'],'#ArtBoard');
		}
		$('#ArtBoard').attr('class','').addClass(`${code['recordId']} body__ArtBoard ZeroBlock-View-size`);
		$('#ArtBoard').attr('data-artboard',code['recordId']);
		$('[data-screens-style-size]').text('');
		recordId = code['recordId'];
		ArtBoardId = code['recordId'];
		AllStyleManagerTempAnime = {};
		if (code.hasOwnProperty('ZeroBlockManager')) {
			AllStyleManager = {};
			AllStyleManager = code['ZeroBlockManager'];
			FWK.SetEvent(AllStyleManager);
			$('[data-screens-style-size]').attr('type','deactivate/text');
			$('[data-screens-style-size="all"]').attr('type','text/css');
		}
		else{
			AllStyleManager = {};
		}
		$('#HideBlock').fadeOut(300);
		FW.TreeHtmlShow();
	}
	else if (message[0] == 'EditZeroBlockRemove') {
		if (recordId == code) {
			$('#HideBlock').fadeIn(300);
			recordId = "_";
			ArtBoardId = "_";
			AllStyleManager = {};
			$('#ArtBoard').html('');
			AllStyleManagerTempAnime = {};
		}
	}
	// console.log(message,code);
});

