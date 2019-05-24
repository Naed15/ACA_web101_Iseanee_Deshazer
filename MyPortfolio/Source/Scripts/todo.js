$(function() {
	let $list = $("ul");
	let $newItemForm = $("#newItemForm");

	$newItemForm.on("submit", function(e) {
		e.preventDefault();
		let text = $('input[type="text"]').val();
		$list.append(`<li>${text}</li>`);
		$('input[type="text"]').val("");
	});

	$list.on("click", "li", function() {
		let $this = $(this);
		$this.remove();
	});
});

// Below this line is the javascript for the geo location //

var x = document.getElementById("demo");

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

function showPosition(position) {
	var x = document.getElementById("demo");
	x.innerHTML =
		"Latitude: " +
		position.coords.latitude +
		"<br>Longitude: " +
		position.coords.longitude;
}
