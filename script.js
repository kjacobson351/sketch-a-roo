let userHeight = 10;
let userWidth = 10;



function makeGrid(height, width) {
    height = userHeight;
    width = userWidth;
    let tableContainer = document.getElementById("container")
    //this loop creates tr (table row) elements. 
    for (let i = 0; i < height; i++) {
        let row = document.createElement("tr");
        //adds id to each row
        row.id = "row" + i;
        //adds row to the container div
        tableContainer.appendChild(row)
        // this loop creates cells appends them to the rows and gives them unique id.
        for (let j = 0; j < width; j++) {
            let cell = document.createElement("td");
            cell.id = "row" + i + "cell" + j;
            row.appendChild(cell)
            // an event listener is added to each cell that changes the class on a mouse over event.
            /* document.getElementById("row" + i + "cell" + j)
                 .addEventListener("mouseover", () => { document.getElementById("row" + i + "cell" + j).classList = ("activated") });*/
        }
    }
    setColor();
};

function setColor(height, width) {
    height = userHeight;
    width = userWidth;
    for (let i = 0; i < userHeight; i++) {
        for (let j = 0; j < userWidth; j++) {

            document.getElementById("row" + i + "cell" + j).addEventListener("mouseover", () => { document.getElementById("row" + i + "cell" + j).style.backgroundColor = "black" })
        }
    }

};


makeGrid(userHeight, userWidth);

const resetButton = document.getElementById("resetBtn")
resetButton.addEventListener("click", resetGrid)




function resetGrid() {
    for (let i = 0; i < userHeight; i++) {
        for (let j = 0; j < userWidth; j++) {

            document.getElementById("row" + i + "cell" + j).style.backgroundColor = "white";
        }
    }
    //makeGrid(userHeight,userWidth)
};

