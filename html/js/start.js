// iefix
document.createElement('footer');
document.createElement('nav');
document.createElement('header');
document.createElement('section');
document.createElement('aside');
document.createElement('article');

jQuery(function($, undefined) {

	$('body').removeClass('no-js');

	//menu-hover
	var menuHover = function() {
		$('.main-menu__list a').on('mouseover', function() {
			$(this).parent().addClass('hover');
		});
		
		$('.main-menu__list a').on('mouseout', function() {
			$(this).parent().removeClass('hover');
		});
	}
	
	menuHover();
	
	//select
	if($('.select-custom select').length) {
		$('.select-custom select').ybSelect();
	}
	
	$('.popup-login').fancybox({
		closeBtn: true,
		openEffect	: 'none',
		closeEffect	: 'fade'
	});
	
	$('.popup-registration').fancybox({
		closeBtn: true,
		openEffect	: 'none',
		closeEffect	: 'fade',
		beforeLoad	: function() {
			$('body').toggleClass('fancy-registration-mod');
		},
		afterClose	: function() {
			$('body').toggleClass('fancy-registration-mod');
		}
	});
	
	$('.popup-message').fancybox({
		closeBtn: true,
		openEffect	: 'none',
		closeEffect	: 'fade',
		beforeLoad	: function() {
			$('body').toggleClass('fancy-registration-mod');
		},
		afterClose	: function() {
			$('body').toggleClass('fancy-registration-mod');
		}
	});
	
	$('.add-comment').fancybox({
		closeBtn: true,
		openEffect	: 'none',
		closeEffect	: 'fade'
	});
	
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#automcomplete" ).autocomplete({
      source: availableTags
    });
	
	 /* ---tabs--- */
	function tabs() {
		$('.publish-tabs').each(function() {
			var current = $(this).find('.tabs-nav .current').attr('href');
			$(this).find('.tabs-content .tabs-block:not('+current+')').hide();
			$('.tabs-nav a').on('click', function(e) {
				e.preventDefault();
				$this = $(this);
				$this.addClass('current').siblings().removeClass('current');
				$('.tabs-content').find($this.attr('href')).fadeIn(500).siblings('div').hide();
			});
		});
	};
	tabs();
	
	
	if($(".checkboxclass").length) {
		$(".checkboxclass").Custom({
			customStyleClass:'checkbox',
			customHeight:'13',
			enableHover: true
		});
	}
	
	//item-controls криво
	$('.item-controls').children('input').each(function() {
		if( $(this).is(':checked') ){
			$(this).parents('.item').addClass('active');
		} else {
			$(this).parents('.item').removeClass('active');
		}
	});
	
	$('.item-controls').children('input').on('click', function() {
		if( $(this).is(':checked') ){
			$(this).parents('.item').addClass('active');
		} else {
			$(this).parents('.item').removeClass('active');
		}
	});
	
	//placeholder
	if($('.tipped').length) {
		$('.tipped').placeholder();
	}
	
	//dropdown
	(function(){
		var dropdown = $('.dropdown');
		$('.dropdown span').on('click', function() {
			$(this).siblings('ul').slideToggle();
		});
		
		$('.dropdown li').on('click', function() {
			var spanText = $(this).parents('.dropdown').children('span').text();
			var text = $(this).text();
			$(this).parents('.dropdown').children('span').text(text);
			$(this).text(spanText);
			$(this).parent().slideToggle();
		});
		
		//сделать при клике не на dropdown закрывался

	})();
	
	if($('#images-list').length) {
		$('#images-list').carouFredSel({
			auto: false,
			prev : "#images-list__prev",
			next : "#images-list__next"
		});
	}
	
	$("#images-list a")
		.attr('rel', 'fancybox')
			.fancybox({
				prevEffect: 'fade',
				nextEffect: 'fade',
				onStart	: function() {
					$("#images-list").trigger("pause");
				},
				onClosed: function() {
					$("#images-list").trigger("play");
				},
				
				beforeShow: function() {
					$('body').addClass('images-popup');
				},
				
				afterClose: function() {
					$('body').removeClass('images-popup');
				}
			});
	
	$('.tabs-gallery__list-item')
		.attr('rel', 'tabs-gallery__list-item')
			.fancybox({
				prevEffect: 'fade',
				nextEffect: 'fade',
				onStart	: function() {
					$("#images-list").trigger("pause");
				},
				onClosed: function() {
					$("#images-list").trigger("play");
				},
				
				beforeShow: function() {
					$('body').addClass('images-popup');
				},
				
				afterClose: function() {
					$('body').removeClass('images-popup');
				}
	});
	
	//add-plus
	$('.add-plus').on('click', function() {
		$(this).toggleClass('add-plus_active');
		if($(this).parents('.list-gallery__item')) {
			$(this).parents('.list-gallery__item').toggleClass('list-gallery__item_selected');
			$(this).parents('.line').toggleClass('line_active');
		}
		
		return false;
	});
	
	$('#toggle-type').on('change', function() {
		var valid = $('#toggle-type option:selected').data('type');
		if(valid == 'rieltor') {
			$('.line_agency').hide();
			$('.line_realtor').show();
		} else {
			$('.line_agency').show();
			$('.line_realtor').hide();
		}
	});
	
	$('.compare tr:odd:not(:first)').addClass('colorRows');
	$('.compare-schedule__table tr:odd').addClass('colorRows');
	
	//rating
	$('.rating').each(function() {
		if( !$(this).hasClass('rating_readonly')) {
			$(this).rating({
				fx: 'half',
				image: 'images/stars.png',
				minimal: 0.5
			});
		} else {
			$(this).rating({
				readOnly: true,
				fx: 'half',
				image: 'images/stars.png'
			});
		}
	});
	
	$('.rating-mini').rating({
		readOnly: true,
		fx: 'half',
		image: 'images/stars-1.png'
	});
	
	//btn_select-all
	$('.btn_select-all').on('click', function() {
		$(this).parents('.main-content').find('.item').addClass('active');
		$('.list-advertisment__main input:checkbox').attr('checked', true);
	});
	
	//delete-col
	$('.delete-col').on('click', function() {
		var count = $(this).parents('td').index();
		console.log( $(this).parents('tr').children('td').length );
		if($(this).parents('tr').children('td').length <=1 ){
			$('.compare-section').remove();
		} else {
			$(this).parents('table').find('tr').each(function() {
					$(this).children('td').eq(count-1).remove();
					$(this).children('th').eq(count).remove();
			});
		
			$('.compare-schedule__table').each(function() {
				
				$(this).find('tr').each(function() {
					$(this).children('td').eq(count-1).remove();
					$(this).children('th').eq(count).remove();
				});
				
			});
		}
		
		return false;
	});
	
	//btn_upload
	
	$('.btn_upload').on('click', function() {
		$(this).siblings('input').trigger('click');
	});
	
	//booking
	var bookingAdmin = {
		init: function() {
			this.clicking();
			this.prevClick();
			this.nextClick();
		},
		day 	: 	$('.calendar__weekend li'),
		prev	:	$('#calendar__nav-prev'),
		next	:	$('#calendar__nav-next'),
		clicking	 : 	function() {
							this.day.on('click', function() {
								$(this).toggleClass('selected');
							});
						},
		prevClick	:	function() {
					this.prev.on('click', function() {
						return false;
					});
				},
				
		nextClick	:	function() {
							this.next.on('click', function() {
								return false;
							})
						}
	};

	bookingAdmin.init();

	//steps-section hide
	$('#control-toggle').on('click', function() {
		var self = $(this)
		self.parents('.steps-section').toggleClass('hide');

		self.parent().siblings('.steps-section__content').slideToggle(function() {
			if(self.parents('.steps-section').hasClass('hide')) {
				self.text('открыть');
			} else {
				self.text('скрыть');
			}
		});
	});

	//types-adv__header
	$('.types-adv').addClass('types-adv_free');

	$(".types-adv__header input").on('change', function() {
		self = $(this);
		self.parents('.types-adv').toggleClass('types-adv_free');

		if(self.parents('.types-adv').hasClass('types-adv_free')) {
			self.parents('.types-adv').find('.btn_controls').attr('disabled', true);
		} else {
			self.parents('.types-adv').find('.btn_controls').attr('disabled', false);
		}
	});

	$('#page-nav').on('click', function(e) {
		e.preventDefault();
		window.history.back();
	});
});
