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

// Cell Complete Function
function cellComplete(row, col) {
    document.getElementById('cell' + row + '-' + col).classList.add('square' + playerturn);
    playerScore()
}

// Check Cell Functions
checkTop = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row - 2][col] == 4) && (divs[row - 1][col - 1] == 4) && (divs[row - 1][col + 1] == 4) && (divs[row - 1][col] == 3)) {
        cellComplete(row - 1, col);
        return true;
    } else {
        return false;
    }
}


checkBottom = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row + 2][col] == 4) && (divs[row + 1][col - 1] == 4) && (divs[row + 1][col + 1] == 4) && (divs[row + 1][col] == 3)) {
        cellComplete(row + 1, col);
        return true;
    } else {
        return false;
    }
}


checkRight = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row][col + 2] == 4) && (divs[row + 1][col + 1] == 4) && (divs[row - 1][col + 1] == 4) && (divs[row][col + 1] == 3)) {
        cellComplete(row, col + 1);
        return true;
    } else {
        return false;
    }
}

checkLeft = function (row, col) {
    if ((divs[row][col] == 4) && (divs[row][col - 2] == 4) && (divs[row + 1][col - 1] == 4) && (divs[row - 1][col - 1] == 4) && (divs[row][col - 1] == 3)) {
        cellComplete(row, col - 1);
        return true;
    } else {
        return false;
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
    // Check if line clicked was blank
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
        document.getElementById('playerdisp').classList.remove('player2turn');
        document.getElementById('playerdisp').classList.add('player1turn');
    } else if (playerturn == 2) {
        // Add player turn
        document.getElementById('playerdisp').innerHTML = 'PLAYER 2 TURN';
        document.getElementById('playerdisp').classList.remove('player1turn');
        document.getElementById('playerdisp').classList.add('player2turn');
    }
}