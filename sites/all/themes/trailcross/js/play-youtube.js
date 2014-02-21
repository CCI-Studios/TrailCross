(function($) {
	$(function(){
		$(".view-large-highlight a.play, .view-small-highlight a.play").click(function(){
			var id = $(this).data("ytid");
			$(this).parent().append("<iframe src='//www.youtube.com/embed/"+id+"?autoplay=1' width='460' height='259' frameborder='0' allowfullscreen></iframe>");
			$(this).hide().parent().find("img").hide();

			return false;
		});
	});
}(jQuery));
