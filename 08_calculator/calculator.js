const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((sum, current) => sum + current, 0)
};

const multiply = function(array) {
  return array.reduce((res, current) => res * current, 1)
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  let res = num;
  if (num == 0 || num == 1) {
    return 1
  }
  while (num > 1) {
    num--;
    res *= num;
  }
  return res;
 	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
