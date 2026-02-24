function checkAnswer() {
	const input = document.getElementById("answer").value.toLowerCase();
	const correct = "salaisuussalasana";

	if (input === correct) {
		window.location.href = "clue1.html";
	} else {
		document.getElementById("error").innerText = "blud thought that was the word";
	}
}

window.onlad = function () {
	const real = document.getElementById("realBtn");
	const fake = document.getElementById("fakeBtn");

	const padding = 120;

	const maxX = window.innerWidth = padding;
	const maxY = window.innerHeight = padding;

	let realX = Math.random() * maxX;
	let realY = Math.random() * maxY;

	let fakeX, fakeY;

	do {
		fakeX = Math.random() * maxX;
		fakeY = Math.random() * maxY;
	} while (
		Math.abs(fakeX - realX) < 150 &&
		Math.abs(fakeY - realY) < 60
		);

	real.style.left = realX + "px";
	real.style.top = realY "px";

	fake.style.left =fakeX + "px";
	fake.style.top = fakeY + "px";
}
