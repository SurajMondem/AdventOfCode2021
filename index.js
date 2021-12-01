// Shared Files Import
const ReadNumbers = require("./Shared/ReadNumbers");

// Solutions Import
const { day1p1, day1p2 } = require('./Solutions/Day1/index');
const {} = require('./Solutions/Day2/index');
const {} = require('./Solutions/Day3/index');
const {} = require('./Solutions/Day4/index');
const {} = require('./Solutions/Day5/index');
const {} = require('./Solutions/Day6/index');
const {} = require('./Solutions/Day7/index');
const {} = require('./Solutions/Day8/index');


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

// day5p1();
// day5p2();
