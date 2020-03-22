module.exports = function getSeason(date) {
  if (date === undefined) return "Unable to determine the time of year!";
  if (Object.keys(date).length >= 1) throw new Error("Error");

  if (date.getMonth() == 11 || date.getMonth() == 0 || date.getMonth() == 1) {
    return "winter";
  } else if (date.getMonth() >= 2 && date.getMonth() <= 4) {
    return "spring";
  } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
    return "summer";
  } else {
    return "autumn";
  }
};
