


// AddBlockManager

let keyCategoryAddBlockManager = Object.keys(AddBlockManager);

let keyCategoryItemAddBlockManager;


for (let i = 0; i < keyCategoryAddBlockManager.length; i++) {
	$('#AddBlockManagerContainerHeaderName').append(`<span data-attr-toggle='${keyCategoryAddBlockManager[i]}' data-attr-toggle-category="AddBlockManager">${keyCategoryAddBlockManager[i]}</span>`)
	$('#AddBlockManagerContainerbody').append(`<div class="AddBlockManagerCategoryBtn" onclick="$('#AddBlockManagerContainerbody').hide();MenuData('${keyCategoryAddBlockManager[i]}','AddBlockManager');replaceClass('#AddBlockManagerContainerHeaderClosePrev','AddBlockManagerContainerHeaderClose','AddBlockManagerContainerHeaderPrev')">${keyCategoryAddBlockManager[i]}</div>`)
	$('#AddBlockManagerContainerbodyBlock').append(`<div data-attr-toggle='${keyCategoryAddBlockManager[i]}' data-attr-toggle-category="AddBlockManager"></div>`)
	keyCategoryItemAddBlockManager = Object.keys(AddBlockManager[keyCategoryAddBlockManager[i]]);

	for (let X = 0; X < keyCategoryItemAddBlockManager.length; X++) {
		$(`#AddBlockManagerContainerbodyBlock div[data-attr-toggle='${keyCategoryAddBlockManager[i]}'] `).append(`<div class="AddBlockManagerCategoryBtn" data-add-block-name='${keyCategoryItemAddBlockManager[X]}'>${keyCategoryItemAddBlockManager[X]}</div>`);
	}
}

let StyleManagerTableCssTableKeys;
let StyleManagerTableCssTableKeysObj;
let StyleManagerTableCssUlKeys;
let StyleManagerTableCssKeys;
let StyleManagerTableCssUlKeysObj;
let StyleManagerTableKeys = Object.keys(StyleManagerTable);

for (let Z = 0; Z < StyleManagerTableKeys.length; Z++) {
	StyleManagerTableCssKeys = Object.keys(StyleManagerTable[StyleManagerTableKeys[Z]]);
	for (let i = 0; i < StyleManagerTableCssKeys.length; i++) {
		// create container
		$(`#${StyleManagerTableKeys[Z]}`).append(`<div class='container-StyleManager-slide-btn base-StyleManager-slide' onclick='NextSlide(this)'>${StyleManagerTableCssKeys[i]}</div><div data-slide-toggle></div>`);
		StyleManagerTableCssTableKeys = StyleManagerTable[StyleManagerTableKeys[Z]][StyleManagerTableCssKeys[i]];
		StyleManagerTableCssTableKeysObj = Object.keys(StyleManagerTableCssTableKeys);

		// create container ul

		for (let ChildI = 0; ChildI < StyleManagerTableCssTableKeysObj.length; ChildI++) {
			// console.log(ChildI);
			$(`#${StyleManagerTableKeys[Z]}`).find('.base-StyleManager-slide').last().next().append(`<div class='container-StyleManager-slide-btn' onclick='NextSlide(this)' style='padding-left: 30px;'>${StyleManagerTableCssTableKeysObj[ChildI]}</div><div data-slide-toggle></div>`);

			StyleManagerTableCssUlKeysObj = StyleManagerTableCssTableKeys[StyleManagerTableCssTableKeysObj[ChildI]];

			for (let X = 0; X < Object.keys(StyleManagerTableCssUlKeysObj).length; X++) {
				StyleManagerTableCssUlKeys = StyleManagerTableCssUlKeysObj[Object.keys(StyleManagerTableCssUlKeysObj)[X]];

				$('[data-slide-toggle]').last().append('<ul></ul>').addClass('container-StyleManager-slide');
				$('[data-slide-toggle] ul').last().attr('style',`display: flex;justify-content: flex-start;margin-bottom: 15px;padding: 0; ${StyleManagerTableCssUlKeys['Attr']}`);
			
				for (let Y = 0; Y < Object.keys(StyleManagerTableCssUlKeys['Tag']).length; Y++) {
					WF.Create(StyleManagerTableCssUlKeys['Tag'][Y]['Tag'],$('[data-slide-toggle] ul').last(),StyleManagerTableCssUlKeys['Tag'][Y]['Variable']);
				}


			}


		}


	}
}



let functionSettingsTemp = $('#id-settings-steps').children();
let functionSettings = $('[data-id-settings="steps"]').parent().parent().parent();

functionSettings.html('')
functionSettings.append(functionSettingsTemp);
$('#id-settings-steps').remove();


functionSettingsTemp = $('#id-settings-test').children();
functionSettings = $('[data-id-settings="test"]').parent().parent().parent();





functionSettings.html('')
functionSettings.append(functionSettingsTemp);
$('#id-settings-test').remove();




// Events
// click,dblclick

functionSettingsTemp = $('#id-settings-Events').children();
functionSettings = $('[data-id-settings="Events"]').parent().parent().parent();

functionSettings.html('')
functionSettings.append(functionSettingsTemp);


delete functionSettingsTemp,functionSettings;

// functionSettings.
















// color picer in settings
$('[data-input-id="BackgroundColor"]').spectrum({
	type: "component",
	showPaletteOnly: "true",
	togglePaletteOnly: "true",
	hideAfterPaletteSelect: "true",
	showInput: "true",
	showInitial: "true"
});

$('[data-input-id="borderColor"]').spectrum({
	type: "component",
	showPaletteOnly: "true",
	togglePaletteOnly: "true",
	hideAfterPaletteSelect: "true",
	showInput: "true",
	showInitial: "true"
});
$('[data-input-id="outlineColor"]').spectrum({
	type: "component",
	showPaletteOnly: "true",
	togglePaletteOnly: "true",
	hideAfterPaletteSelect: "true",
	showInput: "true",
	showInitial: "true"
});




$('[data-input-id="TextColor"]').spectrum({
	type: "component",
	showPaletteOnly: "true",
	togglePaletteOnly: "true",
	hideAfterPaletteSelect: "true",
	showInput: "true",
	showInitial: "true"
});

$('[data-input-id="TextColor"]').spectrum("set", "");
$('[data-input-id="BackgroundColor"]').spectrum("set", "");
$('[data-input-id="borderColor"]').spectrum("set", "");
$('[data-input-id="outlineColor"]').spectrum("set", "");


$('.sp-colorize-container').css('width','23px');



$(".base-StyleManager-slide:contains(Animation)").hide();
$(".base-StyleManager-slide:contains(Animation)").next().hide();


adapdationWindow();