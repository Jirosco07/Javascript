const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelector(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", (undefined) =>{

    player = button.textContent;
    computerTurn();
    playerText.textContent = `player: ${player}`;
    computerText.textContent = `computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) +1;

    switch(randNum){
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
}
function checkWinner(){
    if(player == computer){
        return "DRAW";
    }
    else if(computer =="Rock"){
        return (player == "Paper") ? "YOU WIN" : "YOU LOSE"
    }
    else if(computer =="Paper"){
        return (player == "Scissors") ? "YOU WIN" : "YOU LOSE"
    }
    else if(computer =="Sicissors"){
        return (player == "Rock") ? "YOU WIN" : "YOU LOSE"
    }
      
}