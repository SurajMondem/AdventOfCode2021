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

const readCharacters = (filename) => {
  let all = fs.readFileSync(path.resolve(__dirname, filename)).toString();
  all = all.replace(/[\n\r]/g, ',').trim();
  let lines = all.split(',,');

  return lines;
}

const readDay5Input = (filename) => {
  let all = fs.readFileSync(path.resolve(__dirname, filename)).toString();
  all = all.replace(/[\n\r]/g, '/').trim();
  let lines = all.split('//').map((elem) => {
    return elem
      .split("->")
      .map(ele => ele
        .trim()
        .split(',')
        .map(item => parseInt(item, 10)));
  });

  return lines;
}

module.exports = {readCharacters, readDay5Input, readNumbers};