const compressNode = (node) => {
  let nodeElement;
  if (node.childElementCount === 1) {
    nodeElement = node.children[0];
  } else if (node.childElementCount >= 2) {
    const div = document.createElement("div");
    Array.from(node.children).forEach((node) => {
      div.appendChild(node);
    });
    nodeElement = div;
  }
  return nodeElement;
};

export default compressNode;
