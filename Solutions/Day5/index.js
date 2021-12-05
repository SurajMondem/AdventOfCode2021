const output = require('../../Shared/Output');
const { readDay5Input } = require('../../Shared/ReadInputs');

const initialMap = (rows, columns) => {
  return Array(rows).fill().map(() => Array(columns).fill(0));
}

const checkStraightAndDiagonalLine = (coordinates) => {
  const [first, second] = coordinates;
  const angle = Math.abs((second[1] - first[1])/(second[0] - first[0]));
  if (first[1] === second[1]){
    return {line: true, orientation: 'horizontal'} //[[x1,y1] , [x2,y1]]
  }
  else if(first[0] === second[0]){
    return {line: true, orientation: 'vertical'} //[[x1,y1] , [x1,y2]]
  }
  else if(angle === 1){
    return {line: true, orientation: 'diagonal'} 
  }
  return {line: false, orientation: ''};
}

const fillMap = (points, map) => {
  for(let i = 0; i< points.length; i++){
    const coordinates = points[i];
    const lineDetails = checkStraightAndDiagonalLine(coordinates);
    if(lineDetails.line && lineDetails.orientation === 'vertical'){
      const x1 = coordinates[0][0];
      const y1 = coordinates[0][1];
      const y2 = coordinates[1][1];
      if(y1 > y2){
        mapStraightLineLoop('y', y2, y1, x1, map);
      }else{
        mapStraightLineLoop('y', y1, y2, x1, map);
      }
    }
    else if(lineDetails.line && lineDetails.orientation === 'horizontal'){
      const y1 = coordinates[0][1];
      const x1 = coordinates[0][0];
      const x2 = coordinates[1][0];
      if(x1 > x2){
        mapStraightLineLoop('x', x2, x1, y1, map);
      }else{
        mapStraightLineLoop('x', x1, x2, y1, map);
      }
    }
  }

  return map;
}

const fillMap2 = (points, map) => {
  for(let i = 0; i< points.length; i++){
    const coordinates = points[i];
    const lineDetails = checkStraightAndDiagonalLine(coordinates);
    if(lineDetails.line && lineDetails.orientation === 'vertical'){
      const x1 = coordinates[0][0];
      const y1 = coordinates[0][1];
      const y2 = coordinates[1][1];
      if(y1 > y2){
        mapStraightLineLoop('y', y2, y1, x1, map);
      }else{
        mapStraightLineLoop('y', y1, y2, x1, map);
      }
    }
    else if(lineDetails.line && lineDetails.orientation === 'horizontal'){
      const y1 = coordinates[0][1];
      const x1 = coordinates[0][0];
      const x2 = coordinates[1][0];
      if(x1 > x2){
        mapStraightLineLoop('x', x2, x1, y1, map);
      }else{
        mapStraightLineLoop('x', x1, x2, y1, map);
      }
    }
    else if(lineDetails.line && lineDetails.orientation === 'diagonal'){
      const y2 = coordinates[1][1];
      const y1 = coordinates[0][1];
      const x1 = coordinates[0][0];
      const x2 = coordinates[1][0];

      const angle = (y2 - y1)/(x2 - x1);
      if(x1 > x2){
        mapDiagonalLineLoop({startX: x2, startY: y2}, {endX: x1, endY: y1}, angle, map);
      }else{
        mapDiagonalLineLoop({startX: x1, startY: y1}, {endX: x2, endY: y2}, angle, map);
      }
    }
  }

  return map;
}

const mapDiagonalLineLoop = (start, end, angle, map) => {
  const {startX, startY} = start;
  const {endX, endY} = end;
  let i = startX;
  let j = startY;
  if(angle === -1){
    while (i <= endX && j >= endY){
      map[j][i] += 1;
      i += 1;
      j += angle;
    }
  }
  else {
    while (i <= endX && j<= endY){
      map[j][i] += 1;
      i += 1;
      j += angle;
    }
  }
}

const mapStraightLineLoop = (orientation, start, end, pos, map) => {
  if(orientation === 'y'){
    for(let i = start; i <= end; i++){
      map[i][pos] += 1;
    }
  }
  if(orientation === 'x'){
    for(let i = start; i <= end; i++){
      map[pos][i] += 1;
    }
  }
}

const countOverlaps = (map) => {
  let total = 0;
  for(let i = 0; i< map.length; i++){
    for(let j = 0; j< map[i].length; j++){
      if(map[i][j] > 1){
        total += 1;
      }
    }
  }
  return total;
}

const day5p1 = () => {
  const input = readDay5Input('../Data/Day5/day5.txt'); // ['x1,y1', 'x2,y2']

  const newMap = initialMap(1000,1000);

  const filledMap = fillMap(input, newMap); 
  const result = countOverlaps(filledMap);
  output(5, 1, result);
}

const day5p2 = () => {
  const input = readDay5Input('../Data/Day5/day5.txt'); // ['x1,y1', 'x2,y2']

  const newMap = initialMap(1000,1000);

  const filledMap = fillMap2(input, newMap);
  const result = countOverlaps(filledMap);
  output(5, 2, result);
}

module.exports = {day5p1, day5p2};