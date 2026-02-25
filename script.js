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
  const container = document.querySelector(".random-container");
  const real = document.getElementById("realBtn");

  const fakeCount = 6; // change this number for more fake buttons

  const buttons = [real];

  // Create fake buttons
  for (let i = 0; i < fakeCount; i++) {
    const fake = document.createElement("a");
    fake.href = "wrong.html";
    fake.className = "quest-button";
    fake.innerText = "Continue";

    container.appendChild(fake);
    buttons.push(fake);
  }

  positionAllWithoutOverlap(buttons);
});

function positionAllWithoutOverlap(buttons) {
  const placed = [];

  buttons.forEach(button => {
    let overlapping;
    let attempts = 0;

    do {
      placeRandom(button);
      overlapping = placed.some(existing => isOverlapping(button, existing));
      attempts++;
    } while (overlapping && attempts < 200);

    placed.push(button);
  });
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
  const padding = 30;

  const r1 = el1.getBoundingClientRect();
  const r2 = el2.getBoundingClientRect();

  return !(
    r1.right + padding < r2.left ||
    r1.left - padding > r2.right ||
    r1.bottom + padding < r2.top ||
    r1.top - padding > r2.bottom
  );
}
