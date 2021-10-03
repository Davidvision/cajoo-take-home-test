import { Pharmacy } from "../../src/classes/pharmacy";
import { Drug } from "../../src/classes/drug";

describe("Pharmacy", () => {
  it("should decrease the benefit by 1 and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", 1, 2)]);
  });

  it("should return an empty array", () => {
    expect(new Pharmacy().updateBenefitValue()).toEqual([]);
  });
});
