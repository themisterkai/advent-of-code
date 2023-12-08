import fs from 'fs';

const readInput = () => {
  const input = fs
    .readFileSync('./02-input.txt', 'utf-8')
    .toString()
    .split('\n');

  const games = {};

  for (let i = 0; i < input.length; i++) {
    const gameLines = input[i].substring(input[i].indexOf(':') + 1).split(';');
    const gameKey = `${i + 1}`;

    games[gameKey] = [];

    for (const line of gameLines) {
      const colorQuantities = line.trim().split(', ');

      const colorObject = {};

      for (const pair of colorQuantities) {
        const [quantity, color] = pair.split(' ');
        colorObject[color] = parseInt(quantity, 10);
      }

      games[gameKey].push(colorObject);
    }
  }
  return games;
};

const checkEntryForPartOne = entry => {
  return entry.reduce((a, c) => {
    if (!a) return false;
    if (c.red > 12) {
      return false;
    }
    if (c.green > 13) {
      return false;
    }
    if (c.blue > 14) {
      return false;
    }
    return a;
  }, true);
};

const checkEntryForPartTwo = entry => {
  const initial = { red: 0, blue: 0, green: 0 };
  const highest = entry.reduce((a, c) => {
    if (c.red > a.red) {
      a.red = c.red;
    }
    if (c.green > a.green) {
      a.green = c.green;
    }
    if (c.blue > a.blue) {
      a.blue = c.blue;
    }
    return a;
  }, initial);
  return Object.values(highest).reduce((a, c) => a * c, 1);
};

const cubeConundrum = () => {
  const input = readInput();

  const partOneTotal = Object.entries(input).reduce((a, c) => {
    if (checkEntryForPartOne(c[1])) {
      a += parseInt(c[0]);
    }
    return a;
  }, 0);
  console.log('Part 1: ', partOneTotal);

  const partTwoTotal = Object.values(input).reduce((a, c) => {
    return a + checkEntryForPartTwo(c);
  }, 0);

  console.log('Part 2: ', partTwoTotal);
};

cubeConundrum();
