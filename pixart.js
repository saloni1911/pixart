var $brush = $('.brush');
var $input = $('#color-field');
var $button = $('#set-color');

$button.on("click", function(event) {
	$brush.css("background", $input[0].value);
	// console.log($input[0].value);

	event.preventDefault();

})
