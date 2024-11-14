// test if JS is linked
console.log("Hello World")

// initialize game options
const choices = ["rock","paper","scissors"]; // [0-rock,1-paper,2-scissors]

//initialize table of results
const resultsTable = [["tie","computer","human"], ["human", "tie", "computer"], ["computer","human", "tie"]];

//initialize human and computer scores
let humanScore = 0;
let computerScore = 0;

//function that returns computer choices (rock, paper or scissors)
function getComputerChoice() {
    let choiceNum = parseInt(Math.random()*3);
    // return choices[choiceNum];
    return choiceNum;
}

//function that prompts the user and returns its choice (rock, paper, scissors)
function getHumanChoice() {
    let humanInput = prompt("Rock, Paper or Scissors?");
    if (!humanInput) return getHumanChoice();
    let humanChoice = humanInput.toLowerCase();
    switch(humanChoice){
        case "rock": return 0;
        case "paper": return 1;
        case "scissors": return 2;
        default: return getHumanChoice();
    }
}

//function that plays a round: prompts the user, updates score and and logs winner
function playRound() { 
    let result = resultsTable[getHumanChoice()][getComputerChoice()];
    if (result == "tie") {
        // console.log("empate!");
        alert(`TIE\nvocê: ${humanScore} \ncomp: ${computerScore}`);

    }
    else if (result =="human"){
        // console.log("você venceu!");
        humanScore++;
        if (humanScore == 5) {
            alert("você ganhou o JOGO!");
            return;
        }
        alert(`você ganhou!\nvocê: ${humanScore} \ncomp: ${computerScore}`);

    } 
    else if (result =="computer") {
        // console.log("você perdeu!");
        computerScore++;
        if (computerScore == 5) {
            alert("você perdeu o JOGO!");
            return;
        }
        alert(`você perdeu!\nvocê: ${humanScore} \ncomp: ${computerScore}`);

    }
    // console.log(`você: ${humanScore} `);
    // console.log(`comp: ${computerScore}`);
}

//game loop
while(humanScore < 5 && computerScore < 5)
{
    playRound();
}
console.log(getHumanChoice());

// for (let i=0; i<10; i++)
// {
//     console.log(getComputerChoice());
// }

