import fs from 'fs';

const getCalibrationValuePartOne = line => {
  const numOnly = line.replace(/\D/g, '');
  return numOnly[0] + numOnly[numOnly.length - 1];
};

const replaceWordsWithNumbers = line => {
  const numbersAsWords = {
    one: 'o1e',
    two: 't2o',
    three: 't3ree',
    four: 'f4ur',
    five: 'f5ve',
    six: 's6x',
    seven: 's7ven',
    eight: 'e8ght',
    nine: 'n9ne',
  };
  return Object.entries(numbersAsWords).reduce((a, c) => {
    return a.replaceAll(c[0], c[1]);
  }, line);
};

const partOne = input => {
  return input.reduce((a, c) => a + parseInt(getCalibrationValuePartOne(c)), 0);
};

const trebuchet = () => {
  const input = fs
    .readFileSync('./01-input.txt', 'utf-8')
    .toString()
    .split('\n');

  console.log('Part 1: ', partOne(input));
  const partTwo = input.map(line => replaceWordsWithNumbers(line));
  console.log('Part 2: ', partOne(partTwo));
};

trebuchet();
