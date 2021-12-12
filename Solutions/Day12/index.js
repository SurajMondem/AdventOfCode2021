const { readInput } = require('../../Shared/ReadInputs');
const output = require('../../Shared/Output');

const input = readInput('../Data/Day12/day12.txt', '12');

const graph = {};

const addNode = (source) => {
  adjList.set(source, []);
}

const addDestination = (from, to) => {
  if (graph[from]) {
    graph[from].push(to);
  } else {
    graph[from] = [to];
  }

  if (graph[to]) {
    graph[to].push(from);
  } else {
    graph[to] = [from];
  }
}

input.forEach(route => addDestination(...route));
let paths1 = 0;
let paths2 = 0;

const isVisitedLogic = (source) => {
  return source === source.toLowerCase();
}

const findAllPathsPart1 = (cave, visited) => {
  //console.group();
  if(isVisitedLogic(cave)){
    visited.push(cave);
  }
  graph[cave].forEach((c) => {
    //console.log(cave, '->', c);
    if(c === 'end'){
      paths1 += 1;
    }else if (!visited.includes(c)) {
      findAllPathsPart1(c, [...visited]);
    }else {
      //console.log('STOP');
    }
  });
  //console.groupEnd();
}

const findAllPathsPart2 = (cave, visited, revisit) => {
  if(isVisitedLogic(cave)){
    visited.push(cave);
  }
  graph[cave].forEach((c) => {
    if(c === 'end'){
      paths2 += 1;
    }
    else {
      const isVisited = visited.includes(c);
      if(isVisited && !revisit && c !== 'start'){
        findAllPathsPart2(c, [...visited], c);
      }
      else if(!isVisited && c !== revisit){
        findAllPathsPart2(c, [...visited], revisit);
      }
    }
  });
}




const day12p1 = () => {
  findAllPathsPart1('start', []);
  output(12, 1, paths1);
}

const day12p2 = () => {
  findAllPathsPart2('start', []);
  output(12, 2, paths2);
}

module.exports = {day12p1, day12p2};