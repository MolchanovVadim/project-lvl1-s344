import game from '..';

const getLengthSumNumber = (value, acc = { lengthNumber: 0, sumNumber: 0 }) => {
  if (value === 0) return acc;
  acc.lengthNumber += 1;
  acc.sumNumber += value % 10;
  return getLengthSumNumber(Math.floor(value / 10), acc);
};

const getCorrectAnswer = (number) => {
  const { lengthNumber, sumNumber } = getLengthSumNumber(number);

  const baseDigit = Math.floor(sumNumber / lengthNumber);
  const needAdd = sumNumber % lengthNumber;

  const generateAnswer = (step = 1, result = '') => {
    if (step > lengthNumber) return result;
    return generateAnswer(step + 1,
      `${step > needAdd ? baseDigit : baseDigit + 1}${result}`);
  };

  return generateAnswer();
};

const getDataGame = () => {
  const number = (Math.floor(Math.random() * 100) + 100)
    * (Math.floor(Math.random() * 50) + 1);
  const correctAnswer = getCorrectAnswer(number);
  const expression = `${number}`;
  return [expression, correctAnswer];
};

export default() => {
  const rules = 'Balance the given number.';
  game(rules, getDataGame);
};
