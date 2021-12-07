const { readInput } = require('../../Shared/ReadInputs');
const output = require('../../Shared/Output');


const totalDistance = (input, element) => {
  let distance = 0;
  input.forEach(item => {
    distance += Math.abs(element - item);
  });

  return distance;
}

const variableTotalDistance = (input, element) => {
  let distance = 0;
  input.forEach(item => {
    const diff = Math.abs(element - item);
    distance += parseInt((diff * (diff + 1))/2);
  });

  return distance;
}

const day7p1 = () => {
  let input = readInput('../Data/Day7/day7.txt', '7');

  const sorted_input = input.sort((a, b) => (a-b));
  const length = sorted_input.length;
  let elem = 0
  if(length % 2 === 0){
    elem = sorted_input[length/2]
  }
  else {
    elem = parseInt((sorted_input[(length-1)/2] + sorted_input[(length+1)/2])/2, 10)
  }

  const result = totalDistance(sorted_input, elem);
  output(7, 1, result);
}

const day7p2 = () => {
  let input = readInput('../Data/Day7/day7.txt', '7');
  const sorted_input = input.sort((a, b) => (a-b));
  const max = sorted_input[sorted_input.length - 1];
  const min = sorted_input[0];

  const sumDistances = Array((max - min) + 1).fill(0); 
  for(let i = min; i <= max; i++){
    sumDistances[i] = variableTotalDistance(sorted_input, i);
  }
  const sorted_result = sumDistances.sort((a,b)=> (a-b));
  const result = sorted_result[0];
  output(7, 2, result);
}

module.exports = { day7p1, day7p2}