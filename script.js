function checkAnswer() {
	const input = document.getElementById("answer").value.toLowerCase();
	const correct = "salaisuussalasana";

	if (input === correct) {
		window.location.href = "clue1.html";
	} else {
		document.getElementById("error").innerText = "blud thought that was the word";
	}
}

window.onload = function () {
	positionRandomly("realBtn");
	positionRandomly("fakeBtn");
};

function positionRandomly(id) {
	const button = document.getElementById(id);

const padding = 100;

const maxX = window.innerWidth - padding;
const maxY = window.innerHeight - padding ;

const randomX = Math.random() * maxX;
const randomY = Math.random() * maxY;

button.style.left = randomX + "px";
button.style.top = randomY + "px";
}
