const { readInput } = require('../../Shared/ReadInputs');
const output = require('../../Shared/Output');


const logic = (grid, h, w) => {
  
  let answer = 0

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (isLower(grid, y, x, w, h)) {
        answer += grid[y][x] + 1
      }
    }
  }

	return answer;
}

function isLower(floor, y, x, w, h) {
  const tile = floor[y][x]

  if (y > 0 && floor[y - 1][x] <= tile) return false // top
  if (x > 0 && floor[y][x - 1] <= tile) return false // left
  if (x < w - 1 && floor[y][x + 1] <= tile) return false // right
  if (y < h - 1 && floor[y + 1][x] <= tile) return false // bottom

  return true
}

function getBasin(floor, y, x, w, h, checked = []) {
  if (x < 0 || x >= w || y < 0 || y >= h) return 0
  if (floor[y][x] == 9) return 0

  const key = `${y}_${x}`
  if (checked.includes(key)) return 0

  let count = 1 // itself
  checked.push(key)

  count += getBasin(floor, y - 1, x, w, h, checked)
  count += getBasin(floor, y + 1, x, w, h, checked)
  count += getBasin(floor, y, x - 1, w, h, checked)
  count += getBasin(floor, y, x + 1, w, h, checked)

  return count
}


const day9p1 = () => {
  const input = readInput('../Data/Day9/day9.txt', '9')
  const h = input.length
  const w = input[0].length
  const result = logic(input, h, w);

  output(9, 1, result);
}

const day9p2 = () => {
  const input = readInput('../Data/Day9/day9.txt', '9')
  const h = input.length
  const w = input[0].length
  const basins = []

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (isLower(input, y, x, w, h)) {
        basins.push(getBasin(input, y, x, w, h))
      }
    }
  }

  const sorted = basins.sort((a, b) => b - a)
  const answer = sorted[0] * sorted[1] * sorted[2]

  output(9, 2, answer);
}

module.exports = {day9p1, day9p2}
