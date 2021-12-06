const { readInput } = require('../../Shared/ReadInputs');
const output = require('../../Shared/Output');

const logic = (input, jobDays) => {
  const days = Array(9).fill(0);

  for(let day of input){
    days[day]++;
  }

  for(let i = 0;i < jobDays; i++){
    let sixth_day = 0;
    let eight_day = 0;
    for(let j = 0; j < days.length; j++){
      let count = days[j];
      if(j === 0){
        sixth_day = count;
        eight_day = count;
      }
      else{
        days[j - 1] = count;
      }
    }
    days[6] += sixth_day;
    days[8] = eight_day;
  }

  let total_fishes = 0;
  for(let i =0; i< days.length; i++){
    total_fishes += days[i];
  }

  return total_fishes;
}

const day6p1 = () => {
  let input = readInput('../Data/Day6/day6.txt', '6');

  const length = logic(input, 80);

  const result = length;
  output(6, 1, result);
}

const day6p2 = () => {
  let input = readInput('../Data/Day6/day6.txt', '6');

  const total = logic(input, 256);
  const result = total;
  output(6, 2, result);
}

module.exports = { day6p1, day6p2 }