

const output = (day, problem, results) => {
  console.group(`***Day ${day} P${problem}***`);
  console.log(results);
  console.groupEnd();
}

module.exports = output;