
$(document).click(function(event) {
	let $target = $(event.target);
	let $targetParent = $(event.target).parent('svg').parent('[data-toggle="dropdown"]');
	$('.dropdown-menu').hide();
	if ($target.data('toggle') == 'dropdown' || $targetParent.data('toggle') == 'dropdown') {
		$($target).next('.dropdown-menu').show();
	}




	if ($target.parents('#for_redactor_toolbar').length == 0 && $target.attr('id') != 'for_redactor_toolbar' && $target.attr('contenteditable') != 'true' && $target.parents('[onclick="contenteditableClick(this)"]').length == 0) {
		$('#mainmenu').css('top','0');
		$('#for_redactor_toolbar').css('top','-60px');
		$target.attr('contenteditable',true);
		$('[contenteditable]').removeAttr('contenteditable');
	}

});



function contenteditableClick($target){
	$target = $($target);
	// contenteditable
	$target.attr('contenteditable',true);
	$('#mainmenu').css('top','-60px');
	$('#for_redactor_toolbar').css('top','0');
	$target.focus();

}






$('.toolbar__button').click(function() {
	let data_name = $(this).data('name');
	// let data_value = $(this).data('value');
	document.execCommand(data_name,false,null);
	$('[contenteditable="true"]').focus();

});




// hint-i harcy sranov petq lucel
// $(['data-name']).hover(function(event) {
// 	$(this).
// });


// open project

// window.onload = function(){SendEmit('OpenProject','');};