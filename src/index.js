import Header from "./components/Header.js";
import { includeHTML } from "./utils/include.js";
import "./style/style.css";
import router from "./utils/router.js";
import Home from "./pages/Home.js";

includeHTML().then(() => {
  const parent = document.querySelector('[data-component="header"]');
  new Header(parent);
  router.init();
});
