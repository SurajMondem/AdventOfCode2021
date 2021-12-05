// Shared Files Import
const ReadNumbers = require("./Shared/ReadNumbers");

// Solutions Import
const { day1p1, day1p2 } = require('./Solutions/Day1/index');
const { day2p1, day2p2 } = require('./Solutions/Day2/index');
const { day3p1, day3p2 } = require('./Solutions/Day3/index');
const { day4p1, day4p2 } = require('./Solutions/Day4/index');
const { day5p1, day5p2} = require('./Solutions/Day5/index');
const { day6p1, day6p2} = require('./Solutions/Day6/index');
const { day7p1, day7p2} = require('./Solutions/Day7/index');
const { day8p1, day8p2} = require('./Solutions/Day8/index');
const { day9p1, day9p2} = require('./Solutions/Day9/index');
const { day10p1, day10p2} = require('./Solutions/Day10/index');
const { day11p1, day11p2} = require('./Solutions/Day11/index');
const { day12p1, day12p2} = require('./Solutions/Day12/index');



// Test Calls
const testFunction = () => {
  const numbers = ReadNumbers('../Data/test/test.txt');
  console.group("***Testing Group***");
  console.log(numbers.length);
  console.log(numbers);
  console.groupEnd();
}

// testFunction();


/** Solutions function */ 
// day1p1();
// day1p2();

// day2p1();
// day2p2();

// day3p1();
// day3p2();

// day4p1();
// day4p2();

day5p1();
day5p2();

// day6p1();
// day6p2();

// day7p1();
// day7p2();

// day8p1();
// day8p2();

// day9p1();
// day9p2();

// day10p1();
// day10p2();

// day11p1();
// day11p2();

// day12p1();
// day12p2();

// day13p1();
// day13p2();

// day14p1();
// day14p2();

// day15p1();
// day15p2();
