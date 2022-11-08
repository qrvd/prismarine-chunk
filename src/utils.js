
function isValidColumnPos (pos) {
  return (pos.x & 15) === pos.x &&
    (pos.y & 15) === pos.y &&
    (pos.z & 15) === pos.z;
}

function isValidSectionPos (pos) {
  return (pos.x & 15) === pos.x &&
    (pos.y & 255) === pos.y &&
    (pos.z & 15) === pos.z;
}

module.exports = {
  isValidColumnPos,
  isValidSectionPos,
};
