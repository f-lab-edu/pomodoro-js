import Home from "../pages/Home.js";
import Record from "../pages/Record.js";

const routerRegistry = {
  "/": Home,
  "/record": Record,
};

const route = (path) => {
  routerRegistry[path]();
};

const navigate = (path) => {
  route(path);
  window.history.pushState(null, null, path);
};

const init = () => {
  route("/");
};

export default {
  init,
  navigate,
};
