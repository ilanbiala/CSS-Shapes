$(document).ready(function() {
	$('li em', '.example').attr('contenteditable', true);
	$('em[contenteditable="true"]').on('keyup', function(e) {
		if (e.which == 13 || e.which == 27) {
			$(this).trigger('blur');
			return;
		}
		var elem = $(this);
		var elemParent = elem.parent();
		var elemToChange = elem.parent().parent().prev().children();
		var propsToChange = elemToChange.attr('data-css').split(', ');
		transformIndex = propsToChange.indexOf('transform');
		borderRadiusIndex = propsToChange.indexOf('border-radius');
		if (transformIndex !== -1) {
			var transformArray = ['-webkit-transform', '-moz-transform', '-ms-transform', '-o-transform', 'transform'];
			propsToChange.splice(transformIndex, 1, transformArray);
		}
		if (borderRadiusIndex !== -1) {
			var borderRadiusArray = ['-webkit-border-radius', '-moz-border-radius', 'border-radius'];
			propsToChange.splice(borderRadiusIndex, 1, borderRadiusArray);
		}
		for (var i = 0; i < propsToChange.length; i++) {
			if (propsToChange[i] instanceof Array) {
				for (var i2 = 0; i2 < propsToChange[i].length; i2++) {
					if (propsToChange[i][i2].indexOf('transform') !== -1) {
						elemToChange.css(propsToChange[i][i2], 'skew(' + elemParent.children('em')[i].innerHTML + ')');
					} else {
						elemToChange.css(propsToChange[i][i2], elemParent.children('em')[i].innerHTML);
					}
				}
			} else {
				if (propsToChange[i] == 'widthHeight') {
					elemToChange.css('width', elemParent.children('em')[i].innerHTML);
					elemToChange.css('height', elemParent.children('em')[i].innerHTML);
				} else if (propsToChange[i] == 'widthHeightBorderRadius') {
					elemToChange.css('width', elemParent.children('em')[i].innerHTML);
					elemToChange.css('height', elemParent.children('em')[i].innerHTML);
					elemToChange.css('-webkit-border-radius', elemParent.children('em')[i].innerHTML);
					elemToChange.css('-moz-border-radius', elemParent.children('em')[i].innerHTML);
					elemToChange.css('border-radius', elemParent.children('em')[i].innerHTML);
				} else {
					elemToChange.css(propsToChange[i], elemParent.children('em')[i].innerHTML);
				}
			}
		}
	});
});