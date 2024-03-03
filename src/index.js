import Header from "./components/Header.js";
import registry from "./utils/registry.js";
import applyDiff from "./utils/applyDiff.js";

const state = {};

registry.add("header", Header);

const render = (state) => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector("#root");
    const newMain = registry.renderRoot(main, state);
    applyDiff(document.body, main, newMain);
  });
};

render(state);
