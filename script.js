//babysteps! first just make single grid with JS


function makeTableRow(height,width){
    let tableContainer = document.getElementById("container")
    for (let i = 0; i < height; i++) {
        let row = document.createElement("tr");
        row.id = "row" + i;
        tableContainer.appendChild(row)
        let rowI = document.getElementById("row" + i);
    for ( let j = 0; j < width; j++) {
           let cell = document.createElement("td")
         cell.id = "cell" + j
        rowI.appendChild(cell)
    }

    }
}

makeTableRow(50,50)