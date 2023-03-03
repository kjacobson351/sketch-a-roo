let color = 0;
let customColor;






const resetButton = document.getElementById("resetBtn")
resetButton.addEventListener("click", resetGrid);

const pinkButton = document.getElementById("pinkBtn");
pinkButton.addEventListener("click", setColorReddish);

const blueButton = document.getElementById("blueBtn");
blueButton.addEventListener("click", setColorBluish);

const greenButton = document.getElementById("greenBtn");
greenButton.addEventListener("click", setColorGreenish);

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", setCustomColor);






let grid = document.querySelector(".grid")

function onUserInput() {
    resetGrid()
    userInput = document.getElementById("rangeSlider").value;
    destroyGriddyBoi()
    makeGriddyBoi()
    getColor()
    

    


}

// Makes a square grid from 1 input and adds unique id to each cell.
function makeGriddyBoi(dims) {
    
    dims = userInput
    for (let i = 0; i < (dims * dims); i++) {
        const div = document.createElement("div")
        div.classList.add("cell");
        div.id = "cell" + i;
        grid.appendChild(div);
    }
    //changes style attribute with a string literal. the grid template features will create the correct amount of columns based on user input, 1fr insures that each row and column is the same size.
    grid.setAttribute('style', `grid-template-columns: repeat(${dims}, 1fr); grid-template-rows: repeat(${dims}, 1fr);`);
};



//function to test buttons
function test(){
    console.log("test")
    console.log(colorPicker.value)
    customColor = colorPicker.value;
    console.log(customColor)

}

//iterates through each cell and changes background to white.
function resetGrid(dims) {
    dims = userInput
    for (let i = 0; i < dims * dims; i++) {
        document.getElementById("cell" + i).style.backgroundColor = "white";    
    }
    
};

//RANDOM COLOR FUNCTIONS////////////

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
};

function setColorDefault(dims) {
    dims = userInput;
for (let i = 0; i < dims * dims; i++) {
    document.getElementById("cell" + i).addEventListener("mouseover", () => {
        document.getElementById("cell" + i).style.backgroundColor = "black"
    })
}
};


function setColorReddish(dims) {
    dims = userInput;
    color = 1;
for (let i = 0; i < dims * dims; i++) {
    document.getElementById("cell" + i).addEventListener("mouseover", () => {
        document.getElementById("cell" + i).style.backgroundColor = pinksAndOrangesRGB()
    })
}
};

function setColorGreenish(dims) {
    dims = userInput;
    color = 2;
for (let i = 0; i < dims * dims; i++) {
    document.getElementById("cell" + i).addEventListener("mouseover", () => {
        document.getElementById("cell" + i).style.backgroundColor = greensAndYellowsRGB()
    })
}
};

function setColorBluish(dims) {
    dims = userInput;
    color = 3;
for (let i = 0; i < dims * dims; i++) {
    document.getElementById("cell" + i).addEventListener("mouseover", () => {
        document.getElementById("cell" + i).style.backgroundColor = bluesAndPurplesRGB()
    })
}
};

function setCustomColor(dims) {
dims = userInput;
customColor = colorPicker.value;
color = 4;
for (let i = 0; i < dims * dims; i++) {
    document.getElementById("cell" + i).addEventListener("mouseover", () => {
        document.getElementById("cell" + i).style.backgroundColor = customColor
    }) 
}
}
//////////////////

userInput = 12;

makeGriddyBoi()
setColorDefault()



function destroyGriddyBoi(){
const elements = document.getElementsByClassName("cell");
while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
}
}

function getColor() {
    switch (color) {
case 0: setColorDefault()
break;
case 1: setColorReddish()
break;
case 2: setColorGreenish()
break;
case 3: setColorBluish()
break;
case 4: setCustomColor()
    }
};

