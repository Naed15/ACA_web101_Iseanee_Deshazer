
function startGame() {

}
function setMessage(msg) {
	// document.getElßementById("Messages").innerHTML = msg;
}
function nextMove() {
	$(this).text = document.turn;
}
function switchTurn() {
	if (document.turn == "x") {
		document.turn = "O";
	} else {
		document.turn = X;
	}
\
