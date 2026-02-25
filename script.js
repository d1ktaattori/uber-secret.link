function checkAnswer() {
	const input = document.getElementById("answer").value.toLowerCase();
	const correct = "salaisuussalasana";

	if (input === correct) {
		window.location.href = "clue1.html";
	} else {
		document.getElementById("error").innerText = "blud thought that was the word";
	}
}

window.addEventListener("load", function () {
  const real = document.getElementById("realBtn");
  const fake = document.getElementById("fakeBtn");

  if (real && fake) {
    positionRandomly(real);
    positionRandomly(fake);
  }
});

function positionRandomly(button) {
	const rect = button.getBoundingClientRect();

const maxX = window.innerWidth - rect.width;
	const maxY = window.innerHeight - rect.height;

const randomX = Math.random() * maxX;
	const randomY = Math.random() * maxY;

button.style.left = randomX + "px";
	button.style.top = randomY + "px";
}
