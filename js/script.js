$(function(){

	// scroll to top stuff
	$().UItoTop({ easingType: 'easeOutQuart', text: 'Scroll<br>to Top' });

	/* formstack overrides*/
	$('.fsFormatEmail').attr('placeholder', 'Email Address');
	$('a[title*="Online"]').hide();
});