/*-------------------------------- Constants --------------------------------*/

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

const messages = document.querySelector('#message')

/*---------------------------- Variables (state) ----------------------------*/

let currentPlayer = "X";
let newGame = true;
let win;
let board = ["", "", "", "", "", "", "", "", ""];

/*------------------------ Cached Element References ------------------------*/

const squares = Array.from(document.querySelectorAll('#board div'))

/*----------------------------- Event Listeners -----------------------------*/

document.getElementById('board').addEventListener('click', playerTurn)
document.querySelector('.resetButton').addEventListener('click', init);

/*-------------------------------- Functions --------------------------------*/

function getWinner() {
    let winner = null;
    wins.forEach(function(win, index) {
        if (board[win[0]] && board[win[0]] === board[win[1]] && board[win[0]] === board[win[2]]) winner = board[win[0]];
    })
    return winner ? winner : board.includes("") ? null : "tie";    
};

function playerTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target; //event is deprecated?
    });
    board[idx] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    win = getWinner();
    render();
}

function init() {
    board = ["", "", "", "", "", "", "", "", ""];
    render();
};

function render() {
    board.forEach(function(mark, index) {
        squares[index].textContent = mark;
    });
    messages.textContent = win === "tie" ? "It's a tie!" : win ? `${win} wins!` : `${currentPlayer}'s turn!`
}

init();













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




//-------------------------------------//

// const resetButton = document.getElementById("resetButton")

// function reset() { 
//     newGame = true;
//     currentPlayer = "X";
//     board = ["", "", "", "", "", "", "", "", ""];
//     gameStatus.innerHTML = currentPlayerTurn();
//     document.querySelectorAll('.square').forEach(square => square.innerHTML = "");
// }

// function divPlayed(clickedDiv, idx) {
//     board[idx] = currentPlayer;
//     clickedDiv.innerHTML = currentPlayer;
// }

// function playerChange() {
//     currentPlayer = currentPlayer === "X" ? "O" : "X";
//     gameStatus.innerHTML = currentPlayerTurn();
// }

// function result() {
//     let gameWon = false;
//     for (let i = 0; i <= 7; i++) {
//         const win = wins[i];
//         let a = board[win[0]];
//         let b = board[win[1]];
//         let c = board[win[2]];
//         if (a === "" || b === "" || c == "") {
//             continue;
//         }
//         if (a === b && b === c ) {
//             gameWon = true;
//             break
//         }
//     }
//     if (gameWon) {
//         gameStatus.innerHTML = winnerMessage();
//         newGame = false;
//         return;
//     }

//     let tieGame = !board.includes("");
//     if (tieGame) {
//         gameStatus.innerHTML = tieMessage();
//         newGame = false;
//         return;
//     }
//     playerChange();
// }

// function divClicked(e) {
//     const clickedDiv = e.target;
//     const idx = parseInt(clickedDiv.getAttribute('div.square'));
//     if (gameStatus[idx] !== "" || !newGame) {
//         return;
//     }
// divPlayed(clickedDiv, idx);
// result();
// }