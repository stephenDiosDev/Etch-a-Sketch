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

        pixel.addEventListener('mouseenter', function(e) {
            //console.log("MOUSE ENTER: ");
            //console.log(e);
            pixel.style.backgroundColor = "pink";
        });

        pixel.addEventListener('mouseleave', function(e) {
            //console.log("MOUSE LEAVE: ");
            //console.log(e);
            pixel.style.backgroundColor = "white";
        });
    
        rowDiv.appendChild(pixel);
    }

    //now that rowDiv is full, add to document
    sketchpad.appendChild(rowDiv);
}

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
    //loop thru all row-div from sketchpad
    //loop thru all pixel from current row-div
    //set pixel background colour to white
    let sketchpad = document.querySelectorAll(".sketchpad");
    
    //console.log(sketchpad[0]);
    let rows = sketchpad[0].getElementsByClassName("row-div");
    //console.log(rows);

    for(let i = 0; i < rows.length; i++) {
        let row = rows[i];

        row.childNodes.forEach(pixel => {
            //console.log(pixel);
            pixel.style.backgroundColor = "white";
        });


    }
    



    console.log("GRID CLEARED");
}

/*
    TODO
        [] Button to clear colour on grid
            - button is added, add functionality and responsiveness
        [] Button to make a new grid of size 1 to 100 (1x1 to 100x100)
        [] RGB colour selector that changes drawable colour
        [] Make a grid that does not resize
            - Ideally it can grow evenly up, but cannot shrink past a certain size 
*/