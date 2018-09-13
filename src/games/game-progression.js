import game from '..';

export default() => {
  const rules = 'What number is missing in this progression?';

  const getDataGame = () => {
    const initValue = Math.floor(Math.random() * 10) + 1;
    const lengthProgression = 10;

    const getData = (count, value, express, corrAnswer) => {
      if (count > lengthProgression) return [express, String(corrAnswer)];

      return getData(count + 1, value + initValue,
        express + (count === initValue ? '.. ' : `${value} `),
        count === initValue ? value : corrAnswer);
    };
    return getData(1, initValue, '', 0);
  };

  game(rules, getDataGame);
};
