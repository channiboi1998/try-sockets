import {
  formatTimestampToLong,
  formatTimestampToMedium,
  formatTimestampToShort,
  getElapsedTime,
} from "./dateTimeFormatters";
import { describe, expect, it, test, vi } from "vitest";

describe("getElapsedTime", () => {
  it("returns elapsed time in hours, minutes, and seconds", () => {
    const timestamp = "2022-02-22T23:00:00.000+08:00";
    vi.spyOn(Date, "now").mockImplementationOnce(() =>
      new Date("2022-02-23T00:00:00.000+08:00").getTime()
    );
    expect(getElapsedTime(timestamp)).toEqual("01:00:00");
  });

  it("returns elapsed time with padded hours and minutes", () => {
    const timestamp = "2022-02-22T23:00:00.000+08:00";
    vi.spyOn(Date, "now").mockImplementationOnce(() =>
      new Date("2022-02-23T20:45:30.000+08:00").getTime()
    );
    expect(getElapsedTime(timestamp)).toEqual("21:45:30");
  });
});

describe("Date formatting functions", () => {
  const timestamp = "2023-03-08T05:45:32.036Z";
  const options = { timeZone: "Asia/Manila" };
  const date = new Date(timestamp).toLocaleString("en-US", options);

  test("formatTimestampToShort", () => {
    expect(formatTimestampToShort(date)).toBe("Mar 08, 2023");
  });

  test("formatTimestampToMedium", () => {
    expect(formatTimestampToMedium(date)).toBe("Mar 08 | 01:45 PM");
  });

  test("formatTimestampToLong", () => {
    expect(formatTimestampToLong(date)).toBe("Mar 08 | 01:45:32 PM");
  });
});

