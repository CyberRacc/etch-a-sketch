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
            gridBlock.addEventListener("mouseover", function (e) {
                gridBlock.classList.add("hover-colour");
                randomiseRGB(gridBlock);
            });
        }
    }
}

function randomiseRGB(gridBlock) {
    let r = Math.random();
    let g = Math.random();
    let b = Math.random();

    r = Math.floor(r * 255);
    g = Math.floor(g * 255);
    b = Math.floor(b * 255);
    
    gridBlock.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

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
