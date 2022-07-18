let computerChoice = () => {
  let numero = Math.floor(Math.random() * 3);
  if (numero == 0) {
    return "Rock";
  } else if (numero == 1) {
    return "Paper";
  } else if (numero == 2) {
    return "Scissors";
  }
};

let playerSelection = () => {
  let seleccion = prompt(`a = paper
  b = rock
  c = scissors`);
  if (seleccion === "a") {
    return "Paper";
  } else if (seleccion === "b") {
    return "Rock";
  } else if (seleccion === "c") {
    return "Scissors";
  } else {
    return 1;
  }
};
function juego(computadora, humano) {
  if (computadora === "Rock") {
    if (humano === "Rock") {
      return "Draw";
    }
    if (humano === "Paper") {
      return "Human wins";
    }
    if (humano === "Scissors") {
      return "PC wins";
    }
  }
  if (computadora === "Paper") {
    if (humano === "Rock") {
      return "PC wins";
    }
    if (humano === "Paper") {
      return "Draw";
    }
    if (humano === "Scissors") {
      return "Human wins";
    }
  }
  if (computadora === "Scissors") {
    if (humano === "Rock") {
      return "Human wins";
    }
    if (humano === "Paper") {
      return "PC wins";
    }
    if (humano === "Scissors") {
      return "Draw";
    }
  }
}

function iniciarJuego() {
  let computadora = computerChoice();
  let humano = playerSelection();
  let gameResult = juego(computadora, humano);
  console.log("Computers choice: ", computadora);
  console.log("Humans choice: ", humano);
  return gameResult;
}
