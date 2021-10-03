/* 
  Defining default benefit update behavior
*/

export const defaultDrugLifeCycle = {
  getNewBenefit(expiresIn, benefit) {
    if (expiresIn < 1) {
      return benefit - 2;
    } else {
      return benefit - 1;
    }
  }
};

/* 
  Defining benefit/expiresIn update behavior in specific cases
*/

export const drugsLifeCycle = {
  "Herbal Tea": {
    getNewBenefit(expiresIn, benefit) {
      if (expiresIn > 0) {
        return benefit + 1;
      } else {
        return benefit + 2;
      }
    }
  },
  "Magic Pill": {
    getNewBenefit(_, benefit) {
      return benefit;
    },
    getNewExpiresIn(expiresIn) {
      return expiresIn;
    }
  },
  Fervex: {
    getNewBenefit(expiresIn, benefit) {
      if (expiresIn < 1) {
        return 0;
      } else if (expiresIn < 6) {
        return benefit + 3;
      } else if (expiresIn < 11) {
        return benefit + 2;
      } else {
        return benefit + 1;
      }
    }
  },
  Dafalgan: {
    getNewBenefit(expiresIn, benefit) {
      if (expiresIn < 0) {
        return benefit - 4;
      } else {
        return benefit - 2;
      }
    }
  }
};
