$(document).ready(function() {
	$('em[contenteditable="true"]').on('keyup', function(e) {
		if (e.which == 13 || e.which == 27) {
			$(this).trigger('blur');
			return;
		}
		var elem = $(this);
		var propToChange = elem.attr('data-css');
		propToChange ? console.log('gonna change stuff') : console.log('no css to change'); return;
		var elemToChange = elem.parent().parent().prev().children();
		if (propToChange == 'transform') {
			console.log(propToChange, 'skew(' + elem.text() + ')');
			elemToChange.css('-webkit-' + propToChange, 'skew(' + elem.text() + ')').css('-moz-' + propToChange, 'skew(' + elem.text() + ')').css('-ms-' + propToChange, 'skew(' + elem.text() + ')').css('-o-' + propToChange, 'skew(' + elem.text() + ')').css(propToChange, 'skew(' + elem.text() + ')');
		}
		elemToChange.css(propToChange, elem.text());
		if (elem.attr('data-css-two') !== undefined) {
			elemToChange.css(elem.attr('data-css-two'), elem.text());
		}
	});
});