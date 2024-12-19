const repeatString = function (inputString, repetitions) {
  let finalString = "";

  if (repetitions < 0) {
    return "ERROR";
  }

  for (i = 0; i < repetitions; i++) {
    finalString = finalString + inputString;
  }

  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
