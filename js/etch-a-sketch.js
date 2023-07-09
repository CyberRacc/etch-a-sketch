// Variables
const gridContainer = document.querySelector(".board-grid");
const startButtonContainer = document.querySelector(".start-button-container");
const startButton = document.querySelector(".start-button");

// Functions
function setGridSize() {

    let gridSize = prompt("Enter grid size, 16 for 16x16 grid etc. max 100:");

    if (gridSize > 100) {
        alert("ERROR: width/height must be smaller than 100")
    } else if (gridSize == null) {
        alert("Cancelled")  
    } else if (isNaN(gridSize) || gridSize == "" || gridSize < 0) {
        alert("ERROR: Incorrect value");
    } else {
        gridSize = Number(gridSize);
        createGrid(gridSize);
    }
}

function createGrid(gridSize) {

    startButtonContainer.removeChild(startButton);

    for(let i = 0; i < gridSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        gridContainer.appendChild(gridRow);
    
        for(let j = 0; j < gridSize; j++) {
            const gridBlock = document.createElement("div");
            gridBlock.classList.add("grid-block");
            gridRow.appendChild(gridBlock);
            gridBlock.addEventListener("mouseover", function () {
                gridBlock.classList.add("hover-colour");
            });
        }
    }
}

function randomiseRGB() {
    let r = Math.random()
    let g = Math.random()
    let b = Math.random()

    r *= 255;
    g *= 255;
    b *= 255;

    console.log(`R = ${r}`)
    console.log(`G = ${g}`)
    console.log(`B = ${b}`)
}

// Listeners
startButton.addEventListener("click", function (e) {
    setGridSize();
});

startButton.addEventListener("mouseover", function (e) {
    startButton.classList.add("button-hover");
});

startButton.addEventListener("mouseout", function (e) {
    startButton.classList.remove("button-hover");
});
