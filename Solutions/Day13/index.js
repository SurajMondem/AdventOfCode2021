const { readInput } = require('../../Shared/ReadInputs');
const output = require('../../Shared/Output');
const endOfLine = require("os").EOL;

const [points, folds] = readInput('../Data/Day13/day13.txt', '13');
const fold = folds[0].split(" ")[2].split("=");
const [axis, coord] = fold;
const split_points1 = points.map(elem => elem.split(',').map(Number));
const split_points2 = points.map(elem => elem.split(',').map(Number));

const part1Logic = () => {
  if(axis == "x") {
    for(const i in split_points1) {
      const dot = split_points1[i];
      if(dot[0] > coord) split_points1[i][0] = coord - Math.abs(coord - dot[0])
    }
  } else {
    for(const i in split_points1) {
      const dot = split_points1[i];
      if(dot[1] > coord) split_points1[i][1] = coord - Math.abs(coord - dot[1])
    }
  }
}

const part2Logic = () => {
  for(const i  in folds) {
    const instruction = folds[i].split(" ")[2].split("=");
    const axis = instruction[0];
    const coord = instruction[1];
    if(axis == "x") {
      for(const i in split_points2) {
        const dot = split_points2[i];
        if(dot[0] > coord) split_points2[i][0] = coord - Math.abs(coord - dot[0])
      }
    } else {
      for(const i in split_points2) {
        const dot = split_points2[i];
        if(dot[1] > coord) split_points2[i][1] = coord - Math.abs(coord - dot[1])
      }
    }
  }
}




const day13p1 = () => {
  part1Logic();
  let seen = [];
  for(const dot of split_points1) {
    let id = `${dot[0]}|${dot[1]}`;
    if(!seen.includes(id)) {
      seen.push(id);
    }
  }
  const result = seen.length;
  output(13, 1, result);
}


const day13p2 = () => {
  part2Logic();
  let seen = [];
  let out = [];
  for(const dot of split_points2) {
    let id = `${dot[0]}|${dot[1]}`;
    if(!seen.includes(id)) {
      seen.push(id);
      if(!out[dot[1]]) out[dot[1]] = [];
      for(let i = 0; i < dot[0]-1; i++) {
        if(!out[dot[1]][i]) out[dot[1]][i] = " ";
      }
      out[dot[1]][dot[0]] = "#"
	  }
  }
  const result = out.map(x => x.join("")).join(endOfLine);
  output(13, 2, result);
}


module.exports = {day13p1, day13p2}

