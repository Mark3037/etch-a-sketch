const container = document.querySelector("div.container")

function gridSize() {
    reset();
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
//            newCol.addEventListener("mouseover", () => color(newCol))
            newRow.appendChild(newCol);
        }
        container.appendChild(newRow);
    }
    addEvent();
}

function reset() {
    const columns = document.querySelectorAll("div.column");
    const rows = document.querySelectorAll("div.row");
    columns.forEach(column => column.remove());
    rows.forEach(row => row.remove());
}

function addEvent() {
    const columns = document.querySelectorAll("div.column");
    columns.forEach(column => column.addEventListener("mouseover", () => color(column)))
}

function color(column) {
    column.classList.add("colored")
}

const sizeButton = document.querySelector("button.size");
sizeButton.addEventListener("click", () => gridSize()) ;

// optional extra credit:
//    when passing through a div, try changing it to a random rgb value
//    then maybe have each pass add 10% opacity