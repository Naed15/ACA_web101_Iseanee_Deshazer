// this is foe the date and time //

function startTime() {
	var today = new Date();
	var hr = today.getHours();
	var min = today.getMinutes();
	var sec = today.getSeconds();
	ap = hr < 12 ? "<span>AM</span>" : "<span>PM</span>";
	hr = hr == 0 ? 12 : hr;
	hr = hr > 12 ? hr - 12 : hr;
	//Add a zero in front of numbers<10
	hr = checkTime(hr);
	min = checkTime(min);
	sec = checkTime(sec);
	document.getElementById("clock").innerHTML =
		hr + ":" + min + ":" + sec + " " + ap;

	var months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var curWeekDay = days[today.getDay()];
	var curDay = today.getDate();
	var curMonth = months[today.getMonth()];
	var curYear = today.getFullYear();
	var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
	document.getElementById("date").innerHTML = date;

	var time = setTimeout(function() {
		startTime();
	}, 500);
}
function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}
// this is for the wheather //
function weather() {
	var location = document.getElementById("location");
	var apiKey = "INSERT API KEY";
	var url = "https://api.forecast.io/forecast/";

	navigator.geolocation.getCurrentPosition(success, error);

	function success(position) {
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;

		location.innerHTML =
			"Latitude is " + latitude + "° Longitude is " + longitude + "°";

		$.getJSON(
			url + apiKey + "/" + latitude + "," + longitude + "?callback=?",
			function(data) {
				$("#temp").html(data.currently.temperature + "° F");
				$("#minutely").html(data.minutely.summary);
			}
		);
	}

	function error() {
		location.innerHTML = "Unable to retrieve your location";
	}

	location.innerHTML = "Locating...";
}

weather();
