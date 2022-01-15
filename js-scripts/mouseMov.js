let storageOfEl = undefined;
function handleMouseMove(e){
    let selectedEl = document.elementFromPoint(e.clientX, e.clientY);
    let selectedClass = selectedEl.className;
    let isSquare = str => str === 'square';
    let leftButtonClicked = event => event.buttons == 1;
    let isDifferentElSelected = (selectedEl !== storageOfEl);
    //if (isDifferentElSelected) storageOfEl = selectedEl;
    if( isDifferentElSelected && isSquare(selectedClass) && leftButtonClicked(e)){ //console.log(`Square ${selectedEl.id} selected`)
        storageOfEl = selectedEl;
        changeSquareColor(selectedEl);
    };
};
