// ete ekrani vra erevum e tvyal element-y apa true kveradracni ete ci erevum hakaraky
$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();

	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
};
function isEmptyHtml( el ){
	return !$.trim(el.html())
}