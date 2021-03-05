
function tp__addRecord(category,id) {
	var recordId;
	var project;
	if (category == 'ReloadProject') {
		recordId = id;
		project = $('#reload_project').children().clone();
	}
	else{
		dict = '_';
		// data-freelex-project-category-id
		project = $('#MoreBlocks-Tool').find('[data-freelex-project-category-id="'+category+'"]').find('[data-freelex-project-id="'+id+'"]').clone().children();
		while (true){
			recordId = makeid(3);
			if ($(`[record-id="record__${recordId}"]`).length == 0) {
				break;
			}
		}
	}

	let Var = {
		"record":{
			"data":{
				"Atribute":{
					"record-id":"record__"+ recordId
				}
			}
		},
		"recordBody":{
			"data":{
				"Atribute":{
					"class":"records_container record__"+ recordId,
					"data-artboard":"record__"+ recordId
				}
			}
		}
	}
	ZeroBlockManagerDict['record__'+recordId] = {};




	$('#MoreBlocks-clone-Tool').html('');

	WF.Create(RecordsBlock,'#MoreBlocks-clone-Tool',Var);


	$('#MoreBlocks-clone-Tool .records .recordsTool .recordediticons').text(category);

	// recordediticons
	project.appendTo('#MoreBlocks-clone-Tool .records .records_container');


	clone = $('#MoreBlocks-clone-Tool').clone().children();

	$('#MoreBlocks-clone-Tool').html('');

	clone.appendTo('#allrecords');

}













function tp__EditRecord($target,type,recordId){
	$target = $($target);

	if (!recordId) recordId = '_';
	// get record Id 
	if (recordId == '_') {
		let recordIdParent = $target.parents('[record-id]');
		var TagDict = recordIdParent.children('.records_container');
		if (recordIdParent.length >= 1) {
			recordId = recordIdParent.attr('record-id');
		}
		else{
			alert('Error Atribute record-id is undefined');
			return;
		}
	}


	if (type == 'zero') {
		// ZeroBlockManagerDict
		let ZeroBlockDict = {};

		if (ZeroBlockManagerDict.hasOwnProperty(recordId)) {
			ZeroBlockDict = ZeroBlockManagerDict[recordId];
		}


		TagDict = WF.GenWidgetFW_JSON(TagDict)['Child'];

		if (!TagDict) TagDict = '_';
		let massageDict = {
			"html":TagDict,
			"ZeroBlockManager":ZeroBlockDict,
			"recordId": recordId
		}

		SendEmit('EditZeroBlock',massageDict);


	}
}





function tp__library__open(library){
	if (library == 'MoreBlocks') {
		if ($('#MoreblocksContainer').css('display') != 'none') {
			$('#MoreblocksContainer').fadeOut(300).css('left','-'+String($('#MoreblocksContainer').width())+'px');
		}
		else{
			$('#MoreblocksContainer').fadeIn(300).css('left',0);
		}
	}
}
function tp_show_leftdrop(el){
	$(el).toggle();
}

function RecordToolCoomand(el,task){
	if (task == 'clone') {
		let clone = $(el).parents('.records').clone();

		$(el).parents('.records').last().last().after(clone);
	}
	else if (task == 'remove') {
		let parent = $(el).parents('.records');
		let parentRecord = parent.attr('record-id');
		
		parent.remove();

		SendEmit('EditZeroBlockRemove',parentRecord);
	}
	else if (task == 'toggleRecords_container') {
		$(el).parents('.records').children('.records_container').toggle();
		$(el).parents('.records').children('.toggle_records_container').toggle();

	}
	else if (task == 'moveDown' || task == 'moveUp') {

		let index = $(el).parents('.records').index();

		if (task == 'moveDown') index++; else index--;

		let This = $(el).parents('.records');
		let NextPrev = $('#allrecords').children().eq(index);


		let cloneThis = This.children().clone();


		let recordIdPos = [This.attr('record-id'),NextPrev.attr('record-id')];

		let cloneNextPrev = NextPrev.children().clone();



		if (NextPrev.length != 0){
			This.html('');
			NextPrev.html('');

			cloneThis.appendTo(NextPrev);
			cloneNextPrev.appendTo(This);

		}
	}
}