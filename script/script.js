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

//Funcion que con los resultados anteriores elige el ganador
function whoWins() {
    let tie = "It's a tie";
    let victory = "You Won!";
    let defeat = "You Lose!";
    if (playerChoice === "Rock" && computerChoice === "Rock") {
        result = tie;
        return result;
    } else if (playerChoice === "Rock" && computerChoice === "Paper") {
        result = defeat;
        return result;
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        result = victory;
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
let scorePc;
let scoreUser;

function totalScore() {
    if(result === "It's a tie") {
        scorePc = 0;
        scoreUser = 0; 
        finalTotalScoreA = `The Score is PC: ${scorePc} and User: ${scoreUser}`;
        return `The Score is PC: ${scorePc} and User: ${scoreUser}`;
    } else if (result === "You Won!") {
        scorePc = 0;
        scoreUser = 1;
        finalTotalScoreA = `The Score is PC: ${scorePc} and User: ${scoreUser}`;
        return `The Score is PC: ${scorePc} and User: ${scoreUser}`;
    } else if (result === "You Lose!") {
        scorePc = 1;
        scoreUser = 0;
        finalTotalScoreA = `The Score is PC: ${scorePc} and User: ${scoreUser}`;
        return `The Score is PC: ${scorePc} and User: ${scoreUser}`;
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
    let matchScore;
    computerPlay();
    playerSelection();
    whoWins();
    finalResult();
    totalScore();
    matchResult = finalFraseA;
    matchScore = finalTotalScoreA;
    alert(matchResult);
    alert(matchScore);
    computerPlay();
    playerSelection();
    whoWins();
    finalResult();
    totalScore();
    if (result === "You Won!") {
        scoreUser++;
    } else if (result === "You Lose!") {
        scorePc++;
    };
    alert(matchResult);
    alert(matchScore);
    computerPlay();
    playerSelection();
    whoWins();
    finalResult();
    totalScore();
    if (result === "You Won!") {
        scoreUser++;
    } else if (result === "You Lose!") {
        scorePc++;
    };
    alert(matchResult);
    alert(matchScore);
    //return {matchResult, matchScore}
}
