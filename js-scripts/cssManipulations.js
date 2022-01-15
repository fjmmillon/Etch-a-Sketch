
function squareCss(pxSquareSide){return `.square {
    width: ${pxSquareSide}px;
    height: ${pxSquareSide}px;
}`}
function changeSquareColor(squareEl){
    squareEl.classList.add("selected");
}

