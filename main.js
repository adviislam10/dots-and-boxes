// Constants and global variables
const NUM_ROWS = 15;
const NUM_COLS = 15;

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


// Set Check Functions
checkTop = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row - 2][col] == 4) && (divs[row - 1][col - 1] == 4) && (divs[row - 1][col + 1] == 4) && (divs[row - 1][col] == 3)) {
        document.getElementById('cell' + (row - 1) + '-' + col).classList.add('square');
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