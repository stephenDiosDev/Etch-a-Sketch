console.log("Hello, World!");

let sketchpad = document.querySelector(".sketchpad");


for(let row = 0; row < 16; row++) {
    //add a div to hold the row
    let rowDiv = document.createElement('div');
    rowDiv.classList.add("row-div");

    //fill row div with 16 divs
    for(let j = 0; j < 16; j++) {
        let pixel = document.createElement('div');
        pixel.classList.add("pixel");
        rowDiv.appendChild(pixel);
    }

    //now that rowDiv is full, add to document
    sketchpad.appendChild(rowDiv);
}