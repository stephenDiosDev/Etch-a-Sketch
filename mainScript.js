let sketchpad = document.querySelector(".sketchpad");
let mouseCurrentlyDown = false;

addGrid(sketchpad, 16);

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("mouseenter", function(e) {
    clearBtn.style.backgroundColor = "#b9c7cb";
});

clearBtn.addEventListener("mouseleave", function(e) {
    clearBtn.style.backgroundColor = "#ecf0f1";
});

clearBtn.addEventListener("mousedown", function(e) {
    clearBtn.style.backgroundColor = "#4e646a";
});

clearBtn.addEventListener("mouseup", function(e) {
    clearBtn.style.backgroundColor = "#b9c7cb";
    clearGrid();
});

function clearGrid() {
    let sketchpad = document.querySelector(".sketchpad");
    let rows = sketchpad.getElementsByClassName("row-div");

    for(let i = 0; i < rows.length; i++) {
        let row = rows[i];

        row.childNodes.forEach(pixel => {
            pixel.style.backgroundColor = "white";
        });
    }

    newGrid(sketchpad, prompt("Enter a new grid width between 0 and 100", 16));
}

function newGrid(sketchpad, size) {
    let actualWidth = 1;
    if(size > 1 && size < 101) {
        actualWidth = size;
    }
    else if(size > 101) {
        actualWidth = 100;
    }

    while(sketchpad.firstChild) {
        sketchpad.removeChild(sketchpad.firstChild);
    }
    
    //add new grid
    addGrid(sketchpad, actualWidth);
}

function addGrid(gridElement, size) {
    for(let row = 0; row < size; row++) {
        //add a div to hold the row
        let rowDiv = document.createElement('div');
        rowDiv.classList.add("row-div");
    
        //fill row div with divs
        for(let j = 0; j < size; j++) {
            let pixel = document.createElement('div');
            pixel.classList.add("pixel");
            pixel.style.backgroundColor = "white";

            let pixelOriginalColour = document.createElement('div');
            pixelOriginalColour.style.backgroundColor = "white";
            pixel.appendChild(pixelOriginalColour);
    
            pixel.addEventListener('mouseenter', function(e) {
                pixel.style.backgroundColor = "pink";
                if(mouseCurrentlyDown) {
                    draw(pixel, pixelOriginalColour);
                }
            });
    
            pixel.addEventListener('mouseleave', function(e) {
                pixel.style.backgroundColor = pixelOriginalColour.style.backgroundColor;
            });

            pixel.addEventListener('mousedown', function(e) {
                mouseCurrentlyDown = true;
                draw(pixel, pixelOriginalColour);
            });

            pixel.addEventListener('mouseup', function(e) {
                mouseCurrentlyDown = false;
            });
        
            rowDiv.appendChild(pixel);
        }
    
        //now that rowDiv is full, add to document
        gridElement.appendChild(rowDiv);
    }
}

function draw(pixel, originalColour) {
    let colourPickBtn = document.querySelector(".colour-picker");
    pixel.style.backgroundColor = colourPickBtn.value;
    originalColour.style.backgroundColor = colourPickBtn.value;
}