

$(window).on('load', function () {
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});

$(document).ready(function () {
	var vw;

	$(window).resize(function () {
		vw = $(window).width() / 2;
		$('#b1,#b2,#b3,#b4,#b5').stop();
		$('#b1').animate({ top: 240, left: vw - 200 }, 500);
		$('#b2').animate({ top: 240, left: vw - 100 }, 500);
		$('#b3').animate({ top: 240, left: vw }, 500);
		$('#b4').animate({ top: 240, left: vw + 100 }, 500);
		$('#b5').animate({ top: 240, left: vw + 200 }, 500);
	});

	$('#turn_on').click(function () {
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(500).promise().done(function () {
			$('#play').fadeIn('slow');
		});
	});

	$('#play').click(function () {
		var audio = $('.song')[0];
		audio.play();
		$('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('background-color', '#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(500).promise().done(function () {
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function () {
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(500).promise().done(function () {
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopBalloons(id) {
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$(id).animate({ left: randleft, bottom: randtop }, 10000, function () {
			loopBalloons(id);
		});
	}

	$('#balloons_flying').click(function () {
		$('.balloon-border').animate({ top: -500 }, 8000);
		$('#b1,#b3,#b5').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b4').addClass('balloons-rotate-behaviour-two');
		loopBalloons('#b1');
		loopBalloons('#b2');
		loopBalloons('#b3');
		loopBalloons('#b4');
		loopBalloons('#b5');
		$(this).fadeOut('slow').delay(500).promise().done(function () {
			$('#cake_fadein').fadeIn('slow');
		});
	});

	$('#cake_fadein').click(function () {
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(500).promise().done(function () {
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function () {
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function () {
			$('#wish_message').fadeIn('slow');
		});
	});

	$('#wish_message').click(function () {
		vw = $(window).width() / 2;
		$('#b1,#b2,#b3,#b4,#b5').stop();
		$('#b1').animate({ top: 240, left: vw - 200 }, 500);
		$('#b2').animate({ top: 240, left: vw - 100 }, 500);
		$('#b3').animate({ top: 240, left: vw }, 500);
		$('#b4').animate({ top: 240, left: vw + 100 }, 500);
		$('#b5').animate({ top: 240, left: vw + 200 }, 500);
		$('.balloons').css('opacity', '0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function () {
			$('#story').fadeIn('slow');
		});
	});

	$('#story').click(function () {
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function () {
			$('.message').fadeIn('slow');
		});

		function msgLoop(i) {
			if (i >= $('.message p').length) return;
			$('.message p').eq(i).fadeIn('slow').delay(2000).fadeOut('slow', function () {
				msgLoop(i + 1);
			});
		}

		msgLoop(0);
	});
});
