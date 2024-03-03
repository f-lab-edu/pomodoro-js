/**
 * @jest-environment jsdom
 */
import registry, { renderWrapper } from "../../src/utils/registry";
import { jest } from "@jest/globals";

describe("add 테스트", () => {
  test("registry 정상 등록 테스트", () => {
    registry.add("test", () => {});
  });
});

describe("renderRoot 테스트", () => {
  test("renderRoot 정상 수행 테스트", () => {
    const root = document.createElement("div");
    registry.renderRoot(root, {});
  });
});

describe("renderWrapper 테스트", () => {
  test("renderWrapper 정상 수행 테스트", () => {
    const component = jest.fn();
    const ret = renderWrapper(component);
    expect(component).toBeCalledTimes(1);
  });
});
