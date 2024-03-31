import DateSelector from "../../src/components/DateSelector.js";

describe("getDateList 테스트", () => {
  test("중복없는 날짜 데이터 리턴", () => {
    const dateSelector = new DateSelector();
    const dateList = dateSelector.getDateList([
      {
        date: "2024-03-24",
      },
      {
        date: "2024-03-24",
      },
      {
        date: "2024-03-27",
      },
      {
        date: "2024-03-28",
      },
    ]);
    expect(dateList.length).toBe(3);
    expect(dateList.includes("2024-03-24")).toBe(true);
    expect(dateList.includes("2024-03-27")).toBe(true);
    expect(dateList.includes("2024-03-28")).toBe(true);
  });
});
