import readlineSync from 'readline-sync';

export const hello = (game = '') => {
  console.log('Welcome to the Brain Games!');
  if (game === 'even') {
    console.log('Answer "yes" if number even otherwise answer "no".');
  }
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export const brainEven = () => {
  const name = hello('even');
  const numberOfAnswersForWin = 3;

  for (let i = 1; i <= numberOfAnswersForWin; i += 1) {
    const number = Math.floor(Math.random() * 101);
    const itEven = (number % 2) === 0;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((itEven && answer === 'yes') || (!itEven && answer === 'no')) {
      console.log('Correct!');
    } else {
      const correctAnswer = itEven ? 'yes' : 'no';
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
