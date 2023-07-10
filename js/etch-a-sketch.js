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
            gridBlock.dataset.darkness = 0;
            gridRow.appendChild(gridBlock);
            gridBlock.addEventListener("mouseover", function (e) {
                gridBlock.classList.add("hover-colour");
                randomiseHSL(gridBlock);
            });
        }
    }
}

function randomiseHSL(gridBlock) {

    // Generates random values for HSL and applies it to .grid-block in CSS.

    let h = Math.random();
    let s = 50 + Math.random() * (100 - 50);
    let l = 60;
    let darkness = Number(gridBlock.dataset.darkness);

    h = Math.floor(h * 360);
    s = Math.floor(s);
    l = Math.floor(l);

    console.log(h, s, l);
    
    gridBlock.style.backgroundColor = `hsl(${h}, ${s}%, ${l - darkness}%)`;
    gridBlock.dataset.darkness += 5;

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
