const repeatString = function (string, numRepeats) {
  let res = "";
  if (numRepeats < 0) {
    return "ERROR";
  }
  for (let x = 0; x < numRepeats; x++) {
    res = res + string;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
