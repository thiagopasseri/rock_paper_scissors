// test if JS is linked
console.log("Hello World")

// initialize game options
const choices = ["rock","paper","scissors"]; // [0-rock,1-paper,2-scissors]

//initialize table of results
const resultsTable = [["tie","computer","human"],
                      ["human", "tie", "computer"], 
                      ["computer","human", "tie"]];

//initialize human and computer scores
let humanScore = 0;
let computerScore = 0;

//initialize documents variables
const buttonContainerElement = document.querySelector("#btn-container");
const playerChoiceElement = document.querySelector("#human-choice-text");
const computerChoiceElement = document.querySelector("#computer-choice-text");
const resultElement = document.querySelector("#result-text");
const scoreElement = document.querySelector("#score")

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const goBtn = document.querySelector("#go-btn")
let humanChoice = '';

playerChoiceElement.textContent = "TESTE";

//function that changes the text with the choice selected
function displayChoiceText(choice){
    playerChoiceElement.textContent = choice;
}


//manages the click in the button container
function manageClick(event) {
    let target = event.target;
    if (target.tagName ==='BUTTON') {
        switch(target.value) {
            case "rock":
                humanChoice = "rock";
                break;
            case "paper":
                humanChoice = "paper";
                break;
            case "scissors":
                humanChoice = "scissors";
                break;
        }
        playerChoiceElement.textContent = humanChoice;
    }
}


buttonContainerElement.addEventListener("click", (e) => manageClick(e));
goBtn.addEventListener("click", () => {
        if(humanChoice){
            playRound();
            humanChoice= '';
            playerChoiceElement.textContent='';
        }
})


//function that returns computer choices (rock, paper or scissors)
function getComputerChoice() {
    let choiceNum = parseInt(Math.random()*3);
    // return choices[choiceNum] - rock, paper or scissors
    return choiceNum;
}



//function that plays a round: prompts the user, updates score and and logs winner
function playRound() { 
    //initialize the choices for the round
    let computerChoiceNumber = getComputerChoice();
    let humanChoiceNumber = choices.indexOf(humanChoice);

    let result = resultsTable[humanChoiceNumber][computerChoiceNumber];
    console.log(result);
    if (result == "tie") {
        resultElement.textContent = "TIE";
    }
    else if (result =="human"){
        humanScore++;
        if (humanScore == 5) {
            alert("você ganhou o JOGO!");
            resetGame();
            return;
        }
        resultElement.textContent = "GANHOU";

    } 
    else if (result =="computer") {
        // console.log("você perdeu!");
        computerScore++;
        if (computerScore == 5) {
            alert("você perdeu o JOGO!");
            resetGame();
            return;
        }
        resultElement.textContent = "PERDEU";
    }
    scoreElement.textContent = `you: ${humanScore}      computer: ${computerScore}`;
}

function resetGame (){
    humanScore = 0;
    computerScore = 0;
    humanChoice ='';
    scoreElement.textContent = `you: ${humanScore}      computer: ${computerScore}`;
    resultElement.textContent = '';
}
















//function that gets the player choice

// function getPlayerChoice (event){
//     const selectedButton = event.target;
//     const choice = selectedButton.value;
//     return choice;
// }
//function that prompts the user and returns its choice (rock, paper, scissors)
// function getHumanChoice() {
//     let humanInput = prompt("Rock, Paper or Scissors?");
//     if (!humanInput) return getHumanChoice();
//     let humanChoice = humanInput.toLowerCase();
//     switch(humanChoice){
//         case "rock": return 0;
//         case "paper": return 1;
//         case "scissors": return 2;
//         default: return getHumanChoice();
//     }
// }