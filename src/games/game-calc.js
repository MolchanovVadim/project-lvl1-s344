import game from '..';

export default() => {
  const rules = 'What is the result of the expression?';

  const getDataGame = () => {
    const number1 = Math.floor(Math.random() * 101);
    const number2 = Math.floor(Math.random() * 101);
    const numberOperation = Math.floor(Math.random() * 3);
    const data = {
      0: { operation: '+', value: () => number1 + number2 },
      1: { operation: '-', value: () => number1 - number2 },
      2: { operation: '*', value: () => number1 * number2 },
    };
    const correctAnswer = String(data[numberOperation].value());
    const expression = `${number1} ${data[numberOperation].operation} ${number2}`;
    return [expression, correctAnswer];
  };

  game(rules, getDataGame);
};
