const readNumbers = require('../../Shared/ReadNumbers');
const output = require('../../Shared/Output');

const inputCleanUp = (inputs) => {
  const numbersAndPlayers = inputs.split(',,,,');
  const bingoInputs = numbersAndPlayers[0].split(",").map(elem => parseInt(elem, 10));
  const players = numbersAndPlayers
    .splice(1)
    .map(data => data
      .split(",,")
      .map(elem => elem
        .trim()
        .replace(/\s+/g, ",")
        .split(",")
        .map(ele => parseInt(ele, 10))
      )
    );
  return {bingoInputs, players};
}

const crossOut = (player, input) => {
  for(let row = 0; row < player.length; row++){
    for(let col = 0; col < player[row].length; col++){
      if(player[row][col] === input){
        player[row][col] = -1;
      }
    }
  }
  return player;
}

const horizontalWin = (player) => {
  for(let row = 0; row < player.length; row++){
    const expected = '-1'.repeat(player[row].length);
    let result = '' 
    for(let col = 0; col < player[row].length; col++){
      result += `${player[row][col]}`;
    }
    if(result === expected){
      const output = {found: true, row: row, column: -1};
      return output;
    }
  }

  return {found: false, row: -1, column: -1};
}

const verticalWin = (player) => {
  for(let row = 0; row < player[0].length; row++){
    const expected = '-1'.repeat(player.length);
    let result = '' 
    for(let col = 0; col < player.length; col++){
      result += `${player[col][row]}`;
    }
    if(result === expected){
      const output = {found: true, row: -1, column: row};
      return output;
    }
  }

  return {found: false, row: -1, column: -1};
}

const bingoWinValidation = (player) => {
  const hor = horizontalWin(player);
  const ver = verticalWin(player);

  if(hor.found){
    return hor;
  }
  else if(ver.found){
    return ver;
  }
  else {
    return {found: false, row: -1, column: -1};
  }
}

const getSum = (players, playerWon) => {
  let sum = 0;
  const player = players[playerWon? playerWon: 0];
  for(let i = 0; i< player.length; i++){
    for(let j = 0; j< player[i].length; j++){
      if(player[i][j] !== -1){
        sum += player[i][j]
      }
    }
  }
  return sum;
}

const bingoGame = (bingoInput, players) => {
  for(let player = 0; player < players.length; player++){
    players[player] = crossOut(players[player], bingoInput);
    const {found, row, column} = bingoWinValidation(players[player]);
    if (found) return {playerWon: player, lastInput: bingoInput, row: row, column: column};
  }
  return {playerWon: -1, lastInput: -1, row: -1, column: -1};
}

const bingoGame2 = (bingoInput, players) => {
  const toSplice = []
  for(let player = 0; player < players.length; player++){
    players[player] = crossOut(players[player], bingoInput);
    const {found} = bingoWinValidation(players[player]);
    if (players.length === 1 && found) return {playerLost: players[0], lastInput: bingoInput, row: -1, column: -1}
    if (found && players.length !== 1) toSplice.push(player);
  }
  toSplice.forEach(() => {
    if(players.length !== 1) players.splice(toSplice.pop(), 1);
  })
  return {playerWon: -1, lastInput: -1, row: -1, column: -1};
}

const day4p1 = () => {
  const inputs = readNumbers('../Data/Day4/day4.txt', true);

  const {bingoInputs, players} = inputCleanUp(inputs);
  let gameResults = {};
  for(let i = 0; i< bingoInputs.length; i++){
    const results = bingoGame(bingoInputs[i], players);
    if(results.playerWon != -1){
      gameResults = results;
      break;
    }
  }

  const sum = getSum(players, gameResults.playerWon);

  const result = sum * gameResults.lastInput;
  output(4, 1, result);
}

const day4p2 = () => {
  const inputs = readNumbers('../Data/Day4/day4.txt', true);

  const {bingoInputs, players} = inputCleanUp(inputs);
  let gameResults = {};
  for(let i = 0; i< bingoInputs.length; i++){
    const results = bingoGame2(bingoInputs[i], players);
    if(results.playerWon != -1){
      gameResults = results;
      break;
    }
  }

  const sum = getSum(players, gameResults.playerWon);

  const result = sum * gameResults.lastInput;
  output(4, 2, result)
}

module.exports = { day4p1, day4p2 };

/**
 * for each number cross-out the number in each player 
 * and check for horizontal and vertical X
 */