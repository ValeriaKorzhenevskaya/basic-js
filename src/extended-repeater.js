module.exports = function repeater(str, options) {
  if (options.separator === undefined) {
    options.separator = "+";
  }

  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }

  let strAddition = "";

  if (options.addition === undefined) {
    options.addition = "";
  }
  strAddition += options.addition;

  for (let i = 1; i < options.additionRepeatTimes; i++) {
    strAddition += options.additionSeparator + options.addition;
  }
  str += strAddition;
  let result = str;

  for (let i = 1; i < options.repeatTimes; i++) {
    result += options.separator + str;
  }

  return result;
};
