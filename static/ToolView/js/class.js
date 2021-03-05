class EmptyClass{
	TextEdit(el){}
	SaveProject(){
		var records = $('#allrecords').children('.records');

		var recordsDict = {};
		var item = '';
		var Html = '';
		var Name = '';
		for (let i = 0; i < records.length; i++) {
			item = $(records[i]).find('.records_container');
			Name = item.data('artboard');
			Html = WF.GenWidgetFW_JSON(`.${Name}`);
			recordsDict[Name] = Html['Child'];
		}
		SendEmit('SaveProject',{'html':JSON.stringify(recordsDict),'manager':JSON.stringify(String(ZeroBlockManagerDict))});
	}
	OpenProject(html,code){

		ZeroBlockManagerDict = code;


		$('body').append('<span id="reload_project"></span>');
		var obj = Object.keys(html);

		for (let i = 0; i < obj.length; i++) {
			$('#reload_project').html('');
			WF.Create(html[obj[i]],'#reload_project');

			tp__addRecord('ReloadProject',obj[i].replace('record__',''));
		}
		$('#reload_project').remove();

		obj = Object.keys(code);
		// console.log(code);
		for (let i = 0; i < obj.length; i++) {
			FWK.SetEvent(code[obj[i]]);
		}
	}
}

var FW = new EmptyClass();
// Name = Name.replace('record__','');