// const startGameBtn = document.getElementById('start-game-btn');
// const rockBtn = document.getElementById('btn rock');
// const paperBtn = document.getElementById('btn paper');
// const scissorsBtn = document.getElementById('btn scissors');

// const ROCK = 'ROCK';
// const PAPER = 'PAPER';
// const SCISSORS = 'SCISSORS';
// const DEFAULT_USER_CHOICE = ROCK;
// const RESULT_DROW = 'DROW';
// const RESULT_PLAYER_WINS = 'PLAYER_WINS';
// const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

// let gameIsRunning = true;

// const getPlayerChoice = () => {
//     const selection = prompt (`${ROCK}, ${PAPER} or ${SCISSORS} ?`, '').toUpperCase();
//     if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
//         alert(`Invalide choice! We choice ${DEFAULT_USER_CHOICE} for you`);
//         return DEFAULT_USER_CHOICE;
//     }
//     return selection;
// };

// const getComputerChoice = () => {
//     const randomNumber = Math.floor(Math.random() * 9 );

//     if (randomNumber < 3) {
//         return ROCK;
//     } else if (randomNumber < 6) {
//         return PAPER;
//     } else if (randomNumber < 9) {
//         return SCISSORS;
//     } else {
//         alert('Error.')
//     }
// }
    
// const getWinner = (playerChoice, computerChoice) => 
//     playerChoice === computerChoice 
//         ? RESULT_DROW
//         : (playerChoice === ROCK && computerChoice === SCISSORS ||
//           playerChoice === SCISSORS && computerChoice === PAPER ||
//           playerChoice === PAPER && computerChoice === ROCK)
//         ? RESULT_PLAYER_WINS
//         : RESULT_COMPUTER_WINS;
    
// startGameBtn.addEventListener('click', () => {

//     while (gameIsRunning) {
//         const finalPlayerChoice = getPlayerChoice();
//         const finalComputerChoice = getComputerChoice();
//         const winner = getWinner(finalPlayerChoice, finalComputerChoice);
//         let message = `You picked ${finalPlayerChoice}, computer picked ${finalComputerChoice}, therefor you `;

//         if(winner === RESULT_DROW || winner === RESULT_PLAYER_WINS) {
//             winner === RESULT_DROW ? message += 'drow' : message += 'win';
//             console.log(message);
//         }else {
//             message += 'lost';
//             console.log(message);
//             gameIsRunning = false;
//         }
//     }
// })



