import game from '..';

const getCorrectAnswer = (num1, num2, value = 2, result = 1) => {
  if (value > num1 || value > num2) return String(result);
  return getCorrectAnswer(num1, num2, value + 1,
    (num1 % value === 0 && num2 % value === 0) ? value : result);
};

const getDataGame = () => {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = getCorrectAnswer(number1, number2);
  const expression = `${number1} ${number2}`;
  return [expression, correctAnswer];
};

export default() => {
  const rules = 'Find the greatest common divisor of given numbers.';
  game(rules, getDataGame);
};
