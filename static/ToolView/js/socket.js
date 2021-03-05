// Get request from server by socket
socket.on('request', function(message){
	let code = message[1];
	message = message[0];

	message = message.split(' ')
		
	if (message[0] == 'EditZeroBlockSave') {
		// console.log(code);
		$(`[record-id="${code['recordId']}"] .records_container`).html('');
		WF.Create(code['html'],`[record-id="${code['recordId']}"] .records_container`);
		if (ZeroBlockManagerDict.hasOwnProperty(code['recordId'])) {
			ZeroBlockManagerDict[code['recordId']] = code['ZeroBlockManager'];
		}

		FWK.SetEvent(ZeroBlockManagerDict[code['recordId']]);
		FW.SaveProject()
	}
	if (message[0] == 'GetProject') {
		try{
			code['html'] = JSON.parse(code['html']);
		}
		catch(e){
			code['html'] = {};
		}

		FW.OpenProject(code['html'],JSON.parse(code['manager']));
	}
	// console.log(message,code);
});