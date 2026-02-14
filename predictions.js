const fortunes = [
"Alpha is closer than you think",
"Your next move unlocks hidden value",
"Momentum is building around you",
"A powerful opportunity is syncing",
"Success is inevitable"
];

let selected = false;

function generateCards() {
  const container = document.getElementById("cardsContainer");

  for (let i = 1; i <= 5; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = i;

    card.onclick = () => {
      if (!selected) reveal(card);
    };

    container.appendChild(card);
  }
}

function reveal(card) {
  selected = true;

  const text = document.getElementById("fortune-text");
  const box = document.getElementById("fortune-box");

  const random = Math.floor(Math.random() * fortunes.length);
  text.textContent = fortunes[random];

  box.classList.add("show");
}

generateCards();
