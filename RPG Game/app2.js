const startGameBtn = document.getElementById('start-game-btn');
const btns = document.querySelectorAll('.btn');
const value = document.querySelector('#display');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DROW = 'DROW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let selectPlayerChoice;
let selectComputerChoice;

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 9 );
    if (randomNumber < 3) {
        selectComputerChoice = ROCK;
        return selectComputerChoice;
    } else if (randomNumber < 6) {
        selectComputerChoice = PAPER;
        return PAPER;
    } else if (randomNumber < 9) {
        selectComputerChoice = SCISSORS;
        return SCISSORS;
    } else {
        alert('Error.');
    }
}
    

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const choice = e.currentTarget.classList;
        if(choice.contains("rock")) {
            selectPlayerChoice = ROCK;
            getComputerChoice();
            const winner = getWinner(selectPlayerChoice, selectComputerChoice);
            console.log(winner);
        }
        else if (choice.contains("paper")) {
            selectPlayerChoice = PAPER;
            getComputerChoice();
            const winner = getWinner(selectPlayerChoice, selectComputerChoice);
            console.log(winner);
        } 
        else {
            selectPlayerChoice = SCISSORS;
            getComputerChoice();
            const winner = getWinner(selectPlayerChoice, selectComputerChoice);
            console.log(winner);
        }
    })
})

const getWinner = (playerChoice, computerChoice) => {
    console.log(`Player: ${playerChoice} and Computer: ${computerChoice}`);
    if (playerChoice === computerChoice) {
        value.textContent = RESULT_DROW;
        return value;
    }
    else if (playerChoice === ROCK && computerChoice === SCISSORS ||
             playerChoice === SCISSORS && computerChoice === PAPER ||
             playerChoice === PAPER && computerChoice === ROCK) {
            value.textContent = RESULT_PLAYER_WINS;
        return value;
    } 
    else {
        value.textContent = RESULT_COMPUTER_WINS;
        return value;
    }
}

        