/**
 * @jest-environment jsdom
 */
import { includeHTML } from "../../src/utils/include";

describe("includeHTML 테스트", () => {
  test("includeHTML 정상 수행", () => {
    includeHTML();
  });
});
