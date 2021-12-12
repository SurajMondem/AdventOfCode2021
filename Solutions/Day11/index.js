const { readInput } = require('../../Shared/ReadInputs');
const output = require('../../Shared/Output');

const input = readInput('../Data/Day11/day11.txt', '11');

const w = input.length;
const h = input[0].length;

const stepLogic = (matrix) => {
  let flashes = 0;
  const incrementLogic = (x, y) => {
    if (x < 0 || y < 0 || x > 9 || y > 9) {
      return
    }
  
    matrix[x][y]++
  
    if (matrix[x][y] >= 10) {
      flashes++;
      matrix[x][y] = -20
      incrementLogic(x - 1, y - 1)
      incrementLogic(x - 1, y + 0)
      incrementLogic(x - 1, y + 1)
      incrementLogic(x + 0, y - 1)
      incrementLogic(x + 0, y + 0)
      incrementLogic(x + 0, y + 1)
      incrementLogic(x + 1, y - 1)
      incrementLogic(x + 1, y + 0)
      incrementLogic(x + 1, y + 1)
    }
  }

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      incrementLogic(x, y);
    }
  }

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (matrix[x][y] < 0) {
        matrix[x][y] = 0
      }
    }
  }

  return flashes;
}

const day11p1 = () => {

  let total = 0;
  // for (let index = 0; index < 100; index++) {
  //   // total += stepLogic(input);
  // }
  
  output(11, 1, total);
}

const day11p2 = () => {
  let i = 0;

  while(true){
    i++;
    if(stepLogic(input) === 100){
      break;
    }
  }

  output(11, 2, i);
}

module.exports = {day11p1, day11p2}