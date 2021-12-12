const { readInput } = require('../../Shared/ReadInputs');
const output = require('../../Shared/Output');


const input = readInput('../Data/Day10/day10.txt', '10');


const logic = (line) => {

  let stack = [];
  for(let i = 0; i< line.length; i++){
    if(line.charAt(i) === '('
    || line.charAt(i) === '['
    || line.charAt(i) === '{' 
    || line.charAt(i) === '<'
    ){
      stack.push(line.charAt(i));
    }
    else if(i !== 0 && line.charAt(i) === ')' && stack[stack.length-1] === '('){
      stack.pop();
    }
    else if(i !== 0 && line.charAt(i) === ']' && stack[stack.length-1] === '['){
      stack.pop();
    }
    else if(i !== 0 && line.charAt(i) === '}' && stack[stack.length-1] === '{'){
      stack.pop();
    }
    else if(i !== 0 && line.charAt(i) === '>' && stack[stack.length-1] === '<'){
      stack.pop();
    }
    else {
      // console.log(line, '=>' , line.charAt(i));
      if(line.charAt(i) === ')'){
        return 3;
      }
      else if(line.charAt(i) === ']'){
        return 57;
      }
      else if(line.charAt(i) === '}'){
        return 1197;
      }
      else if(line.charAt(i) === '>'){
        return 25137;
      }
    }
  }
  return 0;
}

const logic2 = (line) => {

  let stack = [];
  let notCount = false;
  for(let i = 0; i< line.length; i++){
    if(line.charAt(i) === '('
    || line.charAt(i) === '['
    || line.charAt(i) === '{' 
    || line.charAt(i) === '<'
    ){
      stack.push(line.charAt(i));
    }
    else if(i !== 0 && line.charAt(i) === ')' && stack[stack.length-1] === '('){
      stack.pop();
    }
    else if(i !== 0 && line.charAt(i) === ']' && stack[stack.length-1] === '['){
      stack.pop();
    }
    else if(i !== 0 && line.charAt(i) === '}' && stack[stack.length-1] === '{'){
      stack.pop();
    }
    else if(i !== 0 && line.charAt(i) === '>' && stack[stack.length-1] === '<'){
      stack.pop();
    }
    else {
      if(line.charAt(i) === ')'){
        notCount = true;
        break;
      }
      else if(line.charAt(i) === ']'){
        notCount = true;
        break;
      }
      else if(line.charAt(i) === '}'){
        notCount = true;
        break;
      }
      else if(line.charAt(i) === '>'){
        notCount = true;
        break;
      }
    }
  }

  if(!notCount){
    let total = 0;
    // console.log(line, stack);
    while(stack.length > 0){
      const ch = stack.pop();
      if(ch === '('){
        total = total * 5 + 1;
      }
      else if(ch === '{'){
        total = total * 5 + 3;
      }
      else if(ch === '['){
        total = total * 5 + 2;
      }
      else if(ch === '<'){
        total = total * 5 + 4;
      }
    }
    // console.log(line, total);
    return total;
  }
  return 0;
}


const day10p1 = () => {
  
  let result = 0;
  for(let i = 0; i< input.length; i++){
    result += logic(input[i]); 
  }
  
  output(10, 1, result);
};


const day10p2 = () => {
  let result = [];
  for(let i = 0; i< input.length; i++){
    const ans = logic2(input[i]);
    if(ans !== 0){
      result.push(ans);
    } 
  }
  result.sort((a, b) => a-b);
  output(10, 2, result[parseInt(result.length/2, 10)]);
};

module.exports = {day10p1, day10p2};