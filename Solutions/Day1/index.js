const readNumbers = require('../../Shared/ReadNumbers');
const output = require('../../Shared/Output');

const compareNumbers = (input) => {

  let inc_count = 0;
  let dec_count = 0;
  let eql_count = 0;

  for(let i = 1; i < input.length; i++){
    if(input[i-1] < input[i]){
      inc_count += 1;
    }
    else if(input[i-1] > input[i]){
      dec_count += 1;
    }
    else {
      eql_count += 1;
    }
  }

  return { inc_count, dec_count, eql_count }
}

const sumNeighbors = (input) => {
  let output = [];

  for(let i = 0; i < input.length - 2; i++){
    output[i] = input[i] + input[i+1] + input[i+2];
  }

  return output;
}

const day1p1 = () => {
  const input = readNumbers('../Data/Day1/day1.txt');

  const result = compareNumbers(input);

  output(1, 1, result);
}

const day1p2 = () => {
  const input = readNumbers('../Data/Day1/day1.txt');
  const newInput = sumNeighbors(input);
  const result = compareNumbers(newInput);
  
  output(1, 2, result);
}

module.exports = { day1p1, day1p2 };