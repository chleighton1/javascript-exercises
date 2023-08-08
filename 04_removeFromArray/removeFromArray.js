const removeFromArray = function (array) {
  const args = Array.from(arguments);

  for (x = 1; x < args.length; x++) {
    let index = array.indexOf(args[x]);
    if (index > -1) {
      array.splice(index, 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
