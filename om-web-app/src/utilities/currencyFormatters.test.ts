import { describe, expect, it } from "vitest";
import { formatPhilippinePeso } from "./currencyFormatters";

describe("formatPhilippinePeso", () => {
  it("formats a whole number correctly", () => {
    const amount = 2000;
    const expected = "₱2,000.00";
    const result = formatPhilippinePeso(amount);
    expect(result).toBe(expected);
  });

  it("formats a decimal number correctly", () => {
    const amount = 198.69;
    const expected = "₱198.69";
    const result = formatPhilippinePeso(amount);
    expect(result).toBe(expected);
  });
});
