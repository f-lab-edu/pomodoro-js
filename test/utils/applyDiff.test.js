/**
 * @jest-environment jsdom
 */
import applyDiff, { isNodeChanged } from "../../src/utils/applyDiff";

describe("isNodeChanged 테스트", () => {
  let element;
  beforeEach(() => {
    element = document.createElement("div");
    element.innerText = "테스트";
  });

  test("동일한 노드일때 false를 반환", () => {
    const newNode = element.cloneNode(true);
    expect(isNodeChanged(element, newNode)).toBe(false);
  });

  test("attribute 개수가 다를 때 true를 반환", () => {
    const newNode = element.cloneNode(true);
    newNode.setAttribute("testAttr", "test");
    expect(isNodeChanged(element, newNode)).toBe(true);
  });

  test("attribute가 다를 때 false를 반환", () => {
    element.setAttribute("testAttr", "test");
    const newNode = element.cloneNode(true);
    newNode.setAttribute("testAttr", "test2");
    expect(isNodeChanged(element, newNode)).toBe(true);
  });
});

describe("applyDiff 테스트", () => {
  let parentNode;
  beforeEach(() => {
    parentNode = document.createElement("div");
  });

  test("oldNode가 없을때 ParentNode에 newNode를 추가", () => {
    const newNode = document.createElement("div");
    applyDiff(parentNode, undefined, newNode);
    expect(parentNode.hasChildNodes()).toBe(true);
  });

  test("newNode가 없을때 ParentNode에 oldNode를 제거", () => {
    const oldNode = document.createElement("h1");
    parentNode.appendChild(oldNode);
    applyDiff(parentNode, oldNode, undefined);
    expect(parentNode.hasChildNodes()).toBe(false);
  });

  test("isNodeChange가 true일때 oldNode와 newNode가 같아짐", () => {
    const oldNode = document.createElement("h1");
    oldNode.setAttribute("testAttr", "test");
    parentNode.appendChild(oldNode);

    const newNode = document.createElement("h1");
    newNode.setAttribute("testAttr", "test2");

    applyDiff(parentNode, oldNode, newNode);

    expect(parentNode.childNodes[0]).toEqual(newNode);
  });

  test("모든 자식 노드에 대해서 비교 수행", () => {
    const oldNode = document.createElement("div");
    parentNode.appendChild(oldNode);
    const childNode = document.createElement("h1");
    const childNode2 = document.createElement("h2");
    oldNode.appendChild(childNode);
    oldNode.appendChild(childNode2);

    const newNode = document.createElement("div");
    newNode.appendChild(childNode);

    applyDiff(parentNode, oldNode, newNode);
  });
});
