function clearPage()  {
    const myNode = document.querySelector("body");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
};