const cells = document.querySelectorAll('.cell');
const displayStatus = document.querySelector('.displayStatus');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winOption = [
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
    const cellClicked = e.target;
    console.log(cellClicked);
    const cellClickedIndex = parseInt(cellClicked.getAttribute('data-index'));
    console.log(cellClickedIndex);

    if (gameState[cellClickedIndex] !== '' || !gameActive) {
        return;
    }

    gameState[cellClickedIndex] = currentPlayer;
    cellClicked.textContent = currentPlayer;
    if (checkWin()) {
        displayStatus.textContent = `Wigrywa gracz: ${currentPlayer}! Wielkie brawa!`;
        gameActive = false;
        return;
    }
    
    if (gameState.every(cell => cell !== '')) {
        displayStatus.textContent = 'REMIS';
        gameActive = false;
        return;
    }
    
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    displayStatus.textContent = `Teraz kolej gracza ${currentPlayer}`;
}

/* function checkWin() {
    return winOption.some(element => {
        return element.every(index => {
            return gameState[index] === currentPlayer;
        });
    });
} */

    function checkWin() {
        let won = false;
        winOption.forEach(condition => {
            const [a,b,c] = condition;
            if (gameState[a] && gameState[a] === gameState[b] & gameState[a] === gameState[c]) {
                console.log('won');
                document.querySelector(`[data-index="${a}"]`).classList.add('winning-cell');
                document.querySelector(`[data-index="${b}"]`).classList.add('winning-cell');
                document.querySelector(`[data-index="${c}"]`).classList.add('winning-cell');
                won = true;
            }

        });
        return won;
    }


cells.forEach(cell => cell.addEventListener('click', handleClick));