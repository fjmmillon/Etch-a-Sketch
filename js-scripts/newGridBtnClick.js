function handleNewGridBtnClick (event){
    setTimeout(()=>{
    let limit = inp => inp>100? 100: inp;
    let nRows = limit(Math.abs(parseInt(prompt("Number of rows?"),10)));
    let nCols = limit(Math.abs(parseInt(prompt("Number of cols?"),10)));
    clearContainer();
    createGrid(nRows,nCols);
    storageOfEl= undefined;

},0)};