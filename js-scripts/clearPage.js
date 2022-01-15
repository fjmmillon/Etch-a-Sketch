function clearContainer()  {
    const myNode = [...document.querySelectorAll("#container")];
    myNode.forEach(node =>{
    while (node.firstChild) {
      node.removeChild(node.lastChild);
    }
  });
};
