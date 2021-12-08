const { readInput } = require('../../Shared/ReadInputs');
const output = require('../../Shared/Output');

const logic1 = (line) => {
  const digits = line[1];
  let count = 0;
  for(let i = 0; i< digits.length; i++){
    if(digits[i].length === 2 
      || digits[i].length === 3
      || digits[i].length === 4 
      || digits[i].length === 7
      ) {
        count += 1;
      }
  }

  return count;
}

const segmentOrder = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const translate = (dictionary, what) => {
  const answer = [];
  what.forEach(led => {
      answer.push(dictionary[led])
  });
  return answer;
}

const getDigit = segments => {
  switch (segments.join('')) {
      case 'abcefg':
          return 0;
      case 'cf':
          return 1;
      case 'acdeg':
          return 2;
      case 'acdfg':
          return 3;
      case 'bcdf':
          return 4;
      case 'abdfg':
          return 5;
      case 'abdefg':
          return 6;
      case 'acf':
          return 7;
      case 'abcdefg':
          return 8;
      case 'abcdfg':
          return 9;
  }
}

Object.defineProperty(Array.prototype, 'flat', {
  value: function(depth = 1) {
    return this.reduce(function (flat, toFlatten) {
      return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
    }, []);
  }
});

const logic2 = (line) => {
  const [signals, outputs] = line;
  const allSignals = signals.map(ch => ch.split("")).map(ch => ch.sort());
  const digits = Array(7).fill([...segmentOrder]);
  const signalFormOne = allSignals.filter(x => x.length == 2).flat();
  const signalFormSeven = allSignals.filter(x => x.length == 3).flat();
  const signalFormFour = allSignals.filter(x => x.length == 4).flat();
  digits[2] = signalFormOne;
  digits[5] = signalFormOne;
  digits[0] = signalFormSeven.filter(x=> !signalFormOne.includes(x));
  digits[1] = signalFormFour.filter(x=> !digits[2].includes(x)).filter(x => !digits[0].includes(x));
  digits[3] = digits[1];
  digits[4] = digits[4].filter(x => !digits[0].includes(x)).filter(x => !digits[1].includes(x)).filter(x => !digits[2].includes(x));
  digits[6] = digits[6].filter(x => !digits[0].includes(x)).filter(x => !digits[1].includes(x)).filter(x => !digits[2].includes(x));

  const numberNine = allSignals.filter(a => {
    if (digits[2].filter(x => !a.includes(x)).length == 0 &&
            digits[3].filter(x => !a.includes(x)).length == 0 &&
            a.length == 6
        ) return true;
        return false;
  }).flat();

  digits[4] = digits[4].filter(x => !numberNine.includes(x))
  digits[6] = digits[6].filter(x => !digits[4].includes(x))

  const nrZero = allSignals.filter(a => {
      if (digits[2].filter(x => !a.includes(x)).length == 0 &&
          digits[4].filter(x => !a.includes(x)).length == 0 &&
          a.length == 6
      ) return true;
      return false;
  }).flat()
  digits[3] = digits[3].filter(x => !nrZero.includes(x))
  digits[1] = digits[1].filter(x => !digits[3].includes(x))

  const nrSix = allSignals.filter(a => {
      if (digits[3].filter(x => !a.includes(x)).length == 0 &&
          digits[4].filter(x => !a.includes(x)).length == 0 &&
          a.length == 6
      ) return true;
      return false;
  }).flat()
  digits[2] = digits[2].filter(x => !nrSix.includes(x))
  digits[5] = digits[5].filter(x => !digits[2].includes(x))
  
  const translationFile = [];
  for(let i = 0; i< digits.length; i++){
    translationFile[digits[i]] = segmentOrder[i]; 
  }
  
  const stringNum = []
  outputs.forEach(output => {
    const actualLEDs = translate(translationFile, output.split(''));
    stringNum.push(getDigit(actualLEDs.sort()))
  })

  const number = parseInt(stringNum.join(''), 10);
  return number;
}

const day8p1 = () => {
  let input = readInput('../Data/Day8/day8.txt', '8');
  let total = 0;
  for(let i = 0; i< input.length; i++){
    total += logic1(input[i]);
  }

  const result = total;
  output(8, 1, result);
}

const day8p2 = () => {
  let input = readInput('../Data/Day8/day8.txt', '8');
  
  let total = 0;
  for(let i = 0; i< input.length; i++){
    total += logic2(input[i]);
  }
  
  const result = total;
  output(8, 2, result);
}

module.exports = { day8p1, day8p2}