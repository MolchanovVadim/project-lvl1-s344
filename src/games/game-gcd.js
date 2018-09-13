import game from '..';

const getCorrectAnswer = (value, num1, num2, result) => {
  if (value > num1 || value > num2) return result;
  return getCorrectAnswer(value + 1, num1, num2,
    (num1 % value === 0 && num2 % value === 0) ? value : result);
};

const getDataGame = () => {
  const number1 = Math.floor(Math.random() * 100) + 1;
  const number2 = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = getCorrectAnswer(2, number1, number2, 1);
  const expression = `${number1} ${number2}`;
  return [expression, String(correctAnswer)];
};

export default() => {
  const rules = 'Find the greatest common divisor of given numbers.';
  game(rules, getDataGame);
};
