(function($, undefined) {
	var methods = {
		init : function(options) {
		
			var settings = $.extend( {
				'overlay' : 'select__label',
				'icon' : 'select__label-icon',
				'right' : 'select__label-right'
			}, options);
			
			return this.each(function() {
				var $this = $(this);
				//add blocks
				$this.wrap('<div class=' + '"' + 'select-overlay' + '"' + '></div>');
				$this.before('<div class='+'"'+settings.overlay + '"'+'></div>');
				$this.before('<div class='+'"'+settings.icon + '"'+'>&nbsp;</div>');
				//$this.before('<div class='+'"'+settings.right + '"'+'>&nbsp;</div>');
				//width
				$this.siblings('.select-label').width($this.parents('.select-custom').width() - $(this).siblings('.select__label-icon').width());
				//height
				$this.height($this.parents('.select-custom').height() - 2);
				
				if(!$this.find(':selected').length) {
					$this.siblings("." + settings.overlay).text( $this.find(':first').attr('value') );
				}else {
					$this.siblings("." + settings.overlay).text( $this.find(':selected').attr('value') );
				}
				
				$this.on('change', function() {
					var text = $(this).find(':selected').attr('value');
					$this.siblings("." + settings.overlay).text(text);
				});
			});
		}
	};

	$.fn.ybSelect = function(method) {
		if(methods[method]) {
			return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Метод ' +  method + ' не существует в jQuery.ybSelect');
		}
	};
	
})(jQuery);
