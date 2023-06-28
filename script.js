let color = 0;
let customColor;
let colorMemCount = 0

let colorMemory1;
let colorMemory2;
let colorMemory3;
let colorMemory4;
let colorMemory5;
let colorMemory6;
let colorMemory7;
let colorMemory8;
let colorMemory9;
let colorMemory10;

const resetButton = document.getElementById("resetBtn")
resetButton.addEventListener("click", resetGrid);

const pinkButton = document.getElementById("pinkBtn");
pinkButton.addEventListener("click", setColorReddish);

const blueButton = document.getElementById("blueBtn");
blueButton.addEventListener("click", setColorBluish);

const greenButton = document.getElementById("greenBtn");
greenButton.addEventListener("click", setColorGreenish);

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", () => {
    setCustomColor();
    createColorMemory()
});

const subHeading = document.getElementById("subHeading")


let grid = document.querySelector(".grid")

//sets default grid size and generates the first grid without user input
userInput = 12;
makeGriddyBoi()
setColorDefault()
setInterval(subheadingGenerator, 5000);


function onUserInput() {
    resetGrid()
    userInput = document.getElementById("rangeSlider").value;
    destroyGriddyBoi()
    makeGriddyBoi()
    getColor()
};

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
/////////////END RANDOM COLOR FUNCTIONS///////////////////

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
        case 10: setMemoryColor6()
            break;
        case 11: setMemoryColor7()
            break;
        case 12: setMemoryColor8()
            break;
        case 13: setMemoryColor9()
            break;
        case 14: setMemoryColor10()
            break;
    }
};

function createColorMemory() {
    colorMemCount++
    switch (colorMemCount) {
        case 1:
            const colorMemory1Btn = document.createElement("button");
            colorMemory1Btn.addEventListener("click", setMemoryColor1)
            colorMemory1Btn.textContent = "";
            colorMemDiv = document.getElementById("colorMemory")
            colorMemDiv.appendChild(colorMemory1Btn)
            colorMemory1 = customColor
            colorMemory1Btn.style.background = colorMemory1;
            break;
        case 2:
            const colorMemory2Btn = document.createElement("button");
            colorMemory2Btn.addEventListener("click", setMemoryColor2)
            colorMemory2Btn.textContent = "";
            colorMemDiv = document.getElementById("colorMemory")
            colorMemDiv.appendChild(colorMemory2Btn)
            colorMemory2 = customColor
            colorMemory2Btn.style.background = colorMemory2;
            break;
        case 3:
            const colorMemory3Btn = document.createElement("button");
            colorMemory3Btn.addEventListener("click", setMemoryColor3)
            colorMemory3Btn.textContent = "";
            colorMemDiv = document.getElementById("colorMemory")
            colorMemDiv.appendChild(colorMemory3Btn)
            colorMemory3 = customColor
            colorMemory3Btn.style.background = colorMemory3;
            break;
        case 4:
            const colorMemory4Btn = document.createElement("button");
            colorMemory4Btn.addEventListener("click", setMemoryColor4)
            colorMemory4Btn.textContent = "";
            colorMemDiv = document.getElementById("colorMemory")
            colorMemDiv.appendChild(colorMemory4Btn)
            colorMemory4 = customColor
            colorMemory4Btn.style.background = colorMemory4;
            break;
        case 5:
            const colorMemory5Btn = document.createElement("button");
            colorMemory5Btn.addEventListener("click", setMemoryColor5)
            colorMemory5Btn.textContent = "";
            colorMemDiv = document.getElementById("colorMemory")
            colorMemDiv.appendChild(colorMemory5Btn)
            colorMemory5 = customColor
            colorMemory5Btn.style.background = colorMemory5;

            break;
        case 6:

            const colorMemory6Btn = document.createElement("button");
            colorMemory6Btn.addEventListener("click", setMemoryColor6)
            colorMemory6Btn.textContent = "";
            colorMemDiv = document.getElementById("colorMemory")
            colorMemDiv.appendChild(colorMemory6Btn)
            colorMemory6 = customColor
            colorMemory6Btn.style.background = colorMemory6;
            break;
        case 7:
            const colorMemory7Btn = document.createElement("button");
            colorMemory7Btn.addEventListener("click", setMemoryColor7)
            colorMemory7Btn.textContent = "";
            colorMemDiv = document.getElementById("colorMemory")
            colorMemDiv.appendChild(colorMemory7Btn)
            colorMemory7 = customColor
            colorMemory7Btn.style.background = colorMemory7;
            break;
        case 8:

            const colorMemory8Btn = document.createElement("button");
            colorMemory8Btn.addEventListener("click", setMemoryColor8)
            colorMemory8Btn.textContent = "";
            colorMemDiv = document.getElementById("colorMemory")
            colorMemDiv.appendChild(colorMemory8Btn)
            colorMemory8 = customColor
            colorMemory8Btn.style.background = colorMemory8;
            break;
        case 9:
            const colorMemory9Btn = document.createElement("button");
            colorMemory9Btn.addEventListener("click", setMemoryColor9)
            colorMemory9Btn.textContent = "";
            colorMemDiv = document.getElementById("colorMemory")
            colorMemDiv.appendChild(colorMemory9Btn)
            colorMemory9 = customColor
            colorMemory9Btn.style.background = colorMemory9;
            break;
        case 10:
            const colorMemory10Btn = document.createElement("button");
            colorMemory10Btn.addEventListener("click", setMemoryColor10)
            colorMemory10Btn.textContent = "";
            colorMemDiv = document.getElementById("colorMemory")
            colorMemDiv.appendChild(colorMemory10Btn)
            colorMemory10 = customColor
            colorMemory10Btn.style.background = colorMemory10;
            const resetMemoryBtn = document.createElement("button");
            resetMemoryBtn.setAttribute("id", "color-reset-button")
            resetMemoryBtn.addEventListener("click", resetColorMemory)
            resetMemoryBtn.textContent = "Reset Color Memory";
            colorMemDiv.appendChild(resetMemoryBtn)
            break;

    }
};

function resetColorMemory() {
    colorMemCount = 0
    const element = document.getElementById("colorMemory");
    element.remove();
    colorMemDiv = document.createElement("div");
    colorMemDiv.setAttribute("id", "colorMemory")
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
    color = 6;
    for (let i = 0; i < dims * dims; i++) {
        document.getElementById("cell" + i).addEventListener("mouseover", () => {
            document.getElementById("cell" + i).style.backgroundColor = colorMemory2
        })
    }
};

function setMemoryColor3(dims) {
    dims = userInput;
    color = 7;
    for (let i = 0; i < dims * dims; i++) {
        document.getElementById("cell" + i).addEventListener("mouseover", () => {
            document.getElementById("cell" + i).style.backgroundColor = colorMemory3
        })
    }
};

function setMemoryColor4(dims) {
    dims = userInput;
    color = 8;
    for (let i = 0; i < dims * dims; i++) {
        document.getElementById("cell" + i).addEventListener("mouseover", () => {
            document.getElementById("cell" + i).style.backgroundColor = colorMemory4
        })
    }
};

function setMemoryColor5(dims) {
    dims = userInput;
    color = 9;
    for (let i = 0; i < dims * dims; i++) {
        document.getElementById("cell" + i).addEventListener("mouseover", () => {
            document.getElementById("cell" + i).style.backgroundColor = colorMemory5
        })
    }
};

function setMemoryColor6(dims) {
    dims = userInput;
    color = 10;
    for (let i = 0; i < dims * dims; i++) {
        document.getElementById("cell" + i).addEventListener("mouseover", () => {
            document.getElementById("cell" + i).style.backgroundColor = colorMemory6
        })
    }
};

function setMemoryColor7(dims) {
    dims = userInput;
    color = 11;
    for (let i = 0; i < dims * dims; i++) {
        document.getElementById("cell" + i).addEventListener("mouseover", () => {
            document.getElementById("cell" + i).style.backgroundColor = colorMemory7
        })
    }
};

function setMemoryColor8(dims) {
    dims = userInput;
    color = 12;
    for (let i = 0; i < dims * dims; i++) {
        document.getElementById("cell" + i).addEventListener("mouseover", () => {
            document.getElementById("cell" + i).style.backgroundColor = colorMemory8
        })
    }
};

function setMemoryColor9(dims) {
    dims = userInput;
    color = 13;
    for (let i = 0; i < dims * dims; i++) {
        document.getElementById("cell" + i).addEventListener("mouseover", () => {
            document.getElementById("cell" + i).style.backgroundColor = colorMemory9
        })
    }
};

function setMemoryColor10(dims) {
    dims = userInput;
    color = 14;
    for (let i = 0; i < dims * dims; i++) {
        document.getElementById("cell" + i).addEventListener("mouseover", () => {
            document.getElementById("cell" + i).style.backgroundColor = colorMemory10
        })
    }
};
//nationalities has 190 elements genders has 9
function subheadingGenerator() {
    let nationalitiesElement;
    let gendersElement;
    const nationalities = ["Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguans", "Argentinean", "Armenian", "Australian", "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Barbudans", "Batswana", "Belarusian", "Belgian", "Belizean", "Beninese", "Bhutanese", "Bolivian", "Bosnian", "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinabe", "Burmese", "Burundian", "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", "Central African", "Chadian", "Chilean", "Chinese", "Colombian", "Comoran", "Congolese", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djibouti", "Dominican", "Dutch", "East Timorese", "Ecuadorean", "Egyptian", "Emirian", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian", "Fijian", "Filipino", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", "Grenadian", "Guatemalan", "Guinea-Bissauan", "Guinean", "Guyanese", "Haitian", "Herzegovinian", "Honduran", "Hungarian", "I-Kiribati", "Icelander", "Indian", "Indonesian", "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", "Kazakhstani", "Kenyan", "Kittian and Nevisian", "Kuwaiti", "Kyrgyz", "Laotian", "Latvian", "Lebanese", "Liberian", "Libyan", "Liechtensteiner", "Lithuanian", "Luxembourger", "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldivan", "Malian", "Maltese", "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monacan", "Mongolian", "Moroccan", "Mosotho", "Motswana", "Mozambican", "Namibian", "Nauruan", "Nepalese", "New Zealander", "Nicaraguan", "Nigerian", "Nigerien", "North Korean", "Northern Irish", "Norwegian", "Omani", "Pakistani", "Palauan", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Polish", "Portuguese", "Qatari", "Romanian", "Russian", "Rwandan", "Saint Lucian", "Salvadoran", "Samoan", "San Marinese", "Sao Tomean", "Saudi", "Scottish", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean", "Slovakian", "Slovenian", "Solomon Islander", "Somali", "South African", "South Korean", "Spanish", "Sri Lankan", "Sudanese", "Surinamer", "Swazi", "Swedish", "Swiss", "Syrian", "Taiwanese", "Tajik", "Tanzanian", "Thai", "Togolese", "Tongan", "Trinidadian or Tobagonian", "Tunisian", "Turkish", "Tuvaluan", "Ugandan", "Ukrainian", "Uruguayan", "Uzbekistani", "Venezuelan", "Vietnamese", "Welsh", "Yemenite"]

    const genders = ["boys", "girls", "genderfluids", "agenders", "bigenders"];

    nationalitiesElement = Math.floor(Math.random() * nationalities.length);

    gendersElement = Math.floor(Math.random() * genders.length);

    subHeading.innerText = `"Sketch me like one of your ${nationalities[nationalitiesElement]} ${genders[gendersElement]}."`

};

console.log(subheadingGenerator())







