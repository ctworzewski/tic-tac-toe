const cells = document.querySelectorAll('.cell');
const displayStatus = document.querySelector('.displayStatus');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

let winOption = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function handleClick(e) {
    let cellClicked = e.target;
    console.log(cellClicked);
    let cellClickedIndex = parseInt(cellClicked.getAttribute('data-index'));
    console.log(cellClickedIndex);

    if (gameState[cellClickedIndex] !== '' || !gameActive) {
        return;
    }

    gameState[cellClickedIndex] = currentPlayer;
    cellClicked.textContent = currentPlayer;
}




cells.forEach(cell => cell.addEventListener('click', handleClick));