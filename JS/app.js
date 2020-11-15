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
];

const messages = document.querySelector('#message')

/*---------------------------- Variables (state) ----------------------------*/

let turn = "X";
let winner;
let board = ["", "", "", "", "", "", "", "", ""];

/*------------------------ Cached Element References ------------------------*/

const squares = document.querySelectorAll('#board div')
const messageText = document.getElementById('h2')

/*----------------------------- Event Listeners -----------------------------*/

document.getElementById('board').addEventListener('click', playerTurn)
document.querySelector('.resetButton').addEventListener('click', init);


/*-------------------------------- Functions --------------------------------*/

function getWinner() {
    let winner = null;
    wins.forEach(function(win) {
        if (board[win[0]] && board[win[0]] === board[win[1]] && board[win[0]] === board[win[2]]) winner = board[win[0]];
    })
    return winner ? winner : board.includes("") ? null : "tie";    
};

function playerTurn(e) {
    let idx = parseInt(e.target.id.replace('sq', '')); 
    if (board[idx] || winner) return;
    board[idx] = turn;
    turn = turn === "X" ? "O" : "X";
    winner = getWinner();
    render();
}

function render() {
    board.forEach(function(mark, idx) {
        squares[idx].textContent = mark;
    });
    messages.textContent = winner === "tie" ? "It's a tie!" : winner ? `${winner} wins!` : `${turn}'s turn!`
}

function init() {
    board = ["", "", "", "", "", "", "", "", ""];
    winner = null;
    render();
};

init();
