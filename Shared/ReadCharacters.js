const fs = require('fs');
const path = require("path");

const readCharacters = (filename) => {
  let all = fs.readFileSync(path.resolve(__dirname, filename)).toString();
  all = all.replace(/[\n\r]/g, ',').trim();
  let lines = all.split(',,');

  return lines;
}

module.exports = readCharacters;