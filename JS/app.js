/*-------------------------------- Constants --------------------------------*/

const statusDisplay = document.querySelector('.game--status')
const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

/*---------------------------- Variables (state) ----------------------------*/

const newGame = true;
const player1 = "X";
board = [""];


//messages
const winnerMessage = () => `(${player1} wins!`
const tieMessage = () => "It's a tie!"
const playerTurn = () => `${player1}'s turn!`;


/*------------------------ Cached Element References ------------------------*/

const gameStatus = document.getElementById()
const resetButton = document.getElementById("resetButton")
// You might choose to put your game status here

/*----------------------------- Event Listeners -----------------------------*/

document.querySelectorAll('div').forEach(div => div.addEventListener('click', divClicked));
document.querySelector('#resetButton').addEventListener('click', reset);

/*-------------------------------- Functions --------------------------------*/

statusDisplay.innerHTML = playerTurn();

function divClicked(e) {
    const clickedDiv = e.target;
    const idx = parseInt(clickedDiv.getAttribute('data-cell-index'));
    if (gameStatus[idx] !== "" || !newGame) {
        return;
    }
}

function divPlayed(clickedDiv, idx) {
    newGame[idx] = player1;
    clickedDiv.innerHTML = player1;
}

function playerChange {
    player1 = player1 === "X" ? "O" : "X";
    statusDisplay.innerHTML = playerTurn();
}

function result() {
    let gameWon = false;
    for (let i = o; i <= 7; i++) {
        const win = wins[i];
        let a = gameStatus[win[0]];
        let b = gameStatus[win[1]];
        let c = gameStatus[win[2]];
        if (a === "" || b === "" || c == "") {
            continue;
        }
        if (a === b && b === c ) {
            gameWon = true;
            break
        }
    }
    if (gameWon) {
        statusDisplay.innerHTML = winnerMessage();
        newGame = false;
        return;
    }
}

function reset {

}


resetButton.addEventListener('click', )

// Some functions you might choose to use:

// Initialization function:
// Where you set your initial state, setting up 
// what the board will look like upon loading

// On-Click function:
// Set up what happens when one of the elements
// is clicked


// Check winner function:
// Checks the current state of the board for
// a winner and changes the state of the winner
// variable if so


// Render function:
// Displays the current state of the board
// on the page, updating the elements to reflect
// either X or O depending on whose turn it is