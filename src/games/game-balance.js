import game, { getRandomNumber } from '..';

const findLengthAndSumDigitsOfNumber = (number) => {
  const iter = (value, acc) => {
    if (value === 0) return acc;
    acc.lengthNumber += 1;
    acc.sumNumber += value % 10;
    return iter(Math.floor(value / 10), acc);
  };
  return iter(number, { lengthNumber: 0, sumNumber: 0 });
};

const findNormalizedNumber = (number) => {
  const { lengthNumber, sumNumber } = findLengthAndSumDigitsOfNumber(number);

  const baseDigit = Math.floor(sumNumber / lengthNumber);
  const needAdd = sumNumber % lengthNumber;

  const iter = (step = 1, result = '') => {
    if (step > lengthNumber) return result;
    return iter(step + 1,
      `${step > needAdd ? baseDigit : baseDigit + 1}${result}`);
  };

  return Number(iter());
};

const getDataGame = () => {
  const number = (getRandomNumber(100) + 99) * (getRandomNumber(50));
  const correctAnswer = String(findNormalizedNumber(number));
  const expression = `${number}`;
  return [expression, correctAnswer];
};

export default() => {
  const rules = 'Balance the given number.';
  game(rules, getDataGame);
};
