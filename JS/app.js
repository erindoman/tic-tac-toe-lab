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
let winner;
let board = ["", "", "", "", "", "", "", "", ""];
const messageText = document.getElementById('h2')

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
    winner = getWinner();
    render();
}

function init() {
    board = ["", "", "", "", "", "", "", "", ""];
    const messageText = document.getElementById('h2')
    render();
};

function render() {
    board.forEach(function(mark, index) {
        squares[index].textContent = mark;
    });
    messages.textContent = winner === "tie" ? "It's a tie!" : winner ? `${winner} wins!` : `${currentPlayer}'s turn!`
}

init();
