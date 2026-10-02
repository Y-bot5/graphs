let squareSize = 10, grid = [], columns = Math.round(window.innerWidth / squareSize), rows = Math.round(window.innerHeight / squareSize);

const queries = window.location.search;
const urlParams = new URLSearchParams(queries);

let rules = urlParams.get("rules");
rules = rules.replaceAll("^", "**");

console.log(rules);


function setup() {
    createCanvas(windowWidth, windowHeight);
    
    for (let y = 0; y < height; y += squareSize) {
        for (let x = 0; x < width; x += squareSize) {
            let column = x / squareSize, row = y / squareSize;

            if ((column + row) % 2 === 0) {
                fill(26, 198, 156);
            } else {
                fill(167, 155, 156);
            }

            noStroke();
            rect(x, y, squareSize, squareSize);
        }
    }

    for (let x = 0; x < columns; x++) {
        grid[x] = [];
        for (let y = 0; y < rows; y++) {
            grid[x][y] = 0;
        }
    }

    console.log(grid);
}