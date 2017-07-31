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
	$(event.target).css("background", "green");
	event.preventDefault();
})

$square.on("click", function(event) {
	// console.log(event.target);
	$(event.target).css("background", $input[0].value);
	event.preventDefault();
})

$square.on("mouseover", function(event) {
	// console.log(event.target);
	$(event.target).css("background", $input[0].value);
	event.preventDefault();
})


$button.on("click", function(event) {
	console.log(event);
	console.log(event.target);
	event.preventDefault();

	var settings = {
		url: 'http://omdbapi.com/',
		data: {
			t: $input[0].value, 
			apiKey: '2f6435d9'
			}
		}
		$.ajax(settings).done(function(response) { 
			console.log(response.Poster);
			$square.on("click", function(ev) {
				$(ev.target).css("background", response.Poster);
				event.preventDefault();
			})

		})

})












