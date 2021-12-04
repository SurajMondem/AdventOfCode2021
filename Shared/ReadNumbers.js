const fs = require('fs');
const path = require("path");

const readNumbers = (filename, noSplit) => {
  let all = fs.readFileSync(path.resolve(__dirname, filename)).toString();
  all = all.replace(/[\n\r]/g, ',').trim();
  if(noSplit) return all;
  let lines = all.split(',,').map((item) => {
    return parseInt(item, 10);
  });

  return lines;
}

module.exports = readNumbers;