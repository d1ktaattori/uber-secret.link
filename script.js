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
    positionWithoutOverlap(real, fake);
  }
});

function positionWithoutOverlap(btn1, btn2) {
  placeRandom(btn1);

  let overlapping;
  let attempts = 0;

  do {
    placeRandom(btn2);
    overlapping = isOverlapping(btn1, btn2);
    attempts++;
  } while (overlapping && attempts < 100);
}

function placeRandom(button) {
  const rect = button.getBoundingClientRect();

  const maxX = window.innerWidth - rect.width;
  const maxY = window.innerHeight - rect.height;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  button.style.left = x + "px";
  button.style.top = y + "px";
}

function isOverlapping(el1, el2) {
  const r1 = el1.getBoundingClientRect();
  const r2 = el2.getBoundingClientRect();

  return !(
    r1.right < r2.left ||
    r1.left > r2.right ||
    r1.bottom < r2.top ||
    r1.top > r2.bottom
  );
}
