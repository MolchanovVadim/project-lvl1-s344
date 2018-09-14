import game, { getRandomNumber } from '..';

const isPrime = (number) => {
  if (number < 2) return false;
  const iter = (count) => {
    if (count >= number) return true;
    if (number % count === 0) return false;
    return iter(count + 1);
  };
  return iter(2);
};

const getDataGame = () => {
  const number = getRandomNumber(100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const expression = `Is this number prime? ${number}`;
  return [expression, correctAnswer];
};

export default() => {
  const rules = 'Answer "yes" if number prime otherwise answer "no".';
  game(rules, getDataGame);
};
