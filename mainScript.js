console.log("Hello, World!");

let sketchpad = document.querySelector(".sketchpad");

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

    newGrid(sketchpad, prompt("Enter a new grid width between 0 and 100", 10));
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
    
            pixel.addEventListener('mouseenter', function(e) {
                pixel.style.backgroundColor = "pink";
            });
    
            pixel.addEventListener('mouseleave', function(e) {
                pixel.style.backgroundColor = "white";
            });
        
            rowDiv.appendChild(pixel);
        }
    
        //now that rowDiv is full, add to document
        gridElement.appendChild(rowDiv);
    }
}

/*
    TODO
        [X] Button to clear colour on grid
        [] Button to make a new grid of size 1 to 100 (1x1 to 100x100)
        [] RGB colour selector that changes drawable colour
        [] Make a grid that does not resize
            - Ideally it can grow evenly up, but cannot shrink past a certain size 
            - The details page does mention a 960px width and 960px height, so we 
                can just make a hardcoded height and width
*/