import { defaultDrugLifeCycle, drugsLifeCycle } from "../config/drugsLifeCycle";

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefitValue() {
    /* 
      getting lifeCycle config by drug name, falling back to
      default if not found
    */
    const drugLifecycleConfig = drugsLifeCycle[this.name]
      ? drugsLifeCycle[this.name]
      : defaultDrugLifeCycle;
    /* 
      computing new benefit value
    */
    const updatedBenefit = drugLifecycleConfig.getNewBenefit(
      this.expiresIn,
      this.benefit
    );
    if (updatedBenefit > 0) {
      this.benefit = Math.min(updatedBenefit, 50);
    } else {
      this.benefit = 0;
    }
    /* 
      computing new expiresIn value
        using drugLifecycleConfig.getNewExpiresIn method if it exists
        else decrementing by one unit
    */
    if (drugLifecycleConfig.getNewExpiresIn) {
      this.expiresIn = drugLifecycleConfig.getNewExpiresIn(this.expiresIn);
    } else {
      this.expiresIn--;
    }
  }
}
