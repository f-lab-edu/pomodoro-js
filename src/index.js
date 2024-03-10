import Header from "./components/Header.js";
import registry from "./utils/registry.js";
import applyDiff from "./utils/applyDiff.js";
import { includeHTML } from "./utils/include.js";
import "./style/style.css";
import router from "./utils/router.js";
import Home from "./pages/Home.js";

const state = {};

const render = (state) => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector("#root");
    const newMain = registry.renderRoot(main, state);
    applyDiff(document.body, main, newMain);
  });
};

includeHTML().then(() => {
  registry.add("header", Header);
  render(state);
});

router.init();
