import game from '..';

export default() => {
  const rules = 'Find the greatest common divisor of given numbers.';

  const getDataGame = () => {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;

    let correctAnswer = 1;
    for (let i = 2; i <= number1 && i <= number2; i += 1) {
      if (number1 % i === 0 && number2 % i === 0) correctAnswer = i;
    }

    const expression = `${number1} ${number2}`;
    return [expression, String(correctAnswer)];
  };

  game(rules, getDataGame);
};
