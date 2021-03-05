
// Оптимизация хвостовой рекурсии
function trampoline(fn) {
	return function(...args) {
		 let result = fn.apply(fn.context, args)
		 while (typeof result === 'function') {
			 result = result()
		 }

		 return result
	}
}


// sa ayestegh e qani vor petq e mi ankam ashxati voch te hazar ankam

function htmlToJson(TagObj,obj){
	if(!obj){obj=[]}
	let TagObjName = TagObj;
	TagObj = $(TagObj);

	var ChildEl;
	var tag = {}
	tag['TagName']=TagObj.prop("tagName").toLowerCase();
	tag['Child'] = {};
	tag['Text'] = '';
	for(let i = 0; i< TagObj.children().length;++i){
		ChildEl = htmlToJson(TagObj.children()[i]);
		if(ChildEl['TagName'] != 'script')tag['Child'][i] = ChildEl;

	}


	if(TagObj.prop("tagName") == 'SCRIPT');
	else{

		if(TagObj.prop("tagName") != 'BODY'){
			try {
			tag['Text'] = 
				TagObj
				.clone()    //clone the element
				.children() //select all the children
				.remove()   //remove all the children
				.end()  //again go back to selected element
				.text();

			} catch (e) {
				tag['Text'] = '';
			}
		}
		tag['Atribute'] = {}
		for(var i = 0; i< TagObj[0].attributes.length;i++){
			var attr= TagObj[0].attributes[i];
			tag['Atribute'][attr.name] = attr.nodeValue;
		}


		//  kjnje Atribute-y ev mnacac avelnort keyery en jamanak erb vor ayn datark e

		if( tag['Text'] == '') delete tag.Text;
		if((Object.keys(tag['Atribute']).length >= 1) == false ) delete tag.Atribute;
		if((Object.keys(tag['Child']).length >= 1) == false ) delete tag.Child;

	}
	return tag
}

const Trampoline_HtmlToJson = trampoline(htmlToJson);






class WFunction {
		// BUG: ['barev','fg','fg',5] es depqum
	isQueueNamber(DictKeys) {
		 let Result = false;
		 let ResultBool = true;
		 for (let i = 0; i < DictKeys.length; i++) {
			 if (isNaN(DictKeys[i])){
				 ResultBool = false;
				 Result = false;
			 }
			 else if (ResultBool) Result = true;
		 }
		 return Result;
	 }

	GetKeyObj(dict,keys) {

		 let Result = dict;

		 for (let i = 0; i < keys.length; i++) {
			 Result = Result[keys[i]];
		 }
		 return Result;
	 }

	isQueue(dict) {
		 let Result = [];
		 let DictKeys = Object.keys(dict);
		 DictKeys.sort();
		 // hertagrum e
		 if (this.isQueueNamber(DictKeys)) {
			 for (let i = 0; i < DictKeys.length; i++) {
				 Result.push([DictKeys[i]]);
			 }
		 }
		 return Result;
	 }
	 CtorGenHTML(dict){
			var Result = '';
			var Tag = {
				'TagName': {
					'Open': '',
					'Close': '',
					'Name': '',
				},
				'Atribute': '',
				'Text': '',
				'Result': '',
			}
			if (dict.hasOwnProperty('TagName')) {
				// dict['TagName'] = ResultTagAttr[1].replace('/','');
				// lastIndexOf('/')
				// dict['TagName'] = dict['TagName'].trim();
				// console.log(dict['TagName']);
				Tag['TagName']['Open'] = '<'+String(dict['TagName']);
				Tag['TagName']['Close'] = '</'+String(dict['TagName'])+'>';
				Tag['TagName']['Name'] = String(dict['TagName']);

				if (dict.hasOwnProperty('Variable')) {
					Tag['Variable'] = {};
					Tag['Variable'] = dict['Variable'];
				}
				if (dict.hasOwnProperty('Atribute')) {
					let DictAtribute = Object.keys(dict['Atribute']);
					for (let i = 0; i < DictAtribute.length; i++) {
						Tag['Atribute'] += ' ' + DictAtribute[i] + "='" + dict['Atribute'][DictAtribute[i]] + "'";
					}
				}
				if (dict.hasOwnProperty('Text')) Tag['Text'] = dict['Text'];

				Tag['Result'] = (Tag['TagName']['Open'] + Tag['Atribute'] + '>') + Tag['TagName']['Close'];
				Result = Tag;
			}

			return Result;
		}
}





var QueueTable = [];
var QueueTableDict = [];




class WidgetConstructor extends WFunction{

	// Bug: estegh shat vat bug ka vory xangarum e bolori ashxatanqin hertakanuteuny chisht chi talis
	// Html to Json
	GenWidgetFW_JSON(Tag){
		let Result = Trampoline_HtmlToJson(Tag);
		// kmakre avelnort datark itemneric bayec hetagayem erevi sa hanvi qani vor lav dzevi chi ashxati
		if(Result['TagName'] == 'body'){
			let ListObj = Object.keys(Result['Child']);
			for (let i = 0; i < ListObj.length; i++) {
				if(Object.keys(Result['Child'][ListObj[i]]).length == 0){
					delete Result['Child'][ListObj[i]];
				}
			}
		}
		return Result
	}
	// man e galis bolor harevan elementnery bolory anxndir minchev verj
	// menak chi mtnum ir erexai koderi mej ete ayen ka eli harevaner uremn eli sran kdime heto kveradardzne
	CtorGenQueue(dict){





		var QueueTable = this.isQueue(dict);

		if (this.isQueueNamber(QueueTable) === false) {
			let dictNew = {};
			dictNew['0'] = {};

			dictNew['0'] = dict;
			QueueTable = this.isQueue(dictNew);
			dict = dictNew;

		}

		let Result = '';
		let QueueTableItem = '';
		let isQueueList = [];
		for (let i = 0; i < QueueTable.length; i++) {
			QueueTableItem = this.GetKeyObj(dict,QueueTable[i]);
			isQueueList = this.isQueue(QueueTableItem);
			if (this.isQueueNamber(isQueueList)) {
				for (let X = 0; X < isQueueList.length; X++) {
					QueueTable.push([QueueTable[i],isQueueList[X]].join().split(','));
				}
			}
			else{

				if (QueueTableItem.hasOwnProperty('Child')) {
					isQueueList = this.isQueue(QueueTableItem);
					if (this.isQueueNamber(isQueueList)) {
						for (let X = 0; X < isQueueList.length; X++) {
							QueueTable.push([QueueTable[i],'Child',isQueueList[X]].join().split(','));
						}
					}
					else{
						if (QueueTableItem.hasOwnProperty('Child')) {
							QueueTable.push([QueueTable[i],'Child'].join().split(','));
						}
					}
				}
			}
			QueueTableDict.push(QueueTableItem);
		}

		Result = [QueueTable,QueueTableDict];
		return Result;
	}


	CreateHtml(dict,place,type){
		// zroeacnum e arjeknery
		QueueTable = [];
		QueueTableDict = [];

		

		function AddHTMLTable(Table,TagPos,ResultAdd){
			var Result = '';

			if (Table.length == 0) {
				Table.push(ResultAdd);
			}
			else{
				Table = GetKeyArray(Table,TagPos,ResultAdd);
				// console.log(Table);
			}
			return Table
		}
		var Result = '';
		Result = this.CtorGenQueue(dict);
		for (let i = 0; i < Result[0].length; i++) {

			if (this.isQueueNamber(this.isQueue(Result[1][i]))) {
				Result[0][i] = '_';
				Result[1][i] = '_';
			}
			else{
				Result[1][i] = this.CtorGenHTML(Result[1][i]);
			}
		}


		Result = {
			"Pos": Result[0],
			"Result": Result[1]
		}
		this.jsonToHtml(Result,place,type);
	}


	jsonToHtml(dict,place,type) {
		if (!type) type = 'CreateEl';
		let Poses = dict['Pos'].replaceArray('_');
		let Tags = dict['Result'].replaceArray('_');
		let Pos,Tag,Demo;

		$('body').append(`<span id="${type}"></span>`);
		Demo = $(`#${type}`);


		for (let i = 0; i < Poses.length; i++) {
			Demo = $(`#${type}`);
			Tag = Tags[i];
			Pos = Poses[i];


			Pos = Pos.replaceLastArr();
			Pos = Pos.replaceArray('Child');

			// console.log(Pos);

			for (let X = 0; X < Pos.length; X++) {
				Demo = $(Demo.children()[Pos[X]]).last();
			}

			Demo.append(Tag['Result']);
			Demo.children().last().text(Tag['Text']);

			if (Tag.hasOwnProperty('Variable')) {
				Demo.children().last().attr('var-name',Tag['Variable']['Name']);
			}
		}
		$(`#${type}`).children().clone().appendTo(place);
		$(`#${type}`).remove();
	}


	Create(dict,place,Variable){
		
		$('body').append('<span id="CreateElTemp"></span>');

		this.CreateHtml(dict,'#CreateElTemp');

		if (Variable){
			$('body').append('<span id="CreateElVariable"></span>');
			let VarKey = Object.keys(Variable);
			for (let i = 0; i < VarKey.length; i++) {

				if (Variable[VarKey[i]].hasOwnProperty('data')){

					if (Variable[VarKey[i]]['data'].hasOwnProperty('Atribute')){
						let KeysAtribute = Object.keys(Variable[VarKey[i]]['data']['Atribute']);
						for (let X = 0; X < KeysAtribute.length; X++) {
							$(`[var-name="${VarKey[i]}"]`).attr(KeysAtribute[X],Variable[VarKey[i]]['data']['Atribute'][KeysAtribute[X]]);
						}
					}
					if (Variable[VarKey[i]]['data'].hasOwnProperty('Text')){
						$(`[var-name="${VarKey[i]}"]`).text(Variable[VarKey[i]]['data']['Text']);
					}
				}
				else{
					$('body').append('<span id="VatibleTemp"></span>');

					this.CreateHtml(Variable[VarKey[i]],'#VatibleTemp');

					$(`[var-name="${VarKey[i]}"]`).replaceWith($('#VatibleTemp').children());


				}
			}
		}
		$('[var-name]').removeAttr('var-name');

		$('#CreateElTemp').children().clone().appendTo(place);
		$('#CreateElTemp, #CreateElVariable, #VatibleTemp').remove();

	}
}
var WF = new WidgetConstructor();



class FrontEndConstructorView {
	SetEvent(dict){
		// vercnum e amboghc cucaky class-neri anunerov
		let ListDict = Object.keys(dict);
		let Node;
		// pttvum e dranc vra
		for (let i = 0; i < ListDict.length; i++) {
			Node = dict[ListDict[i]];
			// ete css ka mejy apa mtnum e 
			if (Node.hasOwnProperty('css')) {
				// vercnum e media size style adaptaciv ekrani hamar css-nery
				let ListMediaCss = Object.keys(Node['css']);
				let Selector = '';
				for (let X = 0; X < ListMediaCss.length; X++) {
					let ListCssSelector = Object.keys(Node['css'][ListMediaCss[X]]);
					for (let Z = 0; Z < ListCssSelector.length; Z++) {
						if (ListCssSelector[Z] == 'this') {
							Selector = ListDict[i];
						}
						else{
							Selector = ListDict[i] + ListCssSelector[Z];
						}
						this.SetCssStyle(Selector,Node['css'][ListMediaCss[X]][ListCssSelector[Z]],ListMediaCss[X]);
					}

				}
			}
		}
	}
	SetCssStyle(selector,dict,screenNameStyle){

		if (!dict || Object.keys(dict).length == 0) return;
		let DictLentList = Object.keys(dict);


		var AllStayleCss = '';
		var listKeysCss = [];
		var value = '';
		var after = '';
		var before = '';
		var NewDict;

		for (let X = 0; X < DictLentList.length; X++) {
			NewDict = dict[DictLentList[X]];
			listKeysCss = NewDict['list'];
			value = NewDict['value'];
			after = NewDict['after'];
			before = NewDict['before'];

			for (let i = 0; i < listKeysCss.length; i++) {
				AllStayleCss += listKeysCss[i] + ':' + before + value + after + ';';
			}
			this.SetStyle(selector,AllStayleCss,screenNameStyle);
		}
	}
	// stayle-i mej kod-y avelacnum e jnjum e
	// sranic ka zero-i class-i mej
	SetStyle(selector,css,screenNameStyle){
		var bool = true;
		if (css == '' || css == ' ' || css == '_') {
			bool = false;
		}
		selector = '.'+selector;
		var css = selector + ' { '+css+' }  ',
		style = $(`[data-screens-style-size='${screenNameStyle}']`)[0];
		let styleText = $(style).text();

		let styleTextIndexFrest = styleText.search(selector+' {');


		if (styleTextIndexFrest != -1) {
			let styleTextIndexLast = styleText.substring(styleTextIndexFrest,styleTextIndexFrest.length).search('}') + styleTextIndexFrest;
			var afterRemove = styleText.split('').splice(0, styleTextIndexFrest).join('');

			var afterRemove2 = styleText.split('').splice(styleTextIndexLast+1,styleText.length).join('');

			$(style).text(afterRemove+afterRemove2);
		}

		style.type = 'text/css';
		if (style.styleSheet){
			// This is required for IE8 and below.
			style.styleSheet.cssText = css;
		} else {
			if (bool) {
				style.appendChild(document.createTextNode(css));
			}
		}
	}
}

var FWK = new FrontEndConstructorView();