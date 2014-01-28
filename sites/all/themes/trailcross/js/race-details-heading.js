(function($) {
	$(window).load(function(){

		var leftMargin = 0;
		if ($(".view-race-details .views-field-field-image").css("display") != "none")
		{
			leftMargin = $(".view-race-details .views-field-field-image img").width() + 20;
		}

		$(".view-race-details h2").parent().width($(".view-race-details .views-row").width() - leftMargin + "px");
		$(".view-race-details .views-field-title").textfill({
			debug:true,
			innerTag:'h2',
			maxFontPixels:100
		});
	});
}(jQuery));
