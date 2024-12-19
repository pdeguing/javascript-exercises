const removeFromArray = function (inputArray, ...args) {
  let i = 0;
  for (x = 1; x < arguments.length; x++) {
    console.log(inputArray + " " + arguments[x]);
    i = 0;
    while (i != -1) {
      i = inputArray.indexOf(arguments[x]);
      if (i != -1) {
        inputArray.splice(i, 1);
      }
    }
    console.log(inputArray);
  }
  return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
