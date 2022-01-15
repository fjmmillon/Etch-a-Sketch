

function createGrid(numRows, numCols) {
    let containerElement = document.getElementById('.container');
    if (!containerElement) containerElement= createEmpyContainer();
    let rowsSeq = createArrSeq(numRows);
    let colsSeq = createArrSeq(numCols);
    let rowsArr = rowsSeq.reduce((acc, rowId) => {
        let createdRow = createRow(containerElement, rowId);
        return acc.concat(createdRow);
    }, [])
    rowsArr.forEach(rowEl => createAllSquareForRow(rowEl, colsSeq));
    resizeSquareClass();
    return ({numRows,numCols});
}
function createArrSeq(numOfEls) { return [...Array(numOfEls).keys()] };
function createRow(containerElement, num) {
    let rowDivEl = document.createElement('div');
    rowDivEl.setAttribute('id', num);
    rowDivEl.setAttribute('class', 'row');
    //rowDivEl.innerText = "R" + num;
    containerElement.appendChild(rowDivEl);
    return rowDivEl;
}

function createSquare(rowEl, idForSq) {
    let sqDivEl = document.createElement('div');
    sqDivEl.setAttribute('id', idForSq);
    sqDivEl.setAttribute('class', 'square');
    //sqDivEl.innerText = "" + idForSq;
    rowEl.appendChild(sqDivEl);
}

function createAllSquareForRow(rowEl, squaresSeq) {
    squaresSeq.forEach((el, idx) => {
        createSquare(rowEl, '' + rowEl.id + idx);
    })
}

function createEmpyContainer(){
    let container = document.createElement('div');
    container.setAttribute('id', "container");
    container.setAttribute('class', 'container');
    document.querySelector("body").appendChild(container);
    return container;
}


