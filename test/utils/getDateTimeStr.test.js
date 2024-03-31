import {
  getDateStr,
  getTimeStr,
  padDateTime,
} from "../../src/utils/getDateTimeStr.js";

describe("getDateStr 테스트", () => {
  test(".으로 구분된 날짜 만들기", () => {
    expect(getDateStr(new Date("2024-03-31"), ".")).toBe("2024.03.31");
  });
});

describe("getTimeStr 테스트", () => {
  test(":으로 구분된 시간 만들기", () => {
    expect(getTimeStr(new Date("2024-03-31 17:30:00"), ":")).toBe("17:30:00");
  });
});

describe("padDateTime 테스트", () => {
  test("한 자리 숫자 들어올 경우 두 자리로 만들기", () => {
    expect(padDateTime(5)).toBe("05");
  });
  test("두 자리 숫자 들어올 경우", () => {
    expect(padDateTime(15)).toBe("15");
  });
  test("두 자리 초과 숫자 들어올 경우", () => {
    expect(padDateTime(1234)).toBe("1234");
  });
});
