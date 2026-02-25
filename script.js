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

function positionBoth(btn1, btn2) {
	const rect1 = btn1.getBoundingClientRect();
	const rect2 _ btn2.getBoundingClientRect();

const maxX1 = window.innerWidth - rect1.width;
	const maxY1 = window.innerHeight - rect1.height;

let x1 = Math.random() * maxX1;
	let y1 = Math.random() * maxY1;

btn1.style.left = x1 + "px";
	btn1.style.top = window.innerHeight - rect2.height;

let x2, y2;

do {
	x2 = Math.random() * maxX2;
	y2 = Math.random()  * maxY2;
} while (
	Math.abs(x2 - x1) < 150 &&
	Math.abs(y2 - y1) < 60
	);

btn2.style.left = x2 + "px";
	btn2.style.top = y2 + "px";
}
