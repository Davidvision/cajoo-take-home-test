import { Drug } from "../../src/classes/drug";

describe("Normal drug", () => {
  it("should decrease the benefit by one and expiresIn by one", () => {
    const normalDrug = new Drug("Normal drug", 3, 15);
    normalDrug.updateBenefitValue();
    expect(normalDrug).toEqual(new Drug("Normal drug", 2, 14));
  });

  it("should decrease the benefit by 4 and expiresIn by 2", () => {
    const normalDrug = new Drug("Normal drug", -3, 15);
    normalDrug.updateBenefitValue();
    expect(normalDrug).toEqual(new Drug("Normal drug", -4, 13));
  });

  it("should decrease expiresIn by 2 and benefit should be 0 ", () => {
    const normalDrug = new Drug("Normal drug", -3, -3);
    normalDrug.updateBenefitValue();
    normalDrug.updateBenefitValue();
    expect(normalDrug).toEqual(new Drug("Normal drug", -5, 0));
  });
});

describe("Fervex", () => {
  it("should increase the benefit by 3 and decrease expiresIn by one", () => {
    const fervex = new Drug("Fervex", 3, 15);
    fervex.updateBenefitValue();
    expect(fervex).toEqual(new Drug("Fervex", 2, 18));
  });

  it("should increase the benefit by 2 and decrease expiresIn by one", () => {
    const fervex = new Drug("Fervex", 7, 11);
    fervex.updateBenefitValue();
    expect(fervex).toEqual(new Drug("Fervex", 6, 13));
  });

  it("should decrease expiresIn by one and benefit should be 0", () => {
    const fervex = new Drug("Fervex", 0, 7);
    fervex.updateBenefitValue();
    expect(fervex).toEqual(new Drug("Fervex", -1, 0));
  });

  it("should decrease expiresIn by one and increase benefit by one", () => {
    const fervex = new Drug("Fervex", 12, 5);
    fervex.updateBenefitValue();
    expect(fervex).toEqual(new Drug("Fervex", 11, 6));
  });
});

describe("Herbal Tea", () => {
  it("should increase the benefit by 1 and decrease expiresIn by one", () => {
    const herbalTea = new Drug("Herbal Tea", 3, 15);
    herbalTea.updateBenefitValue();
    expect(herbalTea).toEqual(new Drug("Herbal Tea", 2, 16));
  });

  it("should increase the benefit by 2 and decrease expiresIn by one", () => {
    const herbalTea = new Drug("Herbal Tea", -3, 15);
    herbalTea.updateBenefitValue();
    expect(herbalTea).toEqual(new Drug("Herbal Tea", -4, 17));
  });
});

describe("Magic Pill", () => {
  it("should not change benefit nor expiresIn", () => {
    const magicPill = new Drug("Magic Pill", 3, 15);
    magicPill.updateBenefitValue();
    expect(magicPill).toEqual(new Drug("Magic Pill", 3, 15));
  });

  it("should make the benefit equal to 50 and leave expiresIn unchanged", () => {
    const magicPill = new Drug("Magic Pill", -3, 55);
    magicPill.updateBenefitValue();
    expect(magicPill).toEqual(new Drug("Magic Pill", -3, 50));
  });
});

describe("Dafalgan", () => {
  it("should decrease benefit by 4 and expires by one", () => {
    const dafalgan = new Drug("Dafalgan", -2, 15);
    dafalgan.updateBenefitValue();
    expect(dafalgan).toEqual(new Drug("Dafalgan", -3, 11));
  });

  it("should decrease benefit by 2 and expires by one", () => {
    const dafalgan = new Drug("Dafalgan", 3, 15);
    dafalgan.updateBenefitValue();
    expect(dafalgan).toEqual(new Drug("Dafalgan", 2, 13));
  });
});
