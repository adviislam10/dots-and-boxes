// Div Functions
function createDivsArray() {
    // Create and return a div array
    return [
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    ];
}

// Create divs
function createDivGrid(divs) {
    for (let row = 0; row < NUM_ROWS; row++) {
        for (let col = 0; col < NUM_COLS; col++) {
            // Create a div for each element in 2D div
            let divEl = document.createElement('div');

            // Add an id to each divEl
            divEl.id = 'cell' + row + '-' + col;

            // Add appropriate class to each divEl
            if (divs[row][col] == 0) {
                divEl.classList.add('dot');
            } else if (divs[row][col] == 1) {
                divEl.classList.add('hz-line');
            } else if (divs[row][col] == 2) {
                divEl.classList.add('vt-line');
            } else if (divs[row][col] == 3) {
                divEl.classList.add('cell');
            }

            // Add dataset values for row and col
            divEl.dataset.row = row;
            divEl.dataset.col = col;

            // Add an event listener to each divEl 
            divEl.addEventListener('click', lineClicked);

            // Add div to container
            document.getElementById('container').append(divEl);

        }
    }
}


// LINE FUNCTIONS

function lineClicked(event) {
    // Get row and col of clicked cell
    let row = +event.target.dataset.row;
    let col = +event.target.dataset.col;

    // Update clicked lines
    if (divs[row][col] == 1 || divs[row][col] == 2) {
        event.target.classList.add('highlight');
        divs[row][col] = 4;
    }

    // Determine if line is vertical or horizontal
    if (row % 2 == 0) {
        checkHorz(row, col);
    } else {
        checkVert(row, col);
    }
}

// Processing Vertical Lines
function checkVert(row, col) {

    // Check Lines
    if (col == 0) {
        checkRight(row, col);
    } else if (col == 14) {
        checkLeft(row, col);
    } else {
        checkLeft(row, col);
        checkRight(row, col);
    }
}

// Processing Horizontal Lines
function checkHorz(row, col) {

    // Check Lines
    if (row == 0) {
        checkBottom(row, col);
    } else if (row == 14) {
        checkTop(row, col);
    } else {
        checkTop(row, col);
        checkBottom(row, col);
    }
}