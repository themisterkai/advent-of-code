import fs from 'fs';

const readInput = () => {
  const input = fs
    .readFileSync('./04-input.txt', 'utf-8')
    .toString()
    .split('\n');

  const games = {};

  for (let i = 0; i < input.length; i++) {
    const gameLines = input[i].substring(input[i].indexOf(':') + 1).split(';');
    const gameKey = `${i + 1}`;

    games[gameKey] = [];

    for (const line of gameLines) {
      const trimedArr =  line.trim().split('| ');
      for (const arr of trimedArr) {
        games[gameKey].push(arr.trim().split(/\s+/))
      }
    }
  }
  return games;
};

const computePoints = n => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return 2**(n-1);
}

const computeGames = () => {
  const input = readInput();

  const partOne = Object.entries(input).reduce((a,c) => {
    const filtered = c[1][0].filter(e => c[1][1].includes(e));
    return a + computePoints(filtered.length);
  }, 0)
  console.log('Part One: ', partOne)
}

computeGames();
