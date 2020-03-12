var jqueryCdn = 'https://code.jquery.com/jquery.min.js';
function loadScript(url, callback) {
    var script = document.createElement('script');
    script.src = url;
    script.onload = callback;
    document.getElementsByTagName('head')[0].appendChild(script);
}
var myloaded = function() {
    $(function() {
		var browswerW = $(window).width();
		$(window).resize(function() {
			browswerW = $(window).width();
			if ( browswerW > 1019 ) {
				$('header nav').show();
			} else {
				$('header nav').hide();
			}
		}).resize();

		$('#preloader').fadeOut('slow');

		$('#nav-btn, nav ul li').click(function() {
			if ( browswerW < 1020 ) {
				// Mobile
				$('header nav').slideToggle();
			}
		});
		
		$('nav > ul > li').each(function(i) {
			$(this).attr("data-index", i);
		}).click(function() {
			var gnb = $(this).find('a').attr('href');
            var gnbTar = $(this).find('a').attr('target');
            //gnb = gnb.toLowerCase();
            gnb = gnb.replace('#', '');

            //var index = $(this).attr("data-index");
            if (gnb.indexOf('http') != -1) crossURL(gnb, gnbTar);
            else scrollLink(gnb);
            return false;
		});

		$('header h1').click(function() {
			scrollLink('top');
			if ( browswerW < 1020 ) {
				// Mobile
				$('header nav').slideUp();
			}		
		});

		$('.portfolio-btn').click(function() {
			scrollLink('works');
			$('.header-mobile > nav').slideUp();
		});
	});
}
loadScript(jqueryCdn, myloaded);
function scrollLink(obj) {
	var position = $('#' + obj).offset();
	var target = position.top;
	$( 'html, body' ).animate( { scrollTop: target }, 800 );
}
function crossURL( str, target = '_self' ) {
    switch ( target ) {
        case '_self': location.href = str;
        break;

        case '_blank': window.open(str);
        break;

        default: location.href = str;
    }
    return false;
}