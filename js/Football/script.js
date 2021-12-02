'use strict';

//DATA
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4.0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//EXPRESSIONS
const goalsScorers = function (...scores) {
  for (let i = 0; i < scores.length; i++) {
    console.log(`Goal ${i} - ${scores[i]}`);
  }
};

const avgOdds = function (odds) {
  let sum = 0;
  const objOdds = Object.values(odds);
  for (const item of objOdds) {
    sum += item;
  }
  return (sum /= objOdds.length);
};

const printOdds = function (game) {
  for (const [item, value] of Object.entries(game.odds)) {
    let teamName = 'draw';
    let statement = 'Odd of';
    teamName =
      item === 'team1' ? game.team1 : item === 'team2' ? game.team2 : 'draw';
    console.log(`${statement} ${teamName} : ${value} `);
  }
};

//EXECUTIONS
goalsScorers(...game.scored);
const { arrOdds } = game.odds;
console.log(game.odds);
//console.log(arrOdds);
console.log(avgOdds(game.odds));
printOdds(game);
