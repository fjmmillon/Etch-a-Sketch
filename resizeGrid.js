

function resizeSquareClass() {
    let squareSide = getSquareSize() * 0.95;
    var style = document.createElement('style');
    style.innerHTML =squareCss(squareSide);

    // Get the first script tag
    var ref = document.querySelector('script');

    // Insert our new styles before the first script tag
    ref.parentNode.insertBefore(style, ref);
}
function getSquareSize() {
    let { numRows, numCols } = getGridData();
    let verticalRestriction = getWindowHeigth() / numRows;
    let horizontalRestriction = getWindowWidth() / numCols;
    let sideSize = Math.min(verticalRestriction, horizontalRestriction);
    console.log(`${numRows} ${numCols}`)
    console.log([verticalRestriction, horizontalRestriction]);
    console.log(sideSize);
    return sideSize;
}

function getGridData() {//Temporal. Needs calculation
    //return actualGrid;//{numRows, numCols}
    let numRows = document.querySelectorAll(".row").length;
    let numCols = document.querySelectorAll("[id='0'] > .square").length;
    return ({numRows,numCols});

}

function getWindowWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}
function getWindowHeigth() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
}

function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
}

function vmin(v) {
    return Math.min(vh(v), vw(v));
}

function vmax(v) {
    return Math.max(vh(v), vw(v));
}
