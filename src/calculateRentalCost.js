/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  let totalCost = dayRent * days;
  const weekRent = 7;
  const weekDescount = 50;
  const threeDaysRent = 3;
  const threeDaysDescount = 20;

  if (days >= weekRent) {
    totalCost -= weekDescount;
  }

  if (days >= threeDaysRent) {
    totalCost -= threeDaysDescount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
