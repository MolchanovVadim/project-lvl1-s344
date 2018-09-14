import game, { getRandomNumber } from '..';

const ArithProgr = (firstValue, step) => n => firstValue + (n - 1) * step;

const getDataGame = () => {
  const initValue = getRandomNumber(10);
  const lengthProgression = 10;
  const nextNumber = ArithProgr(initValue, initValue);
  const correctAnswer = String(nextNumber(initValue));

  const generateExpression = (value, count = 1, express = '') => {
    if (count > lengthProgression) return express;

    return generateExpression(nextNumber(count + 1), count + 1,
      express + (count === initValue ? '.. ' : `${value} `));
  };
  const expression = generateExpression(initValue);
  return [expression, correctAnswer];
};

export default() => {
  const rules = 'What number is missing in this progression?';
  game(rules, getDataGame);
};
