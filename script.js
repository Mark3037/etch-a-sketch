const container = document.querySelector("div.container");
let rainbow = false;

//prompt user to create a grid of divs based on number provided
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
            newRow.appendChild(newCol);
        }
        container.appendChild(newRow);
    }
    addEvent();
}

//remove grid
function reset() {
    const columns = document.querySelectorAll("div.column");
    const rows = document.querySelectorAll("div.row");
    columns.forEach(column => column.remove());
    rows.forEach(row => row.remove());
}

//add mouseover event listener to all divs in the grid
function addEvent() {
    const columns = document.querySelectorAll("div.column");
    columns.forEach(column => column.addEventListener("mouseover", () => color(column)));
}

//add color to div based on color choice
function color(column) {
    if(rainbow === true) {
        column.style.background = `rgb(${randNum()}, ${randNum()}, ${randNum()})`
    } else {
        column.style.background = "black";
    }
}

//create random number between 1 and 255
function randNum() {
    num = Math.floor(Math.random() * 255);
    return num
}

//remove colored class from all divs to clear grid
function clear() {
    const colored = document.querySelectorAll("div.column");
    colored.forEach(div => div.style.background = "white");
}

//add click event listener to button.size to create grid
const sizeButton = document.querySelector("button.size");
sizeButton.addEventListener("click", () => gridSize()) ;

//add click event listener to button.clear to clear grid
const clearButton = document.querySelector("button.clear");
clearButton.addEventListener("click", () => clear());

const blackButton = document.querySelector("button.black");
blackButton.addEventListener("click", () => rainbow = false);

const rainbowButton = document.querySelector("button.rainbow");
rainbowButton.addEventListener("click", () => rainbow = true);

//    then maybe have each pass add 10% opacity