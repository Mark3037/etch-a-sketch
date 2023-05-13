const container = document.querySelector("div.container")

function gridSize() {
    size = prompt("How many rows/columns?");
    if(size > 100) {
        alert("Needs to be lower than 100");
        return gridSize()
    }
    for(let x = 0; x < size; x++) {
        newRow = document.createElement("div");
        newRow.className = "row";
        for(let y = 0; y < size; y++) {
            newCol = document.createElement("div");
            newCol.className = "column";
            newRow.appendChild(newCol);
        }
        container.appendChild(newRow);
    }
}

const sizeButton = document.querySelector("button.size");
sizeButton.addEventListener("click", () => gridSize()) ;

'create hover effect so divs change color when mouse passes over them'
    'this should create a trail like a pen would'

'make a button on top of the screen'
    'this button will prompt users for the number of squares for a new grid'
    'this number should not exceed 100'
    'the new grid should take up the same amount as the old one'

// optional extra credit:
//    when passing through a div, try changing it to a random rgb value
//    then maybe have each pass add 10% opacity