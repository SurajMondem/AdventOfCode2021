const fs = require('fs');
const path = require("path");

const readNumbers = (filename) => {
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

const readDay4Input = (filename) => {
  let all = fs.readFileSync(path.resolve(__dirname, filename)).toString();
  all = all.replace(/[\n\r]/g, ',').trim();
  return all;
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

const readDay6Input = (filename) => {
  let all = fs.readFileSync(path.resolve(__dirname, filename)).toString();
  let lines = all.split(',').map((elem) => {
    return parseInt(elem, 10);
  });

  return lines;
}

const readDay7Input = (filename) => {
  let all = fs.readFileSync(path.resolve(__dirname, filename)).toString();
  let lines = all.split(',').map((elem) => {
    return parseInt(elem, 10);
  });

  return lines;
}

const readInput = (filename, code) => {
  switch (code) {
    case 'ReadNumbers':
      return readNumbers(filename);
    case 'ReadCharacters':
      return readCharacters(filename);
    case '4':
      return readDay4Input(filename);
    case '5':
      return readDay5Input(filename);
    case '6':
      return readDay6Input(filename);
    case '7':
      return readDay7Input(filename);
    default:
      break;
  }
}


module.exports = {readInput};