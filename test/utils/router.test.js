import { addRoute, routerRegistry } from "../../src/utils/router";

describe("addRoute 테스트", () => {
  test("path가 pathParam을 포함하지 않는 경우", () => {
    addRoute("/test", () => {});
    expect(RegExp(routerRegistry[0].testRegExp).exec("/test")).toBeTruthy();
    expect(RegExp(routerRegistry[0].testRegExp).exec("/text")).toBeFalsy();
  });

  test("path가 pathParam을 포함하는 경우", () => {
    addRoute("/test/:data", () => {});
    expect(
      RegExp(routerRegistry[1].testRegExp).exec("/test/testData")
    ).toBeTruthy();
    expect(RegExp(routerRegistry[1].testRegExp).exec("/test")).toBeFalsy();
  });
});
