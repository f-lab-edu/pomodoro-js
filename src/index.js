import Header from "./components/Header.js";
import { includeHTML } from "./utils/include.js";
import "./style/style.css";
import "./style/reset.css";
import router from "./utils/router.js";
import Home from "./pages/Home.js";

includeHTML().then(() => {
  const parent = document.querySelector('[data-component="header"]');
  const headerComponent = new Header(parent);
  headerComponent.render();
  router.init();
});
