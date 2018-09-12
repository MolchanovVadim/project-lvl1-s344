import game from '..';

export default() => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';

  const getDataGame = () => {
    const expression = Math.floor(Math.random() * 101);
    const correctAnswer = (expression % 2) === 0 ? 'yes' : 'no';
    return [expression, correctAnswer];
  };

  game(rules, getDataGame);
};
