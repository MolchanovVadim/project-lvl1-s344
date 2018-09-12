import readlineSync from 'readline-sync';

export default(rules, getDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const numberOfAnswersForWin = 3;

  for (let i = 1; i <= numberOfAnswersForWin; i += 1) {
    const [expression, correctAnswer] = getDataGame();
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
