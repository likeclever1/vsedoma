jQuery.fn.placeholder = function(options) {
	var settings = $.extend( {
		'color' : '#000'
	}, options);
	
	return this.each(function() {
		var $this = $(this);
		$this.css('color', settings.color);
		var title = $this.attr('title');
		if(!$this.val().length) {
			$this.attr('value', title);
		}
		$this.on('focus', function() {
			if($(this).val() === title) {
				$(this).val('');
			}
		});
		$this.on('blur', function() {
			if(!$(this).val().length) {
				$(this).val(title);
			}
		});
	});
};