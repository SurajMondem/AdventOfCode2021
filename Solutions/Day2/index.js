const {readCharacters} = require('../../Shared/ReadInputs');
const output = require('../../Shared/Output');

const day2p1 = () => {
  const input =  readCharacters('../Data/Day2/day2.txt');

  let forward = 0;
  let depth = 0;

  for(let i = 0; i < input.length; i++ ){
    const [command, step] = input[i].split(" ");
    if(command === "forward"){
      forward += parseInt(step, 10);
    }
    else if(command === "down"){
      depth += parseInt(step, 10);
      
    }
    else if(command === "up"){
      depth -= parseInt(step, 10);
    }
  }

  const result = forward * depth;

  output(2, 1, result);
}

const day2p2 = () => {
  const input =  readCharacters('../Data/Day2/day2.txt');

  let forward = 0;
  let depth = 0;
  let aim = 0;

  for(let i = 0; i < input.length; i++ ){
    const [command, step] = input[i].split(" ");
    if(command === "forward"){
      forward += parseInt(step, 10);
      depth += aim*parseInt(step, 10);
    }
    else if(command === "down"){
      aim += parseInt(step, 10);
    }
    else if(command === "up"){
      aim -= parseInt(step, 10);
    }
  }

  const result = forward * depth;

  output(2, 2, result);
}

module.exports = { day2p1, day2p2 };