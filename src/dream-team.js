module.exports = function createDreamTeam(members) {
  let dreamTeamName = [];
  if (!members) return false;
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      dreamTeamName.push(members[i].trim()[0].toUpperCase());
    }
  }
  return dreamTeamName.sort().join("");
};
