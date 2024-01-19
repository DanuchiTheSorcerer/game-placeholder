let board = [[],[],[],[],[],[],[],[],[]]

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
    
}