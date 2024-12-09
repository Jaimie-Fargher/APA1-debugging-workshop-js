function calculatePercentageChange(original, newAmount) {
  if (original === 0 && newAmount === 0) {
    return 0;
  } else {
    const difference = Math.trunc(newAmount - original);
    const average = difference / original;
    const percentageDifference = Math.trunc(average * 100);
    return percentageDifference;
  }
}

module.exports = { calculatePercentageChange };
