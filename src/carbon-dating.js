const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") return false;

  let activity = parseFloat(sampleActivity);

  if (activity <= 0 || activity > MODERN_ACTIVITY || Number.isNaN(activity))
    return false;

  let time = Math.ceil(
    Math.log(MODERN_ACTIVITY / activity) / (0.693 / HALF_LIFE_PERIOD)
  );
  return time;
};
