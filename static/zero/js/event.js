$( document ).click(function(event) {
	let $target = $(event.target);
	// onclick="FW.TextEdit(this)"
	if (!$target.is('[onclick="FW.TextEdit(this)"]') && !$target.parents('[onclick="FW.TextEdit(this)"]').length == 1 && $target.parents('#headerTextEdit').length == 0) {
		FW.TextEdit(this,'close');
		// if active button real time change element
		if (RealTime == true) FW.saveProject();
	}
	if (!$target.is('[onclick="NextMenu(this)"]') && $target.parent('[onclick="NextMenu(this)"]').length != 1) {
		$('[data-dropdown-toggle]').hide();
	}
	if ($target.is('[data-parents-this-el]')) {
		let Tag = $('.'+$target.data('parents-this-el'));
		FW.SelectedEl(Tag);
		ArtBoardId = $target.data('parents-this-el');
		FW.replaceStyleManager();
		FW.replaceStyleManager("this",screenNameStyle,"remove","anime");
		$('#SelectorCss_item-sel').text('this').hide();
		$('#SelectorCss_item-sel-remove').hide();
		$('#StyleManagerContainerbodyBlock').show();

		moveSelectEl = Tag;

		FW.parentsElListShow(Tag,'open');
		$('#containerSelectorElements_Dble').hide();
	}
	if ($target.is('.caret') || $target.parents('.caret').length == 1) {
		if ($target.parents('.caret').length == 1) $target = $target.parents('.caret');
		$target.next('.nested').toggleClass('active')
		$target.toggleClass('caret-down');
	}
	if (!($target.is('#contextmenuMenuArtbord') || $target.parents('#contextmenuMenuArtbord').length == 1)) {
		$('#contextmenuMenuArtbord').fadeOut(100);
	}
	if ($target.is('.settings-anime-step-move-active')) {
		$('.settings-anime-step-active').removeClass('settings-anime-step-active');
		$target.parent().addClass('settings-anime-step-active');
		$('#lable-step-index').text($target.parent().children('.settings-anime-step-lable').children('span').text());

		let index = $target.next('.settings-anime-step-lable').children('span').text();

		if (index == "Start") {
			$("#animeManagerForm .base-StyleManager-slide:contains(Animation)").hide();
			$("#animeManagerForm .base-StyleManager-slide:contains(Animation)").next().hide();


			$("#animeManagerForm .base-StyleManager-slide:contains(Settings)").show();
			$("#animeManagerForm .base-StyleManager-slide:contains(Settings)").next().show();
		}
		else{
			$("#animeManagerForm .base-StyleManager-slide:contains(Animation)").show();
			$("#animeManagerForm .base-StyleManager-slide:contains(Animation)").next().show();
			$("#animeManagerForm .base-StyleManager-slide:contains(Settings)").hide();
			$("#animeManagerForm .base-StyleManager-slide:contains(Settings)").next().hide();



			// index

			// inputnery lcnum e ir parunakuteamnb
		}
		// jnjum e input-neri u selectneri naxkin arjeky 
		$('#animeManagerForm ').find('input').val('');
		// man e galis select-taery
		$('#animeManagerForm').find('select').val('');


		var dict = AllStyleManager[ArtBoardId]['anime']['all'][index];

		var dict_obj = Object.keys(dict);
		var value = '';
		for (let i = 0; i < dict_obj.length; i++) {
			value = dict[dict_obj[i]]['value'];
			$('#animeManagerForm').find(`[data-input-id="${dict_obj[i]}"]`).val(value);
		}
	}
	if ($target.is('.settings-event-item')) {
		$('.settings-event-item-active').not($target).removeClass('settings-event-item-active');
		$target.addClass('settings-event-item-active');
		$('#lable-event-index').text($target.text());
	}
});






var lastEvent_click_bool = [];

$(document).keydown(function(event) {
	let $target = $(event.target);
	lastEvent_click_bool.push(event.keyCode);

	if($target.is('[onclick="FW.TextEdit(this)"]')){
		$('[onclick="FW.TextEdit(this)"]').find('br').remove();
	}

	if (event.keyCode == 13) {

		if ($target.is('[onclick="FW.TextEdit(this)"]') && $target.prop("tagName") == 'PRE') {
			document.execCommand('insertHTML', false, '\n');
			return false;
		}
		else if($target.is('[onclick="FW.TextEdit(this)"]')){
			alert('hnaravor che toghadardz anel');
			document.execCommand('insertHTML', false, '');
			return false;
		}
	}
});

$(document).keyup(function(event) {
	let $target = $(event.target);
	// console.log(lastEvent_click_bool);

	// // Ctrl
	// if (lastEvent_click_bool[0] == 17) {
	// 	// save project
	// 	if (lastEvent_click_bool[1] == 83) {
	// 		FW.saveProject();
	// 	}
	// }

	if (lastEvent_click_bool[0] == 106) {
		console.log(AllStyleManager);
	}

	if (lastEvent_click_bool[0] == 61) {
		$('#HtmlTreeContainer').fadeToggle(300);
	}

	if (lastEvent_click_bool[0] == 83) {
		FW.saveProject('save');
	}

	if (lastEvent_click_bool[0] == 40) { // down
		let el = $('#SelectorElementPos');
		if (el.css('display') != 'none') {
			try{
				if (moveSelectEl.next().length == 1){
					moveSelectEl = moveSelectEl.next();
					ArtBoardId = moveSelectEl.data('artboard');
					FW.SelectedEl(moveSelectEl);
				}
			}
			catch(e){}
		}
	}
	if (lastEvent_click_bool[0] == 38) { // up
		let el = $('#SelectorElementPos');
		if (el.css('display') != 'none') {
			try{
				if (moveSelectEl.prev().length == 1){
					moveSelectEl = moveSelectEl.prev();
					ArtBoardId = moveSelectEl.data('artboard');
					FW.SelectedEl(moveSelectEl);
				}
			}
			catch(e){}
		}
	}

	if (lastEvent_click_bool[0] == 46) { // remove
		FW.EventEdit('remove');
	}

	lastEvent_click_bool = [];
});






$(document).change(function(event) {
	// StayleManager
	let $target = $(event.target);

	if ($target.parents('#StyleManagerContainerbodyBlock').length == 1){
		let type = $target.attr('type');
		let value = $target.val();
		if (type == 'range'){
			$target.prev('[type="number"]').val(value).change();
		}
		else if (type == 'number'){
			$target.next('[type="range"]').val(value);
		}
	}
});

$('#StyleManagerContainerbodyBlock div form').change(function(event) {
	// StayleManager
	let $target = $(event.target);

	// input-i id-n e
	let inputId = $target.data('input-id');
	let value = $target.val(); // value in input


	// form-i id-in e
	let categoryName = $target.parents('.StayleManager').attr('id');


	// unit-i arjeky popoxeluc ir mair inputy change e linum
	if ($target.data('input-select-id')) {
		let inputSelectId = $target.data('input-select-id').split('-unit').join('');
		$(`[data-input-id='${inputSelectId}']`).change();
	}



	if (!inputId) return;
	// css


	categoryNameDict = {
		"styleManagerForm":"css",
		"jqueryManagerForm":"jquery",
		"animeManagerForm":"anime"
	}

	if (categoryNameDict.hasOwnProperty(categoryName)) categoryName = categoryNameDict[categoryName];



	// new varibles
	//  css-i krknorinaknen en sarkum



	let CssList = $target.data('art-board-css-list');
	// css-i value-i skzbi u verji arjeknern en

	// data-art-board-css-after-before
	let CssAfterBefore = $target.data('art-board-css-after-before');

	let CssNew = $target.data('art-board-css-list-on');
	CssNew = $(`[data-input-select-id='${CssNew}']`).val();
	if (CssNew) CssAfterBefore['after'] = CssNew;

	var CssSelector;

	if (categoryName == 'css') {
		CssSelector = $('#SelectorCss_item-sel').text();
	}
	if (categoryName == 'anime') {
		CssSelector = $('#lable-step-index').text();
	}


	let TempscreenNameStyle = screenNameStyle;
	if (categoryName == 'jquery') screenNameStyle = 'all';
	if (categoryName == 'anime') screenNameStyle = 'all';
	

	// steghcum e ayn ameny inch vor chka
	if (!AllStyleManager.hasOwnProperty(ArtBoardId)) AllStyleManager[ArtBoardId] = {};
	if (!AllStyleManager[ArtBoardId].hasOwnProperty(categoryName)) AllStyleManager[ArtBoardId][categoryName] = {};


	if (!AllStyleManager[ArtBoardId][categoryName].hasOwnProperty(screenNameStyle)) AllStyleManager[ArtBoardId][categoryName][screenNameStyle] = {};
	if (!AllStyleManager[ArtBoardId][categoryName][screenNameStyle].hasOwnProperty(CssSelector)) AllStyleManager[ArtBoardId][categoryName][screenNameStyle][CssSelector] = {};



	let AfterWork = AllStyleManager[ArtBoardId][categoryName][screenNameStyle][CssSelector];


	// verakangnum enq screenNameStyle anuny
	if (categoryName == 'jquery') screenNameStyle = TempscreenNameStyle;
	if (categoryName == 'anime') screenNameStyle = TempscreenNameStyle;





	// ete chka tvyal key-ic apa ayn ksteghcvi
	if (!AfterWork.hasOwnProperty(inputId)) AfterWork[inputId] = {};
	AfterWork[inputId]['value'] = value;


	if (CssAfterBefore) {
		if (CssAfterBefore.hasOwnProperty('after')) AfterWork[inputId]['after'] = CssAfterBefore['after'];
		if (CssAfterBefore.hasOwnProperty('before')) AfterWork[inputId]['before'] = CssAfterBefore['before'];
	}


	AfterWork[inputId]['list'] = CssList.split(',');




	// ********** avartin e motecnum ashxatanqy css **********
	// css
	if (categoryName == 'css'){
		let AllStayleCss = '';
		let ThisElCss;
		let ThisElCssKeys = Object.keys(AllStyleManager[ArtBoardId]['css'][screenNameStyle][CssSelector]);
		let ThisElAfter = '';
		let ThisElBefore = ''

		for (let X = 0; X < ThisElCssKeys.length; X++) {
			ThisElCss = AllStyleManager[ArtBoardId]['css'][screenNameStyle][CssSelector][ThisElCssKeys[X]];
			value = ThisElCss['value'];
			for (let i = 0; i < ThisElCss['list'].length; i++) {
				if (ThisElCss['value'][i] == '' || ThisElCss['value'][i] == undefined) {
					delete AllStyleManager[ArtBoardId]['css'][screenNameStyle][CssSelector][ThisElCssKeys[X]];
					FW.replaceStyleManager('this',screenNameStyle,'remove');
					FW.replaceStyleManager('this','all',"_");
					FW.replaceStyleManager('this',screenNameStyle,"_");
				}
				if (ThisElCss.hasOwnProperty('after')) ThisElAfter = ThisElCss['after'];
				if (ThisElCss.hasOwnProperty('before')) ThisElBefore = ThisElCss['before'];
				if (!value.isEmpty()) {
					AllStayleCss += `${ThisElCss['list'][i]}: ${ThisElBefore + ThisElCss['value'] + ThisElAfter};`; 
				}
			}
		}
		let TempArtBoardId = ArtBoardId;
		if (CssSelector != 'this') TempArtBoardId = ArtBoardId + CssSelector;
		FW.SetStyle(TempArtBoardId,AllStayleCss);
		FW.SelectedEl($(`.${ArtBoardId}`));
	}


	else if (categoryName == 'anime') {
		let ThisElCss = AllStyleManager[ArtBoardId]['anime']['all'];
		FW.setAnimeJS(ThisElCss);
	}








	// if active button real time change element
	if (RealTime == true) FW.saveProject();
});

// select element-i hamr e

$(document).scroll(function() {
		FW.SelectedEl($(`.${ArtBoardId}`));
});
$(window).resize(function() {
	FW.SelectedEl($(`.${ArtBoardId}`));
	adapdationWindow();
});



// click right in mouse only ArtBoard/record
$('#ArtBoard').contextmenu(function(event) {
	$('#contextmenuMenuArtbord').fadeIn(100);
	$('#contextmenuMenuArtbord').css({
		left: event.originalEvent.clientX,
		top: event.originalEvent.clientY
	})
	event.preventDefault();
});

// click right in mouse only ArtBoard/record
$(document).contextmenu(function(event) {
	var $target = $(event.target);
	if ($target.is('#SelectorElementsInfo')) {
		event.preventDefault();
		$('#contextmenuMenuArtbord').fadeOut(100);
		return;
	}
	if (($target.is('#ArtBoard') == false && $target.parents('#ArtBoard').length == 0)) {
		$('#contextmenuMenuArtbord').fadeOut(100);
	}


	if ($target.parents('.contextmenuTrue').length == 0) return;

	if ($target.is('.caret')) {
		let ElDataArtbord = $target.data('artbordCaret'); 
		$target = $(`.${ElDataArtbord}`);
		ArtBoardId = ElDataArtbord;

		moveSelectEl = $target;
		FW.SelectedEl($target);
		FW.parentsElListShow($target,'open');
		$('#containerSelectorElements_Dble').hide();
		$('#SelectorElementPos').hide();
		clicking_mousemoveSelectorEl = true;
		$('.SelectorElements').css('border-color','red');
		$('#SelectorCss_item-sel').text('this').hide();
		$('#SelectorCss_item-sel-remove').hide();
		$('#StyleManagerContainerbodyBlock').show();
		FW.replaceStyleManager();
		FW.replaceStyleManager("this",screenNameStyle,"remove","anime");
	}

	event.preventDefault();
});




var isMoveElVar = '_';
var isMoveElVarParent = '_';
var isMoveElClear = false;
$(document).on({
	mousedown: function(event) {
		let $target = $(event.target);
		isMoveElVar = '_';
		isMoveElVarParent = '_';
		isMoveElClear = false;
		isMoveElVar = $target.data('artbord-caret');

		if ($(event.target).is('.caret') == false || $(`.${isMoveElVar}`).attr('id') == 'ArtBoard') {
			isMoveElClear = false;
			isMoveElVar = '_';
			isMoveElVarParent = '_';
			return;
		}




		$(this).data('timer', setTimeout(function() {
			isMoveElClear = true;
			isMoveElVar = $target.data('artbord-caret');

			isMoveElVarParent = $(`.${isMoveElVar}`).parent().data('artboard')
			if (isMoveElVarParent == undefined) isMoveElVarParent = '_';
			let isMoveElClone = $(`.${isMoveElVar}`).clone();
			$(`.${isMoveElVar}`).replaceWith('<span id="MoveElThisSpan"></span>');
			$('#MoveElClone').html('');
			$('#MoveElClone').append(isMoveElClone);
			$($('#MoveElClone').children()[0]).attr('data-move-el-clone',true);
		}, 700));
	},

	mouseup: function(event) {
		if (isMoveElClear == true && isMoveElVar != '_') {
			// qani vor mi poqr ushacumov e ameni inch katarvum mi poqr hangist enk talis vor avelnord bug-eri chantipenk
			
			$('#MoveElThisSpan').remove();
			$('[data-move-el-clone]').removeAttr('data-move-el-clone');
			FW.TreeHtmlShow()
			isMoveElVar = '_';
			isMoveElVarParent = '_';
			isMoveElClear = false;

			clearTimeout($(this).data('timer'));
		}
		else{
			clearTimeout($(this).data('timer'));
			isMoveElVar = '_';
			isMoveElVarParent = '_';
		}
	}
});







$(document).mousedown(function(event){
	let $target = $(event.target);
	let dataArtBoard = $target.data('artboard');

	if (($target.parents('#ArtBoard').length >= 1 || $target.attr('id') == 'ArtBoard') && dataArtBoard != undefined) {
		if (dataArtBoard == ArtBoardId && dataArtBoard != recordId) return;

		if (clicking_mousemoveSelectorEl) {
			clicking_mousemoveSelectorEl = false;
			$('.SelectorElements').css('border-color','blue');
			$('#StyleManagerContainerbodyBlock').hide();
		}
		else {
			clicking_mousemoveSelectorEl = true;
			$('.SelectorElements').css('border-color','red');
			$('#SelectorCss_item-sel').text('this').hide();
			$('#SelectorCss_item-sel-remove').hide();
			$('#StyleManagerContainerbodyBlock').show();
		}
		ArtBoardId = dataArtBoard;
		FW.replaceStyleManager();
		FW.replaceStyleManager("this",screenNameStyle,"remove","anime");
	}
	else{

		let TargetId = $target.attr('id');

		if ($target.parents('#StyleManager, #header, #AddBlockManagerContainer, #fix-bar-settings-btn, .sp-container, #parentsElBar, #HtmlTreeContainer, #SelectorElementsInfoContainer, #contextmenuMenuArtbord').length >= 1 || 
			TargetId == 'StyleManager' ||
			TargetId == 'header' ||
			TargetId == 'AddBlockManagerContainer' ||
			TargetId == 'fix-bar-settings-btn' ||
			TargetId == 'parentsElBar' ||
			TargetId == 'HtmlTreeContainer' || 
			TargetId == 'SelectorElementsInfo' || 
			TargetId == 'SelectorElementsInfoContainer' ||
			TargetId == 'contextmenuMenuArtbord' ||
			$target.is('.sp-container')) $('#warning-alert').hide();
		else{
			$('#warning-alert').hide();
			FW.SelectedEl('_');
			moveSelectEl = '_';
			clicking_mousemoveSelectorEl = false;
			ArtBoardId = recordId;
			$('.SelectorElements').css('border-color','blue');
			$('#StyleManagerContainerbodyBlock').hide();
			FW.replaceStyleManager();
			FW.replaceStyleManager("this",screenNameStyle,"remove","anime");
		}
	}
	
	// AddBlockManagerCategoryBtn
	if ($target.attr('class') == 'AddBlockManagerCategoryBtn'){
		// vercnum e item-i anuny
		let dataBlockName = $target.data('add-block-name');
		if (dataBlockName) {
			// vercnum e category-i anuny
			let categoryName = $target.parents('#AddBlockManagerContainer').children('#AddBlockManagerContainerHeader');
			categoryName = categoryName.children('#AddBlockManagerContainerHeaderName').children();
			for (let i = 0; i < categoryName.length; i++) {
				if($(categoryName[i]).css('display') != 'none'){
					categoryName = $(categoryName[i]).data('attr-toggle');
					break;
				}
			}
			// arden clone-i mej e dnum 
			if (categoryName) {
				$('#AddBlockManagerClone').html('');
				$('#AddBlockManagerCloneMove').text(dataBlockName).show();
				WF.Create(AddBlockManager[categoryName][dataBlockName],'#AddBlockManagerClone');
				AddBlockManagerName = dataBlockName;
				let listArtBordId = $('#AddBlockManagerClone').find('[data-artboard]');
				let i = 0;
				let ArtBoardId = '';
				while(i < listArtBordId.length){
					ArtBoardId = '_' + makeid(5)+'__ArtBoard';
					if ($(`.${ArtBoardId}`).length == 0) {
						$(listArtBordId[i]).attr('data-artboard',ArtBoardId);
						$(listArtBordId[i]).addClass(ArtBoardId);
						i++;
					}
				}
				$('#AddBlockManagerContainer').hide();
				let StyleManagerDisplay = $('#StyleManager');
				
				if (StyleManagerDisplay.css('display') != 'none') {
					StyleManagerDisplay.hide();
					StyleManagerDisplay.attr('data-show',true);
				}

				if (HtmlTreeAddBlock == true){
					if ($('#HtmlTreeContainer').css('display') == 'none') {
						$('#HtmlTreeContainer').attr('data-show',true);
						$('#HtmlTreeContainer').fadeIn(300);
					}
				}


				AddBlockManagerClone = true;
			}
		}
	}
});



$(document).mouseup(function(event){
	let $target = $(event.target);
	if (AddBlockManagerClone) {


		// console.log(AllStyleManager);



		let cloneNode = $('#AddBlockManagerClone').children().clone();

		$('#AddBlockManagerClone').html('');
		$('#AddBlockManagerCloneMove').text('').hide();
		AddBlockManagerClone = false;



		if ($target.is('.caret')) {
			FW.AddBlockManagerNameWarn($('.'+$target.data('artbord-caret')));
			if ($('#warning-alert').css('display') == 'none') {
				FW.isEmptyArdbords('remove',$('.'+$target.data('artbord-caret')));
				$('.'+$target.data('artbord-caret')).append(cloneNode);
				// ete uni default settings
				if (AllStyleManagerDefault.hasOwnProperty(AddBlockManagerName)) {
					var AllStyleManagerDefaultCloneDict = '';
					var AllStyleManagerDefaultEq = Object.keys(AllStyleManagerDefault[AddBlockManagerName]);
					for (let i = 0; i < AllStyleManagerDefaultEq.length; i++) {
						AllStyleManagerDefaultCloneDict = JSON.stringify(AllStyleManagerDefault[AddBlockManagerName][AllStyleManagerDefaultEq[i]]);
						AllStyleManager[cloneNode.eq(i).data('artboard')] = {};
						AllStyleManager[cloneNode.eq(i).data('artboard')] = JSON.parse(AllStyleManagerDefaultCloneDict);
					}
					FWK.SetEvent(AllStyleManager);
				}
			}
		}
		if ($target.is('.CaretPrevNextElPrev') || $target.is('.CaretPrevNextElNext')) {
			// vercnum e carent-i meji data-n base-y
			let elData = $target.parent('.CaretPrevNextElContainer').next('.caret').data('artbord-caret');
			var el = $(`.${elData}`);
			if ($target.is('.CaretPrevNextElPrev')) {
				if (el.attr('id') == 'ArtBoard') {
					el.prepend(cloneNode);
					// ete uni default settings
					if (AllStyleManagerDefault.hasOwnProperty(AddBlockManagerName)) {
						var AllStyleManagerDefaultCloneDict = '';
						var AllStyleManagerDefaultEq = Object.keys(AllStyleManagerDefault[AddBlockManagerName]);
						for (let i = 0; i < AllStyleManagerDefaultEq.length; i++) {
							AllStyleManagerDefaultCloneDict = JSON.stringify(AllStyleManagerDefault[AddBlockManagerName][AllStyleManagerDefaultEq[i]]);
							AllStyleManager[cloneNode.eq(i).data('artboard')] = {};
							AllStyleManager[cloneNode.eq(i).data('artboard')] = JSON.parse(AllStyleManagerDefaultCloneDict);
						}
						FWK.SetEvent(AllStyleManager);
					}
				}
				else{
					if (el.parent().data('tag-name') != undefined){
						FW.AddBlockManagerNameWarn(el.parent());
					}

					if ($('#warning-alert').css('display') == 'none') {
						el.before(cloneNode);
						// ete uni default settings
						if (AllStyleManagerDefault.hasOwnProperty(AddBlockManagerName)) {
							var AllStyleManagerDefaultCloneDict = '';
							var AllStyleManagerDefaultEq = Object.keys(AllStyleManagerDefault[AddBlockManagerName]);
							for (let i = 0; i < AllStyleManagerDefaultEq.length; i++) {
								AllStyleManagerDefaultCloneDict = JSON.stringify(AllStyleManagerDefault[AddBlockManagerName][AllStyleManagerDefaultEq[i]]);
								AllStyleManager[cloneNode.eq(i).data('artboard')] = {};
								AllStyleManager[cloneNode.eq(i).data('artboard')] = JSON.parse(AllStyleManagerDefaultCloneDict);
							}
							FWK.SetEvent(AllStyleManager);
						}
					}
				}
			}
			else{
				if (el.attr('id') == 'ArtBoard') {
					el.append(cloneNode);
					// ete uni default settings
					if (AllStyleManagerDefault.hasOwnProperty(AddBlockManagerName)) {
						var AllStyleManagerDefaultCloneDict = '';
						var AllStyleManagerDefaultEq = Object.keys(AllStyleManagerDefault[AddBlockManagerName]);
						for (let i = 0; i < AllStyleManagerDefaultEq.length; i++) {
							AllStyleManagerDefaultCloneDict = JSON.stringify(AllStyleManagerDefault[AddBlockManagerName][AllStyleManagerDefaultEq[i]]);
							AllStyleManager[cloneNode.eq(i).data('artboard')] = {};
							AllStyleManager[cloneNode.eq(i).data('artboard')] = JSON.parse(AllStyleManagerDefaultCloneDict);
						}
						FWK.SetEvent(AllStyleManager);
					}
				}
				else{
					if (el.parent().data('tag-name') != undefined){
						FW.AddBlockManagerNameWarn(el.parent());
					}
					if ($('#warning-alert').css('display') == 'none') {
						el.after(cloneNode);
						// ete uni default settings
						if (AllStyleManagerDefault.hasOwnProperty(AddBlockManagerName)) {
							var AllStyleManagerDefaultCloneDict = '';
							var AllStyleManagerDefaultEq = Object.keys(AllStyleManagerDefault[AddBlockManagerName]);
							for (let i = 0; i < AllStyleManagerDefaultEq.length; i++) {
								AllStyleManagerDefaultCloneDict = JSON.stringify(AllStyleManagerDefault[AddBlockManagerName][AllStyleManagerDefaultEq[i]]);
								AllStyleManager[cloneNode.eq(i).data('artboard')] = {};
								AllStyleManager[cloneNode.eq(i).data('artboard')] = JSON.parse(AllStyleManagerDefaultCloneDict);
							}
							FWK.SetEvent(AllStyleManager);
						}
					}
				}
			}



			FW.isEmptyArdbords();
		}



		if (clicking_mousemoveSelectorEl) {
			FW.AddBlockManagerNameWarn($(`.${ArtBoardId}`));
			if ($('#warning-alert').css('display') == 'none') {
				cloneNode.appendTo(`.${ArtBoardId}`);
				FW.isEmptyArdbords('remove',$(`.${ArtBoardId}`));
				// ete uni default settings
				if (AllStyleManagerDefault.hasOwnProperty(AddBlockManagerName)) {
					var AllStyleManagerDefaultCloneDict = '';
					var AllStyleManagerDefaultEq = Object.keys(AllStyleManagerDefault[AddBlockManagerName]);
					for (let i = 0; i < AllStyleManagerDefaultEq.length; i++) {
						AllStyleManagerDefaultCloneDict = JSON.stringify(AllStyleManagerDefault[AddBlockManagerName][AllStyleManagerDefaultEq[i]]);
						AllStyleManager[cloneNode.eq(i).data('artboard')] = {};
						AllStyleManager[cloneNode.eq(i).data('artboard')] = JSON.parse(AllStyleManagerDefaultCloneDict);
					}
					FWK.SetEvent(AllStyleManager);
				}
			}
		}
		else{
			if (moveSelectEl != '_') {
				FW.AddBlockManagerNameWarn(moveSelectEl);
				if ($('#warning-alert').css('display') == 'none') {
					cloneNode.appendTo(moveSelectEl);
					FW.isEmptyArdbords('remove',moveSelectEl);
					// ete uni default settings
					console.log(AddBlockManagerName);
					if (AllStyleManagerDefault.hasOwnProperty(AddBlockManagerName)) {
						var AllStyleManagerDefaultCloneDict = '';
						var AllStyleManagerDefaultEq = Object.keys(AllStyleManagerDefault[AddBlockManagerName]);
						for (let i = 0; i < AllStyleManagerDefaultEq.length; i++) {
							AllStyleManagerDefaultCloneDict = JSON.stringify(AllStyleManagerDefault[AddBlockManagerName][AllStyleManagerDefaultEq[i]]);
							AllStyleManager[cloneNode.eq(i).data('artboard')] = {};
							AllStyleManager[cloneNode.eq(i).data('artboard')] = JSON.parse(AllStyleManagerDefaultCloneDict);
						}
						FWK.SetEvent(AllStyleManager);
					}
				}
			}
		}

		// if active button real time change element
		if (RealTime == true) FW.saveProject();

		$('#AddBlockManagerContainer').show();
		let StyleManagerDisplay = $('#StyleManager');
		if (StyleManagerDisplay.data('show') != undefined) {
			StyleManagerDisplay.show().removeAttr('data-show');
		}


		if ($('#HtmlTreeContainer').is('[data-show]')){
			$('#HtmlTreeContainer').fadeOut(300);
			$('#HtmlTreeContainer').removeAttr('data-show');
		}

		FW.TreeHtmlShow();
		AddBlockManagerName = '_';
		if (RealTime == true) FW.saveProject();
	}
});






$(document).mousemove(function(event){
	let $target = $(event.target);
	let dataArtBoard = $target.data('artboard');
	// html tree-i vra item-i vra pahelu event
	if ($target.is('.caret')) {
		// ete add block element-y chi ogtagorcnum sa chi ashxati
		let el = $(`.${$target.data('artbord-caret')}`);
		// isMoveElVarParent
		var isMoveElVarParentsBug = false;
		if (isMoveElVar != '_') {
			if (el.parents(`.${isMoveElVar}`).length > 0) {
				isMoveElVarParentsBug = true;
			}
		}

		if ((AddBlockManagerClone == true || isMoveElClear == true) && isMoveElVarParentsBug == false) {
			// ete button-i vra sexmes kbaci ir erexaneri canky aydpes sharunak
			$target.next('.nested').addClass('active');
			$target.addClass('caret-down');
			$('#SelectorElementPos').show();

			// element- move
			if ($('[data-move-el-clone]').length == 1) {

				let dataArtbordNew = $target.data('artbord-caret');
				let dataArtbord = $('[data-move-el-clone]').data('artboard');
				// ete eli ira vra guka apa ira hin teghjy kdne
				var paretnCloneArtboard = $('[data-move-el-clone]').parent().data('artboard');
				if(dataArtbord == dataArtbordNew){
					$('#warning-alert').hide();
					$('#MoveElThisSpan').after($('[data-move-el-clone]'));
				}
				else{ // ete mi urish-i vra e
					// ete warning-alert-y ka uremn hnaravor che et postion-i vra inch vor mi ban teghapoxel
					FW.AddBlockManagerNameWarn($(`.${dataArtbordNew}`),$(`.${isMoveElVar}`).data('tag-name'));
					if ($('#warning-alert').css('display') == 'none') {
						$(`.${dataArtbordNew}`).append($('[data-move-el-clone]'));
					}
				}
				FW.isEmptyArdbords();
				if (RealTime == true) FW.saveProject();
			}
		}
		else{
			$('#SelectorElementPos').hide();
		}
		
		FW.SelectedEl(el,'_','hide');
		// select element Warning
		FW.AddBlockManagerNameWarn(el);












		// ete tvyal element-y ekrani vra chi erevum apa scroll-y harmar dirk e voroshum ira hamar
		try{
			if (el.isInViewport() == false) {
				adapdationWindow();
				let elementTop = el.offset().top;
				$(window).scrollTop(elementTop-150);
			} 
		}
		catch(e){}

	}else{
		FW.SelectedEl('_','_');
		$('#SelectorElementPos').hide();

	}
	if ($target.is('.CaretPrevNextElPrev') || $target.is('.CaretPrevNextElNext')) {
		
		// FW.SelectedEl(el.parent().children().eq(el.index()),'_','Next');
		let elData = $target.parent('.CaretPrevNextElContainer').next('.caret').data('artbord-caret');
		var el = $(`.${elData}`);



		if (AddBlockManagerName != '_' && el.is('#ArtBoard') == false) {
			// ete prev element-i vra e pahvac
			if (el.parent().length >= 1) {
				FW.AddBlockManagerNameWarn(el.parent());
			}
			else{
				$('#warning-alert').hide();
			}
		}

		if (isMoveElClear == true) {
			// ete prev element-i vra e pahvac
			if ($target.is('.CaretPrevNextElPrev')) {
				// ete body-i mej append kene
				if (elData == recordId) {

					FW.AddBlockManagerNameWarn($('#ArtBoard'),$(`.${isMoveElVar}`).data('tag-name'));
					if ($('#warning-alert').css('display') == 'none') {
						$('#ArtBoard').prepend($('[data-move-el-clone]'));
					}
				}
				else{
					FW.AddBlockManagerNameWarn(el.parent(),$(`.${isMoveElVar}`).data('tag-name'));
					// ete warning-alert-y ka uremn hnaravor che et postion-i vra inch vor mi ban teghapoxel
					if ($('#warning-alert').css('display') == 'none') {
						el.before($('[data-move-el-clone]'));
					}
				}
			}
			// ete next-i vra e pahvac
			else{

				// ete body-i mej append kene
				if (elData == recordId) {

					FW.AddBlockManagerNameWarn($('#ArtBoard'),$(`.${isMoveElVar}`).data('tag-name'));
					if ($('#warning-alert').css('display') == 'none') {
						$('#ArtBoard').append($('[data-move-el-clone]'));
					}

				}
				else{
					FW.AddBlockManagerNameWarn(el.parent(),$(`.${isMoveElVar}`).data('tag-name'));
					// ete warning-alert-y ka uremn hnaravor che et postion-i vra inch vor mi ban teghapoxel
					if ($('#warning-alert').css('display') == 'none') {
						el.after($('[data-move-el-clone]'));

					}
				}
			}

			FW.isEmptyArdbords();
			if (RealTime == true) FW.saveProject();
		}

		if(AddBlockManagerClone == true || isMoveElClear == true){
			// ete prev element-i vra e pahvac
			if ($target.is('.CaretPrevNextElPrev')) {
				FW.SelectedEl(el,'_','Prev');
			}
			// ete next-i vra e pahvac
			else{
				FW.SelectedEl(el,'_','Next');
			}
		}
		else{
			FW.SelectedEl(el,'_','_');
		}
		
	}


	if (AddBlockManagerClone) {
		let screen = event.originalEvent;
		$('#AddBlockManagerCloneMove').css({'left':screen.clientX+15,'top':screen.clientY+15});
	}


	if (clicking_mousemoveSelectorEl) {
		$('#containerSelectorElements_Dble .SelectorElements').css('border-color','blue');
		FW.SelectedEl($target,'_');
		return;
	}

	if (($target.parents('#ArtBoard').length >= 1 || $target.attr('id') == 'ArtBoard') && dataArtBoard != undefined) {
		

	// select element Warning
	FW.AddBlockManagerNameWarn($target);




		// data-add-block-but
		moveSelectEl = $target;
		FW.SelectedEl($target);
		FW.parentsElListShow($target,'open');
		$('#containerSelectorElements_Dble').hide();
		// ete add block manajer chenk ogtagorcum henc ays pahin uremn pakum e tvyal element-y
		if (AddBlockManagerClone == false) {
			$('#SelectorElementPos').hide();
		}
	}
	else{
		if ($target.parents('#parentsElBar').length >= 1 || $target.attr('id') == 'parentsElBar') return;
		$('#SelectorElementsInfoContainer').fadeOut(300);
		moveSelectEl = '_';
		$('.SelectorElements').css('border-color','blue');
		$('#StyleManagerContainerbodyBlock').hide();
		FW.SelectedEl('_');
		clicking_mousemoveSelectorEl = false;
		ArtBoardId = recordId;
		FW.parentsElListShow('_','close');

		if (AddBlockManagerName != '_') {
			if ($target.is('.caret') || ($target.parents('.CaretPrevNextElContainer').length == 1 || $target.is('.CaretPrevNextElContainer'))) ;
			else{
				$('#warning-alert').hide();
			}


		}
		
	}
});


























// resize Artborb main block only Height

let ArtBoardResizerDown = $('#ArtBoardResizerDown');

ArtBoardResizerDown[0].addEventListener('mousedown', initDrag, false);

var startX, startY, startWidth, startHeight;

function initDrag(e) {
	$('.ArtBoardResizerContainer').css('background-color','#bdbdbd');

	startX = e.clientX;
	startY = e.clientY;

	startWidth = parseInt(document.defaultView.getComputedStyle($('#ArtBoard')[0]).width, 10);

	startHeight = parseInt(document.defaultView.getComputedStyle($('#ArtBoard')[0]).height, 10);
	document.documentElement.addEventListener('mousemove', doDrag, false);
	document.documentElement.addEventListener('mouseup', stopDrag, false);
}


function doDrag(e) {

	// $('#ArtBoard')[0].style.width = (startWidth + e.clientX - startX) + 'px';

	let Result = (startHeight + e.clientY - startY);

	if (Result < 250) Result = 250;
	else if (Result >= 4400) Result = 4400;

	$('#ArtBoard')[0].style.height = Result + 'px';
	$('.ArtBoardResizerContainer').css('top',500+Result);
	FW.SelectedEl($(`.${ArtBoardId}`));
}

function stopDrag(e) {
	$('.ArtBoardResizerContainer').css('background-color','');
	document.documentElement.removeEventListener('mousemove', doDrag, false);    document.documentElement.removeEventListener('mouseup', stopDrag, false);
}








// # remove all defoult hotkeys
// sa miacneluc etkan el lav chi eghni petq e mi qani ban miayn anjatel
// document.onkeydown = KD;
// function KD(e) {event.returnValue = false;}