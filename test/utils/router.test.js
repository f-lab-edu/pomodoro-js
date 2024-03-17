import {
  addRoute,
  getPathParamsFromRoute,
  routerRegistry,
} from "../../src/utils/router";

describe("addRoute 테스트", () => {
  test("path가 pathParam을 포함하지 않는 경우", () => {
    addRoute("/test", () => {});
    expect(RegExp(routerRegistry[0].testRegExp).exec("/test")).toBeTruthy();
    expect(RegExp(routerRegistry[0].testRegExp).exec("/text")).toBeFalsy();
    routerRegistry.pop();
  });

  test("path가 pathParam을 포함하는 경우", () => {
    addRoute("/test/:data", () => {});
    expect(
      RegExp(routerRegistry[0].testRegExp).exec("/test/testData")
    ).toBeTruthy();
    expect(RegExp(routerRegistry[0].testRegExp).exec("/test")).toBeFalsy();
    routerRegistry.pop();
  });
});

describe("getPathParamsFromRoute 테스트", () => {
  test("route에 저장된 정규표현식과 일치하는 데이터 리턴", () => {
    addRoute("/test/:data", () => {});
    const route = routerRegistry[0];
    const param = getPathParamsFromRoute(route, "/test/123");
    expect(param).toEqual({
      data: "123",
    });
    routerRegistry.pop();
  });
});
