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

/*
    TODO
        [] Button to clear colour on grid
        [] Button to make a new grid of size 1 to 100 (1x1 to 100x100)
        [] RGB colour selector that changes drawable colour
        [] Make a grid that does not resize
            - Ideally it can grow evenly up, but cannot shrink past a certain size 
*/