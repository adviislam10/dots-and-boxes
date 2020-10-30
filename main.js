// Constants and global variables
const NUM_ROWS = 15;
const NUM_COLS = 15;
let playerturn = 1;
let player1score = 0;
let player2score = 0;

// Create an array to represent a grid
let divs = createDivsArray();

// Create divs to model the grid array
createDivGrid(divs);

// Set Check Functions
checkTop = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row - 2][col] == 4) && (divs[row - 1][col - 1] == 4) && (divs[row - 1][col + 1] == 4) && (divs[row - 1][col] == 3)) {
        if (playerturn == 1) {
            document.getElementById('cell' + (row - 1) + '-' + col).classList.add('square1');
            playerScore();
        } else if (playerturn == 2) {
            document.getElementById('cell' + (row - 1) + '-' + col).classList.add('square2');
            playerScore();
        }
    } else {
        changePlayer();
    }
}

checkBottom = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row + 2][col] == 4) && (divs[row + 1][col - 1] == 4) && (divs[row + 1][col + 1] == 4) && (divs[row + 1][col] == 3)) {
        if (playerturn == 1) {
            document.getElementById('cell' + (row + 1) + '-' + col).classList.add('square1');
            playerScore();
        } else if (playerturn == 2) {
            document.getElementById('cell' + (row + 1) + '-' + col).classList.add('square2');
            playerScore();
        }
    } else {
        changePlayer();
    }
}


checkRight = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row][col + 2] == 4) && (divs[row + 1][col + 1] == 4) && (divs[row - 1][col + 1] == 4) && (divs[row][col + 1] == 3)) {
        if (playerturn == 1) {
            document.getElementById('cell' + row + '-' + (col + 1)).classList.add('square1');
            playerScore();
        } else if (playerturn == 2) {
            document.getElementById('cell' + row + '-' + (col + 1)).classList.add('square2');
            playerScore();
        }
    } else {
        changePlayer();
    }
}

checkLeft = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row][col - 2] == 4) && (divs[row + 1][col - 1] == 4) && (divs[row - 1][col - 1] == 4) && (divs[row][col - 1] == 3)) {
        if (playerturn == 1) {
            document.getElementById('cell' + row + '-' + (col - 1)).classList.add('square1');
            playerScore();
        } else if (playerturn == 2) {
            document.getElementById('cell' + row + '-' + (col - 1)).classList.add('square2');
            playerScore();
        }
    } else {
        changePlayer();
    }
}

// Player Score Function 
function playerScore() {
    if (playerturn == 1) {
        document.getElementById('p1score').innerHTML = player1score += 1;
    } else if (playerturn == 2) {
        document.getElementById('p2score').innerHTML = player2score += 1;
    }
}

// Change Player Turn
function changePlayer() {
    if (playerturn == 1) {
        playerturn = 2;
    } else if (playerturn == 2) {
        playerturn = 1;
    }

    //Display Player Turn
    playerDisp();
}

//Player Turn Display
function playerDisp() {
    if (playerturn == 1) {
        // Add player turn
        document.getElementById('playerdisp').innerHTML = 'PLAYER 1 TURN';
        document.getElementById('playerdisp').classList.add('player1turn');
    } else if (playerturn == 2) {
        // Add player turn
        document.getElementById('playerdisp').innerHTML = 'PLAYER 2 TURN';
        document.getElementById('playerdisp').classList.add('player2turn');
    }
    console.log(playerturn)
}