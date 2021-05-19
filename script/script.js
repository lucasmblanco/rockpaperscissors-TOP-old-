// Variables Globales
let options = ["Rock", "Paper", "Scissors"];
let computerChoice;
let playerChoice;
let result;
let error = "Not an Option";

// Funcion que permite a la pc elegir una opcion al azar
function computerPlay() {
    computerChoice = options[Math.floor(Math.random() * options.length)];
}

//Funcion que pregunta al usuario su eleccion y almacena eso
function playerSelection() {
    let optionUser = prompt("Elige una option", "");
    if(optionUser === options[0]) {
        playerChoice = optionUser;
    } else if (optionUser === options[1]) {
        playerChoice = optionUser;
    } else if (optionUser === options[2]) {
        playerChoice = optionUser;
    } else {
        playerChoice = "Not an Option";
    }
}

let tie = "It's a tie";
let victory = "You Won!";
let defeat = "You Lose!";

//Funcion que con los resultados anteriores elige el ganador
function whoWins() {
    if (playerChoice === "Rock" && computerChoice === "Rock") {
        result = tie;
        return result;
    } else if (playerChoice === "Rock" && computerChoice === "Paper") {
        result = defeat;
        return result;
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        result = victory;
        return result;
    } else if (playerChoice === "Paper" && computerChoice === "Paper") {
        result = tie;
        return result;
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        result = victory;
        return result;
    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        result = defeat;
        return result;
    } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
        result = tie;
        return result;
    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
        result = defeat;
        return result;
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        result = victory;
        return result;
    }
}

let finalTotalScoreA;
let finalFraseA;
let scorePc = 0;
let scoreUser = 0;

function totalScore() {
    if(result === victory) {
        scoreUser++;
    } else if (result === defeat) {
        scorePc++;
    } 
}


function finalResult () {
         if (playerChoice === error) {
             finalFraseA = alert("Not a valid option!");
            return alert("Not a valid option!");
        } else {
            finalFraseA = `${result}. The pc choose ${computerChoice} and you ${playerChoice}`;
            return `${result}. The pc choose ${computerChoice} and you ${playerChoice}`;
        }
}
//Funcion que ejecuta el juego 
function game() {
    let matchResult;
    computerPlay();
    playerSelection();
    if (playerChoice === error) {
        return 'Opcion no valida, volver a empezar!';
    } else {
    whoWins();
    finalResult();
    totalScore();
    matchResult = finalFraseA;
    matchScore = finalTotalScoreA;
    alert(matchResult);
    computerPlay();
    playerSelection();
    whoWins();
    finalResult();
    totalScore();
    matchResult = finalFraseA;
    matchScore = finalTotalScoreA;
    alert(matchResult);
    computerPlay();
    playerSelection();
    whoWins();
    finalResult();
    totalScore();
    matchResult = finalFraseA;
    matchScore = finalTotalScoreA;
    alert(matchResult);
    computerPlay();
    playerSelection();
    whoWins();
    finalResult();
    totalScore();
    matchResult = finalFraseA;
    matchScore = finalTotalScoreA;
    alert(matchResult);
    computerPlay();
    playerSelection();
    whoWins();
    finalResult();
    totalScore();
    matchResult = finalFraseA;
    matchScore = finalTotalScoreA;
    alert(matchResult);
    return `The match results are PC:${scorePc} and USER:${scoreUser}`;
  
    }  //return {matchResult, matchScore}
}

function newGame() {
    scorePc = 0;
    scoreUser = 0;
    return "Escribe game() para jugar!."
}
