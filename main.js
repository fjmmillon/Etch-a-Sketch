//clearPage();
//let actualGrid = createGrid(5,5);
window.onresize = resizeSquareClass;
document.querySelector("#new-grid-btn").addEventListener("click", handleNewGridBtnClick);

window.onmousedown = e => e.preventDefault();
window.onmousemove = handleMouseMove;