// Html tree inspector

// esteghic minchev verj mek function e katarvum
// hetagaeum kareli e class-i mej dnel

function HtmlTreeTable(Caret) {
		// let NestedArr = '';
		// if (!Nested || Nested.length == 0) NestedArr = '';
		// else{
		// 	console.log('mtav');
		// 	for (let i = 0; i < Nested.length; i++) {
		// 		NestedArr += `<li>${Nested[i][0]}</li>`
		// 	}
		// }
		// mnacac-y heto kanenk
		return [
			`<li class="htmlTreeContainer contextmenuTrue">
			<span class='CaretPrevNextElContainer'>
				<span class='CaretPrevNextElPrev'></span>
				<span class='CaretPrevNextElNext'></span>
			</span>
				<span class="caret" data-artbord-caret="${Caret[1]}" title='${Caret[0]}'>${Caret[0]}</span>
				<ul class="nested"></ul>
			</li>`
			].join('');
}

// vercnum e tvial  tag-y ev veradzrdznum e hetevyal kerp :> [Tag#Id.Class]
function HtmlTreeTableGen(FW_JSON) {
	let ThisTag = ['','',['','']];

	if (FW_JSON.hasOwnProperty('Atribute')) {
		if (FW_JSON['Atribute'].hasOwnProperty('data-tag-name')) {
			ThisTag[0] = FW_JSON['Atribute']['data-tag-name']
		}
		if(FW_JSON['Atribute'].hasOwnProperty('data-artboard')){
			ThisTag[1] = FW_JSON['Atribute']['data-artboard'];
		}
		if(FW_JSON['Atribute'].hasOwnProperty('id')){
			ThisTag[2][0] = FW_JSON['Atribute']['id'];
		}
		if(FW_JSON['Atribute'].hasOwnProperty('class')){
			ThisTag[2][1] = FW_JSON['Atribute']['class'];
		}
	}

	return ThisTag;
}


// sra lriv nmany ka node-i bajni class neri nuyn metodti anunov
function CtorGenQueue(dict){
	var QueueTableDictHtmlTree = [];
	var QueueTable = WF.isQueue(dict);

	if (WF.isQueueNamber(QueueTable) === false) {
		let dictNew = {};
		dictNew['0'] = {};

		dictNew['0'] = dict;
		QueueTable = WF.isQueue(dictNew);
		dict = dictNew;

	}

	let Result = '';
	let QueueTableItem = '';
	let isQueueList = [];
	for (let i = 0; i < QueueTable.length; i++) {
		QueueTableItem = WF.GetKeyObj(dict,QueueTable[i]);
		isQueueList = WF.isQueue(QueueTableItem);
		if (WF.isQueueNamber(isQueueList)) {
			for (let X = 0; X < isQueueList.length; X++) {
				QueueTable.push([QueueTable[i],isQueueList[X]].join().split(','));
			}
		}
		else{

			if (QueueTableItem.hasOwnProperty('Child')) {
				isQueueList = WF.isQueue(QueueTableItem);
				if (WF.isQueueNamber(isQueueList)) {
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
		QueueTableDictHtmlTree.push(HtmlTreeTableGen(QueueTableItem));
	}
	Result = [QueueTable,QueueTableDictHtmlTree];
	return Result;
}


function GenHtmlTree(FW_JSON){
		let Tag,TagPos,TagDemoResult,TagPosNew,TagDemo,TagsPos,Tags;
		let FW_ALL_ITEM = FW_JSON;
		let FW_ALL_ITEM_LEN = 1;


		TagDemo = $('#HtmlTreeContentMyUL');
		TagDemo.html('');

		for (let i = 0; i < FW_ALL_ITEM_LEN; i++) {
			TagsPos = FW_ALL_ITEM[0];
			Tags = FW_ALL_ITEM[1];
			for (let DemoI = 0; DemoI < TagsPos.length; DemoI++) {
				TagDemo = $('#HtmlTreeContentMyUL');
				TagPos = TagsPos[DemoI];
				Tag = Tags[DemoI];
				// makrum e avelnord itemneric
				TagPos = TagPos.replaceLastArr()
				
				TagPos = TagPos.replaceArray('Child');

				TagDemoResult = HtmlTreeTable(Tag);

				for (let X = 0; X < TagPos.length; X++) {
					// console.log(TagPos[X]);
					TagDemo = $(TagDemo.children()[TagPos[X]]).children('.nested');
					TagDemo = $(TagDemo);
				}
				TagDemo.append(TagDemoResult);
			}

		}
}


// adabtativ ekran
function adapdationWindow(){
	var $window = $(window),
	$element = $('#ArtBoard'),

	elementPos = $element.position(),

	elementLeft = $element.offset().left,
	elementWidth = $element.width(),
	viewportWidth = $window.width(),

	scrollItY = elementPos.top - 100;
	scrollItX = elementLeft - ((viewportWidth - elementWidth) / 2);

	$window.scrollTop(scrollItY);
	$window.scrollLeft(scrollItX);
}




// veradardznum e tivy tvi tesqov bool-y bool-i string-y stringi
function GetRealBoolean(val,action){
	let Result;
	if (action == undefined) action == 'int';

	if (action == 'int') {
		Result = parseInt(val);
	}
	else if ('float'){
		Result = parseFloat(val);
	}
	if (val == true || val == false || val == 'true' || val == 'false') {
		if (val == 'true') Result = true;
		else if (val == 'false') Result = false;
		else Result = val;
	}
	else{
		if (isNaN(Result)) {
			Result = String(val);
		}
	}
	return Result;

}







class FrontEndConstructor {
// change text
// text-y popoxuteuneri entargelu hamar gorcoghuteunery
	TextEdit($target,action){
		if (!$target || typeof $target != 'object') return;
		if (!action) action = 'open';
		$target = $($target);
		// toggle
		if (action == 'toggle') {
			if ($('#headerTextEdit').css('display') == 'none') action = 'open';
			else action = 'close';
		}
		if (!$('[contenteditable="true"]').text().isEmpty()) {
			$('[contenteditable="true"]').removeClass('empty-block empty');
		}

		if (action == 'open' && $target.attr('contenteditable') != 'true') {
			$('[contenteditable="true"]').removeAttr('contenteditable');
			$('#headerBase').fadeOut(400).css('top','-60px');
			$('#headerTextEdit').fadeIn(400).css('top','0');
			$target.attr('contenteditable',true);
			$target.focus();
			$('#headerTextEdit-fontSize').text(($target.css("font-size")));
		}
		else if (action == 'close') {
			$('#headerTextEdit').fadeOut(400).css('top','-60px');
			$('#headerBase').fadeIn(400).css('top','0');

			if ($('[contenteditable="true"]').text().isEmpty()) {
				$('[contenteditable]').find('br').remove();
				$('[contenteditable]').addClass('empty-block');
			}
			else{
				$('[contenteditable]').find('br').remove();
				$('[contenteditable="true"]').removeClass('empty-block empty');
			}
			$('[contenteditable]').find('br').remove();
			$('[contenteditable="true"]').removeAttr('contenteditable');
		}
	}
	// text-y popoxuteuneri entargelu hamar
	TextEditExecStyle(aCommandName,aShowDefaultUI,aValueArgument){
		if (!aCommandName) return;
		if (!aShowDefaultUI) aShowDefaultUI = false;
		if (!aValueArgument) aShowDefaultUI = null;

		document.execCommand(aCommandName,aShowDefaultUI,aValueArgument);

		$('[contenteditable="true"]').focus();


		// if active button real time change element
		if (RealTime == true) FW.saveProject();
	}
	// stayle-i mej kod-y avelacnum e jnjum e
	SetStyle(selector,css){
		let bool = true;
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
	// css-i selectorneri hamar e
	changeSelectorCss(selector,action){
		if (!action) action = '_';
		if (action == '_') {
			$('#SelectorCss_item-sel').text(selector).show();
			$('#SelectorCss_item-sel-remove').show();
			this.replaceStyleManager(selector);
		}
		// remove this selector
		else if (action == 'remove') {
			if (confirm("Remove selector?") == false) return;
			if (selector == 'this') {
				alert("not selected selector");
				return;
			}
			$('#SelectorCss_item-sel').text('this').hide();
			$('#SelectorCss_item-sel-remove').hide();
			if (AllStyleManager.hasOwnProperty(ArtBoardId) && AllStyleManager[ArtBoardId].hasOwnProperty('css')) {
				// console.log('mtav');
				if (AllStyleManager[ArtBoardId]['css'].hasOwnProperty(screenNameStyle)) {
					if (AllStyleManager[ArtBoardId]['css'][screenNameStyle].hasOwnProperty(selector) && selector != 'this') {
						delete AllStyleManager[ArtBoardId]['css'][screenNameStyle][selector];

						this.SetStyle(ArtBoardId+selector,'_');
					}
				}
			}
		}
		else if (action == 'add') {
			if (selector.isEmpty()) {
				alert("input is Empty");
				return;
			}
			if (!AllStyleManager.hasOwnProperty(ArtBoardId)) AllStyleManager[ArtBoardId] = {};
			if (!AllStyleManager[ArtBoardId].hasOwnProperty('css')) AllStyleManager[ArtBoardId]['css'] = {};
			if (!AllStyleManager[ArtBoardId]['css'].hasOwnProperty(screenNameStyle)) AllStyleManager[ArtBoardId]['css'][screenNameStyle] = {};
			if (!AllStyleManager[ArtBoardId]['css'][screenNameStyle].hasOwnProperty(selector)) {
				AllStyleManager[ArtBoardId]['css'][screenNameStyle][selector] = {};
				$('#addSelectorCss').hide();
				$('#addSelectorCssInput').val('');
				$('#container-all-SelectorCss').append(`<div class="SelectorCss_item" onclick="FW.changeSelectorCss($(this).text())" data-selector-css='${selector}'>${selector}</div>`);
			}
			else{
				alert('arden ka ayed selectoric');
			}
		}
	}
	changeSizeWindow($target){
		$target = $($target)
		let screen = $target.data('screens-size');
		$('[data-screens-size]').css('opacity',0.3);
		$target.css('opacity',1);


		screenNameStyle = screen;
		// knopkekin kbere skazbnakan arjekin select css active selecror
		$('#SelectorCss_item-sel').text('this').hide();
		$('#SelectorCss_item-sel-remove').hide();
		this.replaceStyleManager('this',screenNameStyle,'remove');
		this.replaceStyleManager('this','all',"_");
		if (screenNameStyle != 'all') {
			this.replaceStyleManager('this',screenNameStyle,"_");
		}

		var window_size = parseInt(screen.split('-')[1]);
		
		if (isNaN(window_size)){
			if (screen == 'SCREENS_1200' || screen == 'all') {
				window_size = '100%';
			}

		}

		$("[data-screens-style-size]").not("[data-screens-style-size='all']").attr("type","deactivate/text");
		$(`[data-screens-style-size='${screen}']`).attr("type","text/css");

		$('.ZeroBlock-View-size').width(window_size);

		adapdationWindow();
	}

	replaceStyleManager(selector,screenNameStyleTemp,remove,action){
		if (!selector) selector = 'this';
		if (!screenNameStyleTemp) screenNameStyleTemp = screenNameStyle;
		if (action == undefined) action = '_'; 
		// naxqan bun function-in ancnely togh amen inch jnji
		if (!remove || remove == 'remove') {
			if (action == 'anime') {
				$("#animeManagerForm .base-StyleManager-slide:contains(Animation)").hide();
				$("#animeManagerForm .base-StyleManager-slide:contains(Animation)").next().hide();

				$('#settings-anime-steps-container-head').children().addClass('settings-anime-step-active');
				$('#lable-step-index').text('Start');
				$('#settings-anime-steps-container-body').html('');

				// jnjum e input-neri u selectneri naxkin arjeky 
				$('#animeManagerForm').find('input').val('');
				// man e galis select-taery
				$('#animeManagerForm').find('select').val('');



				$("#animeManagerForm .base-StyleManager-slide:contains(Settings)").show();
				$("#animeManagerForm .base-StyleManager-slide:contains(Settings)").next().show();
			}
			else{
				// nax arajiny kjnje input-i mejinery

				$('#styleManagerForm .StayleManager').find('input').val('');

				// man e galis select-taery
				let select = $('#styleManagerForm .StayleManager').find('select');
				let selectVal = '';
				// pttvum e aed teger shurj ev vercnum e tvial tag-i arajin erexai aejeky ev ed arjeky skzbnakan arjek kdarna
				for (let i = 0; i < select.length; i++) {
					selectVal = $(select[i]).find('option').first().val();
					$(select[i]).val(selectVal);
				}
				// selecrot-neri bajnic jnjum e amen inch
				$('#container-all-SelectorCss').html('');

				// makrum e color-i arjekneric

				$('[data-input-id="TextColor"]').spectrum("set", "");
				$('[data-input-id="BackgroundColor"]').spectrum("set", "");
				$('[data-input-id="borderColor"]').spectrum("set", "");
				$('[data-input-id="outlineColor"]').spectrum("set", "");
				if (remove == 'remove') return;
			}
			// reset e anum bolor animationnery
			let obj = Object.keys(AllStyleManagerTempAnime);
			for (let i = 0; i < obj.length; i++) {
				AllStyleManagerTempAnime[obj[i]]['data'].reset();
			}
		}



		// arden kskse verakangnoghakan ashxatanqnery

		var dict = AllStyleManager;
		var listCssSelectors = [];
		var dictThis = {};
		var dictThisInput = [];
		var value = '';

		if (action != '_') {
			if (action == 'anime') {
				if (AllStyleManager.hasOwnProperty(ArtBoardId) == false) AllStyleManager[ArtBoardId] = {};
				if (AllStyleManager[ArtBoardId].hasOwnProperty('anime') == false) AllStyleManager[ArtBoardId]['anime'] = {};
				if (AllStyleManager[ArtBoardId]['anime'].hasOwnProperty('all') == false) AllStyleManager[ArtBoardId]['anime']['all'] = {};
				dict = AllStyleManager[ArtBoardId]['anime'];

				if (dict['all'].hasOwnProperty("Start") == false) dict['all']['Start'] = {};

				let length = Object.keys(dict['all']).length-1;

				for (let i = 0; i < length; i++) {
					this.AddItemStepAnime("+");
				}




				var dictListStart = dict['all']['Start'];
				var dictListStart_obj = Object.keys(dictListStart);
				var value = '';
				for (let i = 0; i < dictListStart_obj.length; i++) {
					value = dictListStart[dictListStart_obj[i]]['value'];
					$('#animeManagerForm').find(`[data-input-id="${dictListStart_obj[i]}"]`).val(value);
				}




			}
			return;
		}


		if(dict.hasOwnProperty(ArtBoardId)){
			dict = AllStyleManager[ArtBoardId];
			// ete ayn datak e apa voch mi ban el chi ani
			if (Object.keys(dict).length != 0 && dict.hasOwnProperty('css')) {
				dictThis = dict['css'][screenNameStyleTemp];
				if (!dictThis) return;


					listCssSelectors = Object.keys(dictThis).replaceArray('this');
					// $('#container-all-SelectorCss').html('');
					for (let X = 0; X < listCssSelectors.length; X++) {	
						// css-i Selector-nery kavelacne
						$('#container-all-SelectorCss').append(`<div class="SelectorCss_item" onclick="FW.changeSelectorCss($(this).text())" data-selector-css='${listCssSelectors[X]}'>${listCssSelectors[X]}</div>`);
					}

				if (!dictThis.hasOwnProperty(selector)) return;
				dictThisInput = Object.keys(dictThis[selector]);

				for (let X = 0; X < dictThisInput.length; X++) {
					value = dictThis[selector][dictThisInput[X]];

					$(`[data-input-id="${dictThisInput[X]}"]`).not($(`[data-input-id="${dictThisInput[X]}"]`).parents('#animeManagerForm')).not($(`[data-input-id="${dictThisInput[X]}"]`).parents('#jqueryManagerForm')).val(value['value']);
					// color-picer-i hamar ete sa chlini apa dra gueny chi popoxvi
					if (dictThisInput[X] == 'TextColor') {
						$('[data-input-id="TextColor"]').spectrum("set", value['value']);	
					}
					if (dictThisInput[X] == 'BackgroundColor') {
						$('[data-input-id="BackgroundColor"]').spectrum("set", value['value']);
					}
					if (dictThisInput[X] == 'borderColor') {
						$('[data-input-id="borderColor"]').spectrum("set", value['value']);
					}
					if (dictThisInput[X] == 'outlineColor') {
						$('[data-input-id="outlineColor"]').spectrum("set", value['value']);
					}
					// ir clone elementi hamr 

					if ($(`[data-input-select-id="${dictThisInput[X]}-unit"]`).length >= 1) {
						$(`[data-input-select-id="${dictThisInput[X]}-unit"]`).not($(`[data-input-id="${dictThisInput[X]}"]`).parents('#animeManagerForm')).not($(`[data-input-id="${dictThisInput[X]}"]`).parents('#jqueryManagerForm')).val(value['after']);
					}
				}
			}
		}

	}
	// yndgcum el elementy
	SelectedEl($target,dbleSelect,actionTarget){
		if (!actionTarget) actionTarget = true;
		else if (actionTarget == 'Next') actionTarget = 10;
		else if (actionTarget == 'Prev') actionTarget = 'Prev';
		else actionTarget = false;
		if (dbleSelect) {
			var elements = {
				containerEl : $('#containerSelectorElements_Dble'),
				top: $('#SelectorElementsTop_Dble'),
				left: $('#SelectorElementsLeft_Dble'),
				right: $('#SelectorElementsRight_Dble'),
				bottom: $('#SelectorElementsDown_Dble'),
				pos: $('#SelectorElementPos'),
				info : $('#SelectorElementsInfo')
			};
		}
		else{
			var elements = {
				containerEl : $('#containerSelectorElements'),
				top: $('#SelectorElementsTop'),
				left: $('#SelectorElementsLeft'),
				right: $('#SelectorElementsRight'),
				bottom: $('#SelectorElementsDown'),
				pos: $('#SelectorElementPos'),
				info : $('#SelectorElementsInfo')

			};
		}

		if ($target == '_') {
			elements.containerEl.hide()
			return;
		}
		if ($target.parents('#ArtBoard').length == 1 || $target.attr('id') == 'ArtBoard') {

			elements.containerEl.show();
			let targetOffset = $target[0].getBoundingClientRect();
			let targetHeight = targetOffset.height;
			let targetWidth  = targetOffset.width;
			let VarSelectedEl = $target;

			elements.top.css({
				top:   (targetOffset.top)
			});

			elements.bottom.css({
				top:   (targetOffset.top + targetHeight)
			});

			elements.left.css({
				left:   (targetOffset.left)
			});

			elements.right.css({
				left:   (targetOffset.left + targetWidth)
			});
			if (!dbleSelect) {
				$('#SelectorElementsInfoContainer').css({
					top:   (targetOffset.top),
					left: (targetOffset.left)
				});
				elements.info.text($target.data('tag-name'))
				elements.info.css({
					top:   (targetOffset.top-25),
					left: (targetOffset.left)
				});
			}
			if (actionTarget) {
				
				elements.pos.show();
			}
			var targetOffsetPos = (targetOffset.top + targetHeight-5 + actionTarget);
			if (actionTarget == 'Prev') targetOffsetPos = targetOffset.top-5;
				elements.pos.css({
					width: targetWidth-20,
					left:   (targetOffset.left+10),
					top:   targetOffsetPos
				});

		}
		else{
			elements.containerEl.hide();
			VarSelectedEl = '_';
		}
	}
	saveProject(action){
		if (!action) action = '_';
		if ($('#HideBlock').css('display') != 'none') return;
		let TagDict = WF.GenWidgetFW_JSON($('#ArtBoard'));

		if (TagDict.hasOwnProperty('Child')) {
			TagDict = TagDict['Child'];
		}
		else{
			TagDict = {};
		}
		let massageDict = {
			"html":TagDict,
			"ZeroBlockManager":AllStyleManager,
			"recordId": recordId
		}
		SendEmit('EditZeroBlockSave',massageDict);
		if (RealTime == false || action != '_') {
			$('#saveBlockAlert').fadeIn(300);
			setTimeout(function(){ $('#saveBlockAlert').fadeOut(300); }, 1000);
		}
	}
	parentsElListShow($target,action){
		if (!$target) $target = '_';
		let parentsElBar = $('#parentsElBar');
		if (!action) {
			if (parentsElBar.css('display') == 'none') {
				action = 'open';
			}
			else{
				action = 'close';
			}
		}

		// # parentsElListCreate
		parentsElBar.html('');

		// Create
		if ($target != '_') {
			let ListAll = [];
			let parentsList = $target.parents(); // vercnum e bolor cnoghnerin tvyal element-i
			//ete tvyal element-y glxavorn e apa cnoghneri popoxakany 0-eacnum e vor for-i mej chmtni
			if ($target.attr('id') == 'ArtBoard') parentsList = 0;

			// pttvum e amboghj cnoghneri vraeov ev yntrum e ir uzac cnoghnery
			for (let i = 0; i < parentsList.length; i++) {

				ListAll.push($(parentsList[i]));
				// ete hasav glxavor cnoghin mer uzac apa cikly kkangnecne
				if ($(parentsList[i]).attr('id') == 'ArtBoard') {
					break;
				}
			}
			// verjum avelacnum e henc tvyal element-y ListAll-sikzby
			ListAll.unshift($target);
			// gorcy hascnenk avartin
			for (let i = ListAll.length - 1; i >= 0; i--) {
				parentsElBar.append(`<div class="parentsEl" style="z-index:${i};" data-parents-this-el='${ListAll[i].data('artboard')}' title="${ListAll[i].data('artboard')}")>\
					${ListAll[i].data('tag-name')}</div>`);
			}
			// console.log(ListAll);
		}

		if (action == 'open') {
			$('#fix-bar-settings-btn').css('bottom','50px')
			parentsElBar.fadeIn(100);
		}
		else if(action == 'close'){
			$('#fix-bar-settings-btn').css('bottom','15px')
			parentsElBar.fadeOut(100);
		}
	}
	TreeHtmlShow(Tag){

		if (!Tag || Tag == '_') Tag = $('#ArtBoard');


		let FW_JSON = WF.GenWidgetFW_JSON(Tag)



		let NEW_FW_JSON = CtorGenQueue(FW_JSON);
			for (let i = 0; i < NEW_FW_JSON[1].length; i++) {
				if (NEW_FW_JSON[1][i][0] === undefined || NEW_FW_JSON[1][i][0].isEmpty()){
					NEW_FW_JSON[0][i] = "_";
					NEW_FW_JSON[1][i] = "_";
				}
			}

			// makrum e avelnordnery
			NEW_FW_JSON[0].replaceArray('_')

		NEW_FW_JSON[0] = NEW_FW_JSON[0].replaceArray('_');
		NEW_FW_JSON[1] = NEW_FW_JSON[1].replaceArray('_');


		GenHtmlTree(NEW_FW_JSON);
	}
	AddBlockManagerNameWarn(dataTagName,AddBlockManagerNameTemp){
		var $target = dataTagName;
		dataTagName = $target.data('tag-name');

		if (!AddBlockManagerNameTemp) AddBlockManagerNameTemp = AddBlockManagerName;
		var IfAddBlockBool = false;
		// element-y teghadrum e chisht teghum ete chi tulatrvum div-i mej button dnely apa chi toghni u kzgushacne
		if (AddBlockManagerNameTemp != '_') {
			var IfAddBlock = AddBlockManagerIf[dataTagName]['action'];

			// but
			if (AddBlockManagerIf.hasOwnProperty(dataTagName) && IfAddBlock == 'but') {
				$('#warning-alert').hide();
				if(AddBlockManagerIf[dataTagName]['list'].indexOf(AddBlockManagerNameTemp) != -1){
					$('#warning-alert').show();
				}
			}
			else{
				if (IfAddBlock == 'but') {
					IfAddBlockBool = false;
					$('#warning-alert').hide();
				}
			}
			var BoolIfOnly = false;
			if (IfAddBlock == 'only') {
				if (AddBlockManagerIf.hasOwnProperty(dataTagName)) {
					if(AddBlockManagerIf[dataTagName]['list'].indexOf(AddBlockManagerNameTemp) != -1){
						BoolIfOnly = true;
					}
				}
				else{
					BoolIfOnly = false; 
				}

				if (BoolIfOnly == true) {

					$('#warning-alert').hide();
					IfAddBlockBool = true;
				}
				$('#warning-alert').show();

			}
			if (IfAddBlockBool == true) {
				$('#warning-alert').hide();
			}
		}
		if (AddBlockManagerIf.hasOwnProperty(AddBlockManagerNameTemp)) {

			if (AddBlockManagerIf[AddBlockManagerNameTemp].hasOwnProperty('past_only')) {
				if(AddBlockManagerIf[AddBlockManagerNameTemp]['past_only'].indexOf(dataTagName) != -1){
					$('#warning-alert').hide();
				}
				else{
					$('#warning-alert').show();
				}
			}
			if (AddBlockManagerIf[AddBlockManagerNameTemp].hasOwnProperty('if_parents')) {


				var if_parentsElObj = AddBlockManagerIf[AddBlockManagerNameTemp]['if_parents'];
				var itemParents;
				var if_parentsCounter = 0;

				for (let i = 0; i < Object.keys(if_parentsElObj).length; i++) {
					if_parentsCounter = 0;
					itemParents = [Object.keys(if_parentsElObj)[i], if_parentsElObj[Object.keys(if_parentsElObj)[i]]];


					if ($target.parents(`[data-tag-name="${itemParents[0]}"]`).length > 0){
						if_parentsCounter = if_parentsCounter + $target.parents(`[data-tag-name="${itemParents[0]}"]`).length;
					}
					if ($target.is(`[data-tag-name="${itemParents[0]}"]`)) {
						if_parentsCounter++;
					}
					if (if_parentsCounter >= itemParents[1]) {
						$('#warning-alert').show();
					}

				}
			}
			// if_in_parents
			if (AddBlockManagerIf[AddBlockManagerNameTemp].hasOwnProperty('if_in_parents')) {

				var list_if_in_parents = AddBlockManagerIf[AddBlockManagerNameTemp]['if_in_parents'];
				var boolInTag = false;

				for (let i = 0; i < list_if_in_parents.length; i++) {
					if ($target.parents(`[data-tag-name="${list_if_in_parents[i]}"]`).length > 0 || $target.is(`[data-tag-name="${list_if_in_parents[i]}"]`)){
						boolInTag = true;
					}
				}

				if (boolInTag == false) {
					$('#warning-alert').show();
				}
			}
		}



	}
	isEmptyArdbords(action,$target){
		if (action && $target){
			if (action == 'remove') {
				if ($target.attr('id') == 'ArtBoard' || $target.data('no-empty') != undefined) return;
				$target.removeClass('empty-block empty');
			}
		}
		else{
			let AllArtboard = $('[data-artboard]');
			for (let i = 0; i < AllArtboard.length; i++) {
				if ($(AllArtboard[i]).attr('id') == 'ArtBoard' || $(AllArtboard[i]).data('no-empty') != undefined) continue;
				if ((($(AllArtboard[i]).children().length == 0) || 
					($(AllArtboard[i]).children().length == 1 && $(AllArtboard[i]).children('#MoveElThisSpan').length == 1)) && $(AllArtboard[i]).text().isEmpty()) {
					if ($(AllArtboard[i]).is('[onclick="FW.TextEdit(this)"]')){
						$(AllArtboard[i]).addClass('empty-block');
					}
					else{
						$(AllArtboard[i]).addClass('empty');
					}
				}
				else{
					$(AllArtboard[i]).removeClass('empty-block empty');
				}
			}
		}
	}
	EventEdit(action,ArtBoardId_Temp){
		if (ArtBoardId_Temp == undefined) ArtBoardId_Temp = ArtBoardId;
		if (action == 'remove') {
			// ete element-y nshvac e
			if ($('#containerSelectorElements').css('display') != 'none' && ArtBoardId_Temp != recordId) {
				var $ArtBoardId = $(`.${ArtBoardId_Temp}`);
				if ($ArtBoardId.data('parent-remove') != undefined) {
					$ArtBoardId = $ArtBoardId.parent();
					console.log('mtav');
				}
				var moveSelectElChildrens = $ArtBoardId.find('[data-artboard]');


				let elItem = '';
				for (var i = 0; i < moveSelectElChildrens.length; i++) {
					elItem = $(moveSelectElChildrens[i]);
					// jnjum e AllStyleManager-dict-ic amen inch inch vor tvel enk te css te animation te event
					if (AllStyleManager.hasOwnProperty(elItem.data('artboard'))) {
						delete AllStyleManager[elItem.data('artboard')];
						FW.SetStyle(elItem.data('artboard'),'_',screenNameStyle);
					}
				}

				if (AllStyleManager.hasOwnProperty($ArtBoardId.data('artboard'))) {

					delete AllStyleManager[$ArtBoardId.data('artboard')];

					FW.SetStyle($ArtBoardId.data('artboard'),'_',screenNameStyle);
				}
				$ArtBoardId.remove();

				FW.TreeHtmlShow();

				moveSelectEl = '_';
				$('.SelectorElements').css('border-color','blue');
				$('#StyleManagerContainerbodyBlock').hide();

				if (ArtBoardId_Temp == undefined) {
					ArtBoardId = recordId;
					FW.SelectedEl('_');
					clicking_mousemoveSelectorEl = false;
				}

				FW.replaceStyleManager();
				FW.replaceStyleManager("this",screenNameStyle,"remove","anime");
				FW.isEmptyArdbords();

			}
			// if active button real time change element
			if (RealTime == true) FW.saveProject();
		}
		else if (action == 'duplicate') {
			console.log('duplicate');
		}
	}
	open_dropdownMenu_settings(action,value){
		// console.log(action,value);
		if (!value) value = '_';
		var $ArtBoardId = $(`.${ArtBoardId}`);
		if (action == 'open') {
			$('#SelectorElementsInfoContainer').fadeToggle(300);
			var TagName = $ArtBoardId.data('tagName');
			$('[data-artbord-id-menu]').hide();
			$(`[data-artbord-id-menu="${TagName}"]`).show();

			$('#seelctTagNameRecort').text($ArtBoardId.data('tagName'));
			$('#seelctTagNameRecortId').text($ArtBoardId.data('artboard'));
		}
		else if (action == 'Columns') {
			if($ArtBoardId.is('[data-tag-name="Columns"]')){
				var childrenItem = $ArtBoardId.children();
				// console.log(childrenItem);
				// console.log(action,value);
				let ArtBoardId_Temp_list = [];
				for (var i = 0; i < 4; i++) {
					ArtBoardId_Temp_list.push('_' + makeid(5)+'__ArtBoard');
				}

				var childrenItemLength = childrenItem.length;
				if (value == "6-6") {
					if (childrenItem.length > 2) {
						for (var i = 0; i < childrenItemLength - 2; i++) {
							childrenItem = $ArtBoardId.children();
							let childrenItemId = childrenItem.last().data('artboard');
							childrenItem.last().removeAttr('data-parent-remove');
							this.EventEdit('remove',childrenItemId);
						}
					}
					childrenItem = $ArtBoardId.children();
					childrenItem.removeClass('w-col-1 w-col-2 w-col-3 w-col-4 w-col-5 w-col-7 w-col-8 w-col-9 w-col-10 w-col-11 w-col-12');
					childrenItem.addClass('w-col-6');
				}
				else if (value == "4-4-4") {
					if (childrenItem.length > 3) {
						for (var i = 0; i < childrenItemLength - 3; i++) {
							childrenItem = $ArtBoardId.children();
							let childrenItemId = childrenItem.last().data('artboard');
							childrenItem.last().removeAttr('data-parent-remove');
							this.EventEdit('remove',childrenItemId);
						}
					}
					else if (childrenItem.length < 3) {
						var newChild = '';
						for (let i = 0; i < 3-childrenItemLength; i++) {
							childrenItem = $ArtBoardId.children();
							newChild = `<div class="empty w-row w-col w-col-4 ${ArtBoardId_Temp_list[i]}" data-tag-name="ColumnsItem" data-artboard="${ArtBoardId_Temp_list[i]}" data-parent-remove="true"></div>`;
							$ArtBoardId.append(newChild);
						}
					}
					childrenItem = $ArtBoardId.children();
					childrenItem.removeClass('w-col-1 w-col-2 w-col-3 w-col-5 w-col-6 w-col-7 w-col-8 w-col-9 w-col-10 w-col-11 w-col-12');
					childrenItem.addClass('w-col-4');
				}
				else if (value == "3-3-3-3") {
					if (childrenItem.length > 4) {
						for (var i = 0; i < childrenItemLength - 4; i++) {
							childrenItem = $ArtBoardId.children();
							let childrenItemId = childrenItem.last().data('artboard');
							childrenItem.last().removeAttr('data-parent-remove');
							this.EventEdit('remove',childrenItemId);
						}
					}
					else if (childrenItem.length < 4) {
						var newChild = '';
						for (let i = 0; i < 4-childrenItemLength; i++) {
							childrenItem = $ArtBoardId.children();
							newChild = `<div class="empty w-row w-col ${ArtBoardId_Temp_list[i]}" data-tag-name="ColumnsItem" data-artboard="${ArtBoardId_Temp_list[i]}" data-parent-remove="true"></div>`;
							$ArtBoardId.append(newChild);
						}
					}
					childrenItem = $ArtBoardId.children();
					childrenItem.removeClass('w-col-1 w-col-2 w-col-4 w-col-5 w-col-6 w-col-7 w-col-8 w-col-9 w-col-10 w-col-11 w-col-12');
					childrenItem.addClass('w-col-3');
				}
				else if (value == "3-9") {
					if (childrenItem.length > 2) {
						for (var i = 0; i < childrenItemLength - 2; i++) {
							childrenItem = $ArtBoardId.children();
							let childrenItemId = childrenItem.last().data('artboard');
							childrenItem.last().removeAttr('data-parent-remove');
							this.EventEdit('remove',childrenItemId);
						}
					}
					childrenItem = $ArtBoardId.children();
					childrenItem.removeClass('w-col-1 w-col-2 w-col-3 w-col-4 w-col-5 w-col-6 w-col-7 w-col-8 w-col-9 w-col-10 w-col-11 w-col-12');
					childrenItem.eq(0).addClass('w-col-3');
					childrenItem.eq(1).addClass('w-col-9');
				}
				else if (value == "9-3") {
					if (childrenItem.length > 2) {
						for (var i = 0; i < childrenItemLength - 2; i++) {
							childrenItem = $ArtBoardId.children();
							let childrenItemId = childrenItem.last().data('artboard');
							childrenItem.last().removeAttr('data-parent-remove');
							this.EventEdit('remove',childrenItemId);
						}
					}
					childrenItem = $ArtBoardId.children();
					childrenItem.removeClass('w-col-1 w-col-2 w-col-3 w-col-4 w-col-5 w-col-6 w-col-7 w-col-8 w-col-9 w-col-10 w-col-11 w-col-12');
					childrenItem.eq(0).addClass('w-col-9');
					childrenItem.eq(1).addClass('w-col-3');
				}
				else if (value == "2-8-2") {
					if (childrenItem.length > 3) {
						for (var i = 0; i < childrenItemLength - 3; i++) {
							childrenItem = $ArtBoardId.children();
							let childrenItemId = childrenItem.last().data('artboard');
							childrenItem.last().removeAttr('data-parent-remove');
							this.EventEdit('remove',childrenItemId);
						}
					}
					else if (childrenItem.length < 3) {
						var newChild = '';
						for (let i = 0; i < 3-childrenItemLength; i++) {
							childrenItem = $ArtBoardId.children();
							newChild = `<div class="empty w-row w-col ${ArtBoardId_Temp_list[i]}" data-tag-name="ColumnsItem" data-artboard="${ArtBoardId_Temp_list[i]}" data-parent-remove="true"></div>`;
							$ArtBoardId.append(newChild);
						}
					}
					childrenItem = $ArtBoardId.children();
					childrenItem.removeClass('w-col-1 w-col-2 w-col-3 w-col-4 w-col-5 w-col-6 w-col-7 w-col-8 w-col-9 w-col-10 w-col-11 w-col-12');
					childrenItem.eq(0).addClass('w-col-2');
					childrenItem.eq(1).addClass('w-col-8');
					childrenItem.eq(2).addClass('w-col-2');
				}
				else if (value == "2-3-5-2") {
					if (childrenItem.length > 4) {
						for (var i = 0; i < childrenItemLength - 4; i++) {
							childrenItem = $ArtBoardId.children();
							let childrenItemId = childrenItem.last().data('artboard');
							childrenItem.last().removeAttr('data-parent-remove');
							this.EventEdit('remove',childrenItemId);
						}
					}
					else if (childrenItem.length < 4) {
						var newChild = '';
						for (let i = 0; i < 4-childrenItemLength; i++) {
							childrenItem = $ArtBoardId.children();
							newChild = `<div class="empty w-row w-col ${ArtBoardId_Temp_list[i]}" data-tag-name="ColumnsItem" data-artboard="${ArtBoardId_Temp_list[i]}" data-parent-remove="true"></div>`;
							$ArtBoardId.append(newChild);
						}
					}
					childrenItem = $ArtBoardId.children();
					childrenItem.removeClass('w-col-1 w-col-2 w-col-3 w-col-4 w-col-5 w-col-6 w-col-7 w-col-8 w-col-9 w-col-10 w-col-11 w-col-12');
					childrenItem.eq(0).addClass('w-col-2');
					childrenItem.eq(1).addClass('w-col-3');
					childrenItem.eq(2).addClass('w-col-5');
					childrenItem.eq(3).addClass('w-col-2');
				}
				else if (value == "2-2-2-4-2") {
					if (childrenItem.length > 5) {
						for (var i = 0; i < childrenItemLength - 5; i++) {
							childrenItem = $ArtBoardId.children();
							let childrenItemId = childrenItem.last().data('artboard');
							childrenItem.last().removeAttr('data-parent-remove');
							this.EventEdit('remove',childrenItemId);
						}
					}
					else if (childrenItem.length < 5) {
						var newChild = '';
						for (let i = 0; i < 5-childrenItemLength; i++) {
							childrenItem = $ArtBoardId.children();
							newChild = `<div class="empty w-row w-col ${ArtBoardId_Temp_list[i]}" data-tag-name="ColumnsItem" data-artboard="${ArtBoardId_Temp_list[i]}" data-parent-remove="true"></div>`;
							$ArtBoardId.append(newChild);
						}
					}
					childrenItem = $ArtBoardId.children();
					childrenItem.removeClass('w-col-1 w-col-2 w-col-3 w-col-4 w-col-5 w-col-6 w-col-7 w-col-8 w-col-9 w-col-10 w-col-11 w-col-12');
					childrenItem.eq(0).addClass('w-col-2');
					childrenItem.eq(1).addClass('w-col-2');
					childrenItem.eq(2).addClass('w-col-2');
					childrenItem.eq(3).addClass('w-col-4');
					childrenItem.eq(4).addClass('w-col-2');
				}
				else if (value == "2-2-2-2-2-2") {
					if (childrenItem.length > 6) {
						for (var i = 0; i < childrenItemLength - 6; i++) {
							childrenItem = $ArtBoardId.children();
							let childrenItemId = childrenItem.last().data('artboard');
							childrenItem.last().removeAttr('data-parent-remove');
							this.EventEdit('remove',childrenItemId);
						}
					}
					else if (childrenItem.length < 6) {
						var newChild = '';
						for (let i = 0; i < 6-childrenItemLength; i++) {
							childrenItem = $ArtBoardId.children();
							newChild = `<div class="empty w-row w-col ${ArtBoardId_Temp_list[i]}" data-tag-name="ColumnsItem" data-artboard="${ArtBoardId_Temp_list[i]}" data-parent-remove="true"></div>`;
							$ArtBoardId.append(newChild);
						}
					}
					childrenItem = $ArtBoardId.children();
					childrenItem.removeClass('w-col-1 w-col-3 w-col-4 w-col-5 w-col-6 w-col-7 w-col-8 w-col-9 w-col-10 w-col-11 w-col-12');
					childrenItem.eq(0).addClass('w-col-2');
					childrenItem.eq(1).addClass('w-col-2');
					childrenItem.eq(2).addClass('w-col-2');
					childrenItem.eq(3).addClass('w-col-2');
					childrenItem.eq(4).addClass('w-col-2');
					childrenItem.eq(5).addClass('w-col-2');
				}
				
			}
		}
		if (RealTime == true) FW.saveProject();
	}
	AddItemStepAnime(action){
		if (action == undefined) action = '_';
		let body = $('#settings-anime-steps-container-body');
		let length = body.children().length;


		let NewEl = 
		` 
		<div class="settings-anime-step">
			<div class="settings-anime-step-move-active"></div>
			<div class="settings-anime-step-lable">Step <span>${++length}</span></div>
			<div class="settings-anime-step-duration">0s</div>
		</div>
		`

		if (AllStyleManager.hasOwnProperty(ArtBoardId) == false) AllStyleManager[ArtBoardId] = {};
		if (AllStyleManager[ArtBoardId].hasOwnProperty('anime') == false) AllStyleManager[ArtBoardId]['anime'] = {};
		if (AllStyleManager[ArtBoardId]['anime'].hasOwnProperty('all') == false) AllStyleManager[ArtBoardId]['anime']['all'] = {};

		let ListElAnime = AllStyleManager[ArtBoardId]['anime']['all'];

		if (action == '_') {
			ListElAnime[Object.keys(ListElAnime).length] = {};
		}


		body.append(NewEl);

	}

	setAnimeJS(data){
		if (data == 'play' || data == 'reset') {
			if (AllStyleManagerTempAnime.hasOwnProperty(ArtBoardId) &&
				AllStyleManagerTempAnime[ArtBoardId].hasOwnProperty('data')){
				if (data == 'play') {
					var animePlay = AllStyleManagerTempAnime[ArtBoardId]['data'];
					animePlay.reset();
					animePlay.restart();
				}
				// reverse
				else if (data == 'reset') {
					AllStyleManagerTempAnime[ArtBoardId]['data'].reset();
				}
			}
			return;
		}
		var animeJs = {};
		var animeJsItem = {};
		var Key = '';
		var Value = '';
		var item = '';
		if (AllStyleManagerTempAnime.hasOwnProperty(ArtBoardId) == false) AllStyleManagerTempAnime[ArtBoardId] = {};
		else AllStyleManagerTempAnime[ArtBoardId]['data'].reset();
		if (AllStyleManagerTempAnime[ArtBoardId].hasOwnProperty('data') == false) AllStyleManagerTempAnime[ArtBoardId]['data'] = {};
		if (AllStyleManagerTempAnime[ArtBoardId].hasOwnProperty('event') == false) AllStyleManagerTempAnime[ArtBoardId]['event'] = 'autoplay';
		if (AllStyleManagerTempAnime[ArtBoardId].hasOwnProperty('target') == false) AllStyleManagerTempAnime[ArtBoardId]['target'] = '';

		if (data.hasOwnProperty('Start')) {

			animeJsItem['autoplay'] = false;
			animeJsItem['targets'] = `.${ArtBoardId}`;
			if (data['Start'].hasOwnProperty('Target')) {
				Key = data['Start']['Target']['list'][0];
				Value = data['Start']['Target']['value'];
				Value = Value.trim();
				$('[data-input-id="Target"]').val(Value);

				animeJsItem[Key] = `.${ArtBoardId} ${Value}`;

				try{
					if ($(animeJsItem[Key]).length == 0) {
						$('[data-input-id="Target"]').css('box-shadow', '0 0 5px red');
						animeJsItem[Key] = `.${ArtBoardId}`;
					}
					else{
						$('[data-input-id="Target"]').css('box-shadow', '');
						animeJsItem[Key] = `.${ArtBoardId} ${Value}`;
					}
				}
				catch(e){
					$('[data-input-id="Target"]').css('box-shadow', '0 0 5px red');
					animeJsItem[Key] = `.${ArtBoardId}`;
				}
			}
			AllStyleManagerTempAnime[ArtBoardId]['target'] = animeJsItem['targets'];
			if (data['Start'].hasOwnProperty('LoopAnime')) {
				Key = data['Start']['LoopAnime']['list'][0];
				Value = data['Start']['LoopAnime']['value'];
				if (Value == '') Value = 1;
				animeJsItem[Key] = GetRealBoolean(Value);
			}
			if (data['Start'].hasOwnProperty('EventAnime')) {
				if (Value == '' || Value == ' ') AllStyleManagerTempAnime[ArtBoardId]['event'] = 'autoplay';
				AllStyleManagerTempAnime[ArtBoardId]['event'] = Value;
			}
		}
		animeJs = anime.timeline(animeJsItem);


		let lengthList = Object.keys(data).length-1;
		let lengthListItems;
		for (let i = 1; i <= lengthList; i++) {
			item = data[i];
			animeJsItem = {};
			lengthListItems = Object.keys(item);
			for (let x = 0; x < lengthListItems.length; x++) {
				Key = item[lengthListItems[x]]['list'][0];
				Value = item[lengthListItems[x]]['value'];
				if ((lengthListItems[x] == 'delayAnim' ||
					lengthListItems[x] == 'durationAnim' ||
					lengthListItems[x] == 'BRadiusAnim' ||
					lengthListItems[x] == 'RotateAnim' ||
					lengthListItems[x] == 'moveX' ||
					lengthListItems[x] == 'moveY') && Value != '' && Value != ' ') {
					animeJsItem[Key] = parseInt(Value);
				}
				if ((lengthListItems[x] == 'scaleAnim' || lengthListItems[x] == 'OpacityAnim') && Value != '' && Value != ' ') {
					animeJsItem[Key] = parseFloat(Value);
				}
				if (lengthListItems[x] == 'Easing' && Value != '' && Value != ' ') {
					animeJsItem[Key] = String(Value);
				}
			}

			animeJs.add(animeJsItem);
		}

		AllStyleManagerTempAnime[ArtBoardId]['data'] = animeJs;


	}
}
var FW = new FrontEndConstructor();