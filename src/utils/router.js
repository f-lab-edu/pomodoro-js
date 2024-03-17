import Home from "../pages/Home.js";
import Record from "../pages/Record.js";

const ROUTE_PARAMETER_REGEXP = /:(\w+)/g;
const URL_FRAGMENT_REGEXP = "([^\\/]+)";

export const routerRegistry = [];

export const addRoute = (path, component) => {
  const params = [];

  const parsedPath = path
    .replace(ROUTE_PARAMETER_REGEXP, (match, paramName) => {
      params.push(paramName);
      return URL_FRAGMENT_REGEXP;
    })
    .replace(/\//g, "\\/");

  routerRegistry.push({
    testRegExp: new RegExp(`^${parsedPath}$`),
    component,
    params,
  });
};

export const route = (path) => {
  const route = routerRegistry.find((route) => route.testRegExp.test(path));
  if (route) {
    if (route.params.length === 0) {
      route.component();
    } else {
      const params = getPathParamsFromRoute(route, path);
      route.component(params);
    }
  } else {
    route("/");
  }
};

const navigate = (path) => {
  window.history.pushState(null, null, path);
  route(path);
};

const getPathParams = () => {
  const pathname = window.location.pathname;
  const route = routerRegistry.find((route) => route.testRegExp.test(pathname));
  return getPathParamsFromRoute(route, pathname);
};

export const getPathParamsFromRoute = (route, path) => {
  const params = {};
  if (route && route.params.length > 0) {
    const matches = RegExp(route.testRegExp).exec(path);
    matches.shift();
    matches.forEach((paramValue, index) => {
      const paramName = route.params[index];
      params[paramName] = paramValue;
    });
  }
  return params;
};

const init = () => {
  const app = document.getElementById("app");

  addRoute("/", () => {
    new Home(app);
  });
  addRoute("/record", () => {
    new Record(app);
  });
  addRoute("/record/:date", (params) => {
    new Record(app, params);
  });

  const pathName = window.location.pathname;
  route(pathName);
};

export default {
  init,
  navigate,
  getPathParams,
};
