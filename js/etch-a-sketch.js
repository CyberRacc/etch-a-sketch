const gridContainer = document.querySelector(".board-grid");
const startButtonContainer = document.querySelector(".start-button-container");
const startButton = document.querySelector(".start-button");

// Functions
function setGridSize() {

    let gridSize = prompt("Grid size: ");

    if (gridSize > 100) {
        alert("ERROR: width/height must be smaller than 100.")
    } else if (gridSize == null) {
        alert("Cancelled")  
    } else if (isNaN(gridSize) || gridSize == "") {
        alert("ERROR: Incorrect values");
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

startButton.addEventListener("click", function (e) {
    setGridSize();
});
