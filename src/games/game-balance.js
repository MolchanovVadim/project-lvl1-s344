import game from '..';

export default() => {
  const rules = 'Balance the given number.';

  const getDataGame = () => {
    const number = (Math.floor(Math.random() * 100) + 100)
      * (Math.floor(Math.random() * 50) + 1);

    const getParam = (value, acc) => {
      if (value === 0) return acc;
      acc.len += 1;
      acc.sum += value % 10;
      return getParam(Math.floor(value / 10), acc);
    };

    const { len, sum } = getParam(number, { len: 0, sum: 0 });

    const baseNumber = Math.floor(sum / len);
    const needAdd = sum % len;

    const getCorrectAnswer = (numberDigits, numAdd, result) => {
      if (numberDigits === 0) return result;
      return getCorrectAnswer(numberDigits - 1, numAdd - 1, `${numAdd > 0 ? baseNumber + 1 : baseNumber}${result}`);
    };

    const correctAnswer = getCorrectAnswer(len, needAdd, '');

    const expression = `${number}`;
    return [expression, correctAnswer];
  };

  game(rules, getDataGame);
};
