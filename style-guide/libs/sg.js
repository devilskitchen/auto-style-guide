// Show/hide credits
$('.credits button').on('click',function(){
	$(this).toggleClass('open').next().slideToggle();
});