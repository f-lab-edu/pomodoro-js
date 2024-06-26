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
  const routingInfo = routerRegistry.find((r) => r.testRegExp.test(path));
  if (routingInfo) {
    if (routingInfo.params.length === 0) {
      routingInfo.component();
    } else {
      const params = getPathParamsFromRoute(routingInfo, path);
      routingInfo.component(params);
    }
  } else {
    route("/");
  }
};

const navigate = (path) => {
  window.history.pushState(null, null, path);
  route(path);
};

const initialRoute = (path) => {
  const pathName = window.location.pathname;
  route(pathName);
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
  const home = new Home(app);
  const record = new Record(app);

  addRoute("/", () => {
    home.render();
  });
  addRoute("/record", () => {
    record.render();
  });
  addRoute("/record/:date", (params) => {
    const recordParam = new Record(app, params);
    recordParam.render();
  });

  window.addEventListener("popstate", () => {
    initialRoute();
  });

  initialRoute();
};

export default {
  init,
  navigate,
  getPathParams,
};
