// Constants and global variables
const NUM_ROWS = 15;
const NUM_COLS = 15;
let playerturn = 1;

// Create an array to represent a grid
let divs = createDivsArray();

// Create divs to model the grid array
createDivGrid(divs);

//Player Turn Process
if (playerturn == 1) {
    // Add player turn
    document.getElementById('playerdisp').innerHTML = 'PLAYER 1 TURN';
    document.getElementById('playerdisp').classList.add('player1turn');
} else if (playerturn == 2) {
    // Add player turn
    document.getElementById('playerdisp').innerHTML = 'PLAYER 2 TURN';
    document.getElementById('playerdisp').classList.add('player2turn');
}

// Set Check Functions
checkTop = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row - 2][col] == 4) && (divs[row - 1][col - 1] == 4) && (divs[row - 1][col + 1] == 4) && (divs[row - 1][col] == 3)) {
        if (playerturn == 1) {
            document.getElementById('cell' + (row - 1) + '-' + col).classList.add('square1');
        } else {
            document.getElementById('cell' + (row - 1) + '-' + col).classList.add('square2');
        }
    } else {
        changePlayer();
    }
}

checkBottom = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row + 2][col] == 4) && (divs[row + 1][col - 1] == 4) && (divs[row + 1][col + 1] == 4) && (divs[row + 1][col] == 3)) {
        if (playerturn == 1) {
            document.getElementById('cell' + (row - 1) + '-' + col).classList.add('square1');
        } else {
            document.getElementById('cell' + (row - 1) + '-' + col).classList.add('square2');
        }
    } else {
        changePlayer();
    }
}


checkRight = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row][col + 2] == 4) && (divs[row + 1][col + 1] == 4) && (divs[row - 1][col + 1] == 4) && (divs[row][col + 1] == 3)) {
        if (playerturn == 1) {
            document.getElementById('cell' + (row - 1) + '-' + col).classList.add('square1');
        } else {
            document.getElementById('cell' + (row - 1) + '-' + col).classList.add('square2');
        }
    } else {
        changePlayer();
    }
}

checkLeft = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row][col - 2] == 4) && (divs[row + 1][col - 1] == 4) && (divs[row - 1][col - 1] == 4) && (divs[row][col - 1] == 3)) {
        if (playerturn == 1) {
            document.getElementById('cell' + (row - 1) + '-' + col).classList.add('square1');
        } else {
            document.getElementById('cell' + (row - 1) + '-' + col).classList.add('square2');
        }
    } else {
        changePlayer();
    }
}

// Change Player
function changePlayer() {

}