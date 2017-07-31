var $brush = $('.brush');
var $input = $('#color-field');
var $button = $('#set-color');


$button.on("click", function(event) {
	$brush.css("background", $input[0].value);
	// $brush.css("background", $input.val());
	// console.log($input[0].value);
	event.preventDefault();

})

var $body = $('body');
// console.log($body[0]);
var $newDiv = $('<div>').addClass('square')

for(var i = 0; i < 20; i++) {
	var $newDiv = $('<div>').addClass('square');
	$body.append($newDiv);
}

var $square = $('.square');
$square.on("click", function(event) {
	console.log(event.target);
	$(event.target).css("background", "green");
	event.preventDefault();
})
