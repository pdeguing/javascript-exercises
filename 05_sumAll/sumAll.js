const sumAll = function (begin, end) {
  let sum = 0;

  if (
    begin < 0 ||
    end < 0 ||
    !Number.isInteger(begin) ||
    !Number.isInteger(end)
  )
    return "ERROR";

  if (begin > end) {
    sum = end;
    end = begin;
    begin = sum;
    sum = 0;
  }
  for (; begin <= end; begin++) {
    sum += begin;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
