(function($) {
	$(window).load(function(){
		$(".view-race-details h2").parent().width($(".view-race-details .views-row").width() - 320 + "px");
		$(".view-race-details .views-field-title").textfill({
			debug:true,
			innerTag:'h2',
			maxFontPixels:100
		});
	});
}(jQuery));
