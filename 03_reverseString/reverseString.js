const reverseString = function (string) {
  res = [];
  let stringArray = string.split("");
  for (let x = stringArray.length - 1; x >= 0; x--) {
    res.push(stringArray[x]);
  }
  return res.join("");
};

// Do not edit below this line
module.exports = reverseString;
