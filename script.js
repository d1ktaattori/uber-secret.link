function checkAnswer() {
	const input = document.getElementById("answer").value.toLowerCase();
	const correct = "starlight"; // change this

	if (input === correct) {
		window.location.href = "clue1.html";
	} else {
		document.getElementById("error").innerText = "blud thought that was the word";
	}
}
