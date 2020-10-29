// Constants and global variables
const NUM_ROWS = 15;
const NUM_COLS = 15;
let playerturn = 0;

// Create an array to represent a grid
let divs = createDivsArray();

// Create divs to model the grid array
createDivGrid(divs);

// Set Players
document.getElementById('start').addEventListener('click', playerStart);

function playerStart() {
    // Remove instructions and button
    document.getElementById('removeI').remove();
    document.getElementById('start').remove();

    // Add player turn
    document.getElementById('playerdisp').innerHTML = 'PLAYER 1 TURN';
    document.getElementById('playerdisp').classList.add('player1turn');
}

//Player Turn Process
if (playerturn == 1) {
    document.getElementById('playerdisp').innerHTML = 'PLAYER 1 TURN';
    document.getElementById('playerdisp').classList.add('player1turn');
} else if(playerturn == 2) {
    document.getElementById('playerdisp').innerHTML = 'PLAYER 2 TURN';
    document.getElementById('playerdisp').classList.add('player2turn');
}

// Set Check Functions
checkTop = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row - 2][col] == 4) && (divs[row - 1][col - 1] == 4) && (divs[row - 1][col + 1] == 4) && (divs[row - 1][col] == 3)) {
        document.getElementById('cell' + (row - 1) + '-' + col).classList.add('square');
    } else {
        playerturn++
    }
}

checkBottom = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row + 2][col] == 4) && (divs[row + 1][col - 1] == 4) && (divs[row + 1][col + 1] == 4) && (divs[row + 1][col] == 3)) {
        document.getElementById('cell' + (row + 1) + '-' + col).classList.add('square');
    }
}

checkRight = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row][col + 2] == 4) && (divs[row + 1][col + 1] == 4) && (divs[row - 1][col + 1] == 4) && (divs[row][col + 1] == 3)) {
        document.getElementById('cell' + row + '-' + (col + 1)).classList.add('square');
    }
}

checkLeft = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row][col - 2] == 4) && (divs[row + 1][col - 1] == 4) && (divs[row - 1][col - 1] == 4) && (divs[row][col - 1] == 3)) {
        document.getElementById('cell' + row + '-' + (col - 1)).classList.add('square');
    }
}