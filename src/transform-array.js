module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  let array = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      i++;
      continue;
    }
    if (arr[i] === "--discard-prev") {
      array.pop();
    }
    if (arr[i] === "--double-next") {
      array.push(arr[i + 1]);
    }
    if (arr[i] === "--double-prev") {
      array.push(arr[i - 1]);
    }
    array.push(arr[i]);
  }

  let result = [];
  for (let i of array) {
    if (
      !(
        i == "--discard-next" ||
        i == "--discard-prev" ||
        i == "--double-next" ||
        i == "--double-prev" ||
        i == undefined
      )
    )
      result.push(i);
  }
  return result;
};
