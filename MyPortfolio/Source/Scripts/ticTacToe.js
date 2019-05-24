let placeMark = "X";

function nextMove(myId) {
	document.getElementById(myId).innerHTML = placeMark;
}

function changeMarkerToO() {
	placeMark = "O";
}
