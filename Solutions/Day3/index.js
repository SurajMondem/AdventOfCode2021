const readCharacters = require('../../Shared/ReadCharacters');
const output = require('../../Shared/Output');

const commonBits = (input, index) => {
  let count_ones = 0;
  let count_zeros = 0;
  let i = 0;
  while(i < input.length){
    if(input[i][index] === '1'){
      count_ones += 1;
    }
    else if (input[i][index] === '0'){
      count_zeros += 1;
    }
    i++;
  }
  if(count_ones >= count_zeros){
    return {
      mostCommon: "1",
      leastCommon: "0"
    };
  }
  else {
    return {
      mostCommon: "0",
      leastCommon: "1"
    };
  }
}


const logic = (input) => {

  let gamma = '';
  let epsilon = '';
  
  let j = 0;
  while (j < input[0].length){
    let count_ones = 0;
    let count_zeros = 0;
    let i = 0;
    while(i < input.length){
      if(input[i][j] === '1'){
        count_ones += 1;
      }
      else if (input[i][j] === '0'){
        count_zeros += 1;
      }
      i++;
    }
    if(count_ones > count_zeros){
      gamma += '1';
      epsilon += '0';
    }
    else {
      gamma += '0';
      epsilon += '1';
    }
    j++;
  }


  console.log(gamma);
  console.log(parseInt(gamma, 2));
  console.log(epsilon);
  console.log(parseInt(epsilon, 2));

  return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

const logic2 = (input) => {
  let oxygen = input;
  let carbon = input;
  for(let i = 0; i< input[0].length; i++) {
    const oxygenBit = commonBits(oxygen, i);
    const {mostCommon} = oxygenBit;
    oxygen = oxygen.filter((item) => {
      if(oxygen.length === 1){
        return true;
      }
      return item.charAt(i) === mostCommon;
    })
    
    const carbonBit = commonBits(carbon, i);
    const {leastCommon} = carbonBit;
    carbon = carbon.filter((item) => {
      if(carbon.length === 1){
        return true;
      }
      return item.charAt(i) === leastCommon;
    })
  }
  console.log(oxygen);
  console.log(carbon);
  console.log(parseInt(oxygen, 2));
  console.log(parseInt(carbon, 2));
  return parseInt(oxygen, 2) * parseInt(carbon, 2);
}

const day3p1 = () => {
  const input = readCharacters('../Data/Day3/day3.txt');

  let splitInput = input.map((item) => {
    return item.split('');
  });

  const result = logic(splitInput);
  output(3, 1, result);
}

const day3p2 = () => {
  const input = readCharacters('../Data/Day3/day3.txt');

  const result = logic2(input);
  output(3, 2, result);
}

module.exports = { day3p1, day3p2 }