let userHeight = 25;
let userWidth = 25;
let rgb



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
    setColorDefault();
};

function setColorDefault(height, width) {
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
resetButton.addEventListener("click", resetGrid);

const pinkButton = document.getElementById("pinkBtn");
pinkButton.addEventListener("click", setColorReddish);

const blueButton = document.getElementById("blueBtn");
blueButton.addEventListener("click", setColorBluish);

const greenButton = document.getElementById("greenBtn");
greenButton.addEventListener("click", setColorGreenish)






function resetGrid() {
    for (let i = 0; i < userHeight; i++) {
        for (let j = 0; j < userWidth; j++) {

            document.getElementById("row" + i + "cell" + j).style.backgroundColor = "white";
        }
    }
    //makeGrid(userHeight,userWidth)
};
//creates a random number between 0 and 255
function random255() {
    return (Math.floor(Math.random() * 255))
}

// creates a random rbg value
function randomRGB() {
    let r;
    let g;
    let b;
    r = random255();
    g = random255();
    b = random255();
    //return'"' + "rgb" +"(" + r + "," + g + "," + b + ")"+ '"'
    return 'rgb(' + r + ',' + g + ',' + b + ')'
}

// maxes red values randomizes the rest
function pinksAndOrangesRGB() {
    let r;
    let g;
    let b;
    r = 255;
    g = random255();
    b = random255();
    //return'"' + "rgb" +"(" + r + "," + g + "," + b + ")"+ '"'
    return 'rgb(' + r + ',' + g + ',' + b + ')'
};
//maxes greeen values randomizes the rest
function greensAndYellowsRGB() {
    let r;
    let g;
    let b;
    r = random255();
    g = 255;
    b = random255();
    //return'"' + "rgb" +"(" + r + "," + g + "," + b + ")"+ '"'
    return 'rgb(' + r + ',' + g + ',' + b + ')'
}

//maxes blue values randomizes the rest
function bluesAndPurplesRGB() {
    let r;
    let g;
    let b;
    r = random255();
    g = random255();
    b = 255;
    //return'"' + "rgb" +"(" + r + "," + g + "," + b + ")"+ '"'
    return 'rgb(' + r + ',' + g + ',' + b + ')'
}


function setColorReddish(height, width) {
    height = userHeight;
    width = userWidth;
    for (let i = 0; i < userHeight; i++) {
        for (let j = 0; j < userWidth; j++) {

            document.getElementById("row" + i + "cell" + j).addEventListener("mouseover", () => { document.getElementById("row" + i + "cell" + j).style.backgroundColor = pinksAndOrangesRGB() })
        }
    }

};

function setColorGreenish(height, width) {
    height = userHeight;
    width = userWidth;
    for (let i = 0; i < userHeight; i++) {
        for (let j = 0; j < userWidth; j++) {

            document.getElementById("row" + i + "cell" + j).addEventListener("mouseover", () => { document.getElementById("row" + i + "cell" + j).style.backgroundColor = greensAndYellowsRGB() })
        }
    }

};


function setColorBluish(height, width) {
    height = userHeight;
    width = userWidth;
    for (let i = 0; i < userHeight; i++) {
        for (let j = 0; j < userWidth; j++) {

            document.getElementById("row" + i + "cell" + j).addEventListener("mouseover", () => { document.getElementById("row" + i + "cell" + j).style.backgroundColor = bluesAndPurplesRGB() })
        }
    }

};




