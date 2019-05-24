$(document).ready(function() {
	function startGame() {
		Document.turn = "x";
		setMessage(document.turn + "gets to start.");
	}
	function setMessage(msg) {
		document.getElementById("Messages").innerText = msg;
	}
	function nextMove(x) {}
});
