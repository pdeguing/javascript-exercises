const reverseString = function (inputString) {
  let arr = Array.from(inputString);

  arr.reverse();

  const reversed = arr.join("");

  return reversed;
};

// Do not edit below this line
module.exports = reverseString;
