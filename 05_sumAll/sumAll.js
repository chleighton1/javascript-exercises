const sumAll = function (a, b) {
  if (typeof a != "number" || typeof b != "number" || Math.min(a, b) < 0) {
    return "ERROR";
  }
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  res = 0;

  for (let x = min; x <= max; x++) {
    res = res + x;
  }

  return res;
};

// Do not edit below this line
module.exports = sumAll;
