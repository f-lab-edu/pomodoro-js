export const isNodeChanged = (oldNode, newNode) => {
  const oldAttributes = oldNode.attributes;
  const newAttributes = newNode.attributes;
  if (oldAttributes.length != newAttributes.length) {
    return true;
  }

  const diffrentAttribute = Array.from(oldAttributes).find((attribute) => {
    const { name } = attribute;
    const attribute1 = oldNode.getAttribute(name);
    const attribute2 = newNode.getAttribute(name);
    return attribute1 != attribute2;
  });

  if (diffrentAttribute) {
    return true;
  }

  const differentValue =
    oldNode.children.length === 0 &&
    newNode.children.length === 0 &&
    oldNode.textContent !== newNode.textContent;

  return differentValue;
};

const applyDiff = (parentNode, oldNode, newNode) => {
  if (!oldNode && newNode) {
    parentNode.appendChild(newNode);
    return;
  }

  if (oldNode && !newNode) {
    parentNode.removeChild(oldNode);
    return;
  }

  if (isNodeChanged(oldNode, newNode)) {
    oldNode.replaceWith(newNode);
    return;
  }

  const oldNodeChildren = Array.from(oldNode.children);
  const newNodeChildren = Array.from(newNode.children);
  const maxLength = Math.max(oldNodeChildren.length, newNodeChildren.length);

  for (let i = 0; i < maxLength; ++i) {
    applyDiff(oldNode, oldNodeChildren[i], newNodeChildren[i]);
  }
};

export default applyDiff;
