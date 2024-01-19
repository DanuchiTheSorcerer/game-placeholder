let board = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]
let candidates = [[[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[]],[[],[],[],[],[],[],[],[],[]]]

function load() {
    for (let i = 1;i < 10;i++) {
        for (let j = 1;j < 10;j++) {
            let input = prompt("Insert for Number Cell " + i + j)
            board[i - 1][j - 1] = input
        }
    }
    requestAnimationFrame(draw)
}

function draw() {
    for (let i = 1;i < 10;i++) {
        for (let j = 1;j < 10;j++) {
            let displayValue = board[i - 1][j - 1]
            if (!displayValue) {
                displayValue = "_"
            } 
            document.getElementById("" + i + j).innerHTML = displayValue
        }
    }
    requestAnimationFrame(draw)
}

function solve() {
    for (let i = 0;i < 9;i++) {
        for (let j = 0;j < 9;j++) {
            //Update candidates
            //CANDIDATE FINDING STRATEGIES
            //columnRepeat => columns may not repeat numbers
            //rowRepeat => rows may not repeat numbers
            //groupRepeat => groups may not repeat numbers
            //numberToNumberGroupExclusivity => let n be a number 1-9, if n cells in a group all include a set of n candidates
            //that are not present in any other cell in the group then they lose all of their candidates other than those in that set
            //groupUniqueCandidate => Special case of numberToNumberGroupExclusivity where n is 1
            if (board[i][j] != 0) {
                candidates[i][j].push(board[i][j])
            } else {
                candidates[i][j] = candidateFinder(i, j)
            }
            //Change Stuff with candidates
            //SUDOKU SOLVING METHODS
            //oneCandidate => if a cell has only one candidate add to board array
            
            
            if (candidates[i][j].length == 1) {
                board[i][j] = candidates[i][j][0]
            }
        }
    }
}
// removes number from array
// array.splice(indexOf(number), 1)
// checks if number is in array
// if (array.indexOf(number) >= 0)


//returns array of candidates for inputed square
function candidateFinder(i, j) {
    let response = [1,2,3,4,5,6,7,8,9]

    for (let k = 0;k < 9;k++) {
        if (response.indexOf(board[k][j]) != -1) {
            response.splice(response.indexOf(board[k][j]), 1)
        }
    }
    for (let k = 0;k < 9;k++) {
        if (response.indexOf(board[i][k]) != -1) {
            response.splice(response.indexOf(board[i][k]), 1)
        }
    }
    for (let k = Math.floor(i /3) * 3; k <  Math.floor(i /3) * 3 + 3;k++) {
        for (let l = Math.floor(j /3) * 3; l <  Math.floor(j /3) * 3 + 3;l++) {
            if (response.indexOf(board[k][l]) != -1) {
                response.splice(response.indexOf(board[k][l]), 1)
            }
        }
    }
    return response
}