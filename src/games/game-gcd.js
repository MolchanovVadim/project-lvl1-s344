import game, { getRandomNumber } from '..';

const findGcd = (num1, num2) => {
  const iter = (value, result) => {
    if (value > num1 || value > num2) return result;
    return iter(value + 1,
      (num1 % value === 0 && num2 % value === 0) ? value : result);
  };
  return iter(2, 1);
};

const getDataGame = () => {
  const number1 = getRandomNumber(100);
  const number2 = getRandomNumber(100);
  const correctAnswer = String(findGcd(number1, number2));
  const expression = `${number1} ${number2}`;
  return [expression, correctAnswer];
};

export default() => {
  const rules = 'Find the greatest common divisor of given numbers.';
  game(rules, getDataGame);
};
