let gameStatus = false;
let loadTimer;
let timeleft;

//GAME START/PAUSE BUTTON

function startPauseGame() {
  document.getElementById("startPauseBtn").onclick = () => {
    if (!gameStatus) {
      timeleft = timeleft || 30;
      startTimer();
      updateButton();
    } else {
      clearInterval(loadTimer);
      updateButton();
    }
    gameStatus = !gameStatus;
  };
}

function updateButton() {
  const button = document.getElementById("startPauseBtn");
  if (gameStatus) {
    button.innerText = "Resume Game";
  } else {
    button.innerText = "Pause Game";
  }
}

//GAME TIMER COUNTDOWN

function startTimer() {
  loadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(loadTimer);
      alert("Time's up! Game over.");
      restart();
    }

    document.getElementById("timer").innerText = timeleft;
    timeleft -= 1;
  }, 1000);
}

//GAME FUNCTIONS

function init() {
  const emojis = [
    "❤",
    "❤",
    "🤦‍♂️",
    "🤦‍♂️",
    "🤷‍♀️",
    "🤷‍♀️",
    "🐱‍👤",
    "🐱‍👤",
    "💋",
    "💋",
    "👀",
    "👀",
    "💕",
    "💕",
    "🙌",
    "🙌",
  ];

  let openCards = [];

  function handleClick() {
    if (openCards.length < 2) {
      this.classList.add("boxOpen");
      openCards.push(this);
    }

    if (openCards.length == 2) {
      setTimeout(checkMatch, 500);
    }
  }

  function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add("boxMatch");
      openCards[1].classList.add("boxMatch");
    } else {
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length == emojis.length) {
      alert("You Won!");
      restart();
    }
  }

  function restart() {
    clearInterval(loadTimer);

    let gameArea = document.querySelector(".game");
    gameArea.innerHTML = "";

    openCards = [];

    init();
  }

  let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

  for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
  }

  startPauseGame();
}

init();
