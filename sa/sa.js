$(document).ready(function() {
		var fadeTransition = function(selector) {
			var $target = $(selector),
				$slideLi = $target.find('.slide-li > li'),
				$sliderPic = $target.find('.slide-pic > li');

			$sliderPic.each(function(i) {
				$(this).attr('index', i);
			});

			$slideLi.on('click', function() {
				var $this = $(this),
					currIndex = $this.index(),
					oldIndex = $this.siblings('.cur').index();

				$this.addClass('cur').siblings('.cur').removeClass('cur');
				$sliderPic.eq(oldIndex).before($sliderPic.eq(currIndex));
				$target.find('.slide-pic > li').each(function(i) {
					$(this).css('z-index', $sliderPic.length - i - 1);
				});

				$sliderPic.eq(oldIndex).show().fadeOut();
				$target.find('.slide-pic').find('li[index='+currIndex+']').hide().fadeIn();
				// console.log($target.find('.slide-pic').find('li[index='+currIndex+']'));
				// console.log('currIndex: ' + currIndex);
				// console.log('oldIndex: ' + oldIndex);
			});
		};
		
		fadeTransition('.slides');
	});