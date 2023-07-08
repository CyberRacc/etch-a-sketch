const gridContainer = document.querySelector(".board-grid");

function createGrid() {
    for(let i = 0; i < 16; i++) {

        const gridRow = document.createElement("div")
        gridRow.classList.add("grid-row")
        

        for(let j = 0; j < 16; j++) {
            const gridBlock = document.createElement("div");
            gridBlock.classList.add("grid-block");
            gridRow.appendChild(gridBlock);
            gridContainer.appendChild(gridRow);
        }
    }
}

createGrid();