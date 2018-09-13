import readlineSync from 'readline-sync';

export default(rules, getDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const numberOfAnswersForWin = 3;

  const getGame = (numberStep) => {
    if (numberStep > numberOfAnswersForWin) return true;
    const [expression, correctAnswer] = getDataGame();
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
    return getGame(numberStep + 1);
  };

  if (getGame(1)) console.log(`Congratulations, ${name}!`);
};

export const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;
