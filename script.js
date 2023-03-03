let color = 0;
let customColor;
let colorMemCount = 0


let colorMemory1;
let colorMemory2;
let colorMemory3;
let colorMemory4;
let colorMemory5;






const resetButton = document.getElementById("resetBtn")
resetButton.addEventListener("click", resetGrid);

const pinkButton = document.getElementById("pinkBtn");
pinkButton.addEventListener("click", setColorReddish);

const blueButton = document.getElementById("blueBtn");
blueButton.addEventListener("click", setColorBluish);

const greenButton = document.getElementById("greenBtn");
greenButton.addEventListener("click", setColorGreenish);

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", () => {
    setCustomColor();
    createColorMemory()
});






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
function test() {
    console.log("test")


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



function destroyGriddyBoi() {
    const elements = document.getElementsByClassName("cell");
    while (elements.length > 0) {
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
            break;
        case 5: setMemoryColor1()
            break;
        case 6: setMemoryColor2()
            break;
        case 7: setMemoryColor3()
            break;
        case 8: setMemoryColor4()
            break;
        case 9: setMemoryColor5()
            break;
    }
};

function createColorMemory() {
    colorMemCount++
    switch (colorMemCount) {
        case 1:
            const colorMemory1Btn = document.createElement("button");
            colorMemory1Btn.addEventListener("click", setMemoryColor1)
            colorMemory1Btn.textContent = "Color Memory 1";
            colorMemDiv = document.getElementById("colorMemory")
            colorMemDiv.appendChild(colorMemory1Btn)
            colorMemory1 = customColor
            colorMemory1Btn.style.background = colorMemory1;
            break;
        case 2:
            const colorMemory2Btn = document.createElement("button");
            colorMemory2Btn.addEventListener("click", setMemoryColor2)
            colorMemory2Btn.textContent = "Color Memory 2";
            colorMemDiv = document.getElementById("colorMemory")
            colorMemDiv.appendChild(colorMemory2Btn)
            colorMemory2 = customColor
            colorMemory2Btn.style.background = colorMemory2;
            break;
        case 3:

            const colorMemory3Btn = document.createElement("button");
            colorMemory3Btn.addEventListener("click", setMemoryColor3)
            colorMemory3Btn.textContent = "Color Memory 3";
            colorMemDiv = document.getElementById("colorMemory")
            colorMemDiv.appendChild(colorMemory3Btn)
            colorMemory3 = customColor
            colorMemory3Btn.style.background = colorMemory3;
            break;
            case 4:

            const colorMemory4Btn = document.createElement("button");
            colorMemory4Btn.addEventListener("click", setMemoryColor4)
            colorMemory4Btn.textContent = "Color Memory 4";
            colorMemDiv = document.getElementById("colorMemory")
            colorMemDiv.appendChild(colorMemory4Btn)
            colorMemory4 = customColor
            colorMemory4Btn.style.background = colorMemory4;
            break;
            case 5:

            const colorMemory5Btn = document.createElement("button");
            colorMemory5Btn.addEventListener("click", setMemoryColor5)
            colorMemory5Btn.textContent = "Color Memory 5";
            colorMemDiv = document.getElementById("colorMemory")
            colorMemDiv.appendChild(colorMemory5Btn)
            colorMemory5 = customColor
            colorMemory5Btn.style.background = colorMemory5;
            const resetMemoryBtn = document.createElement("button");
            resetMemoryBtn.addEventListener("click",resetColorMemory)
            resetMemoryBtn.textContent = "Reset Color Memory";
            colorMemDiv.appendChild(resetMemoryBtn)
            break;

    }
};

function resetColorMemory(){
    colorMemCount = 0
    const element = document.getElementById("colorMemory");
    element.remove();
    colorMemDiv = document.createElement("div");
    colorMemDiv.setAttribute("id","colorMemory")
    let target = document.getElementById("colorMemoryWrapper");
    target.appendChild(colorMemDiv)
}
///COLOR MEMORY FUNCTIONS/////////////////
function setMemoryColor1(dims) {
    dims = userInput;
    color = 5;
    for (let i = 0; i < dims * dims; i++) {
        document.getElementById("cell" + i).addEventListener("mouseover", () => {
            document.getElementById("cell" + i).style.backgroundColor = colorMemory1
        })
    }
};

function setMemoryColor2(dims) {
    dims = userInput;
    color = 5;
    for (let i = 0; i < dims * dims; i++) {
        document.getElementById("cell" + i).addEventListener("mouseover", () => {
            document.getElementById("cell" + i).style.backgroundColor = colorMemory2
        })
    }
};

function setMemoryColor3(dims) {
    dims = userInput;
    color = 5;
    for (let i = 0; i < dims * dims; i++) {
        document.getElementById("cell" + i).addEventListener("mouseover", () => {
            document.getElementById("cell" + i).style.backgroundColor = colorMemory3
        })
    }
};

function setMemoryColor4(dims) {
    dims = userInput;
    color = 5;
    for (let i = 0; i < dims * dims; i++) {
        document.getElementById("cell" + i).addEventListener("mouseover", () => {
            document.getElementById("cell" + i).style.backgroundColor = colorMemory4
        })
    }
};

function setMemoryColor5(dims) {
    dims = userInput;
    color = 5;
    for (let i = 0; i < dims * dims; i++) {
        document.getElementById("cell" + i).addEventListener("mouseover", () => {
            document.getElementById("cell" + i).style.backgroundColor = colorMemory5
        })
    }
};



