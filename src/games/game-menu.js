import readlineSync from 'readline-sync';
import gameEven from './game-even';
import gameGcd from './game-gcd';
import gameCalc from './game-calc';
import gameBalance from './game-balance';
import gamePrime from './game-prime';
import gameProgression from './game-progression';

const listGame = () => {
  console.log('\nWelcome to Brain Games!\n');
  console.log('List of games:\n');
  console.log('1. Even        : Answer "yes" if number even otherwise answer "no".');
  console.log('2. Balance     : Balance the given number.');
  console.log('3. Calc        : What is the result of the expression?');
  console.log('4. Gcd         : Find the greatest common divisor of given numbers.');
  console.log('5. Prime       : Answer "yes" if number prime otherwise answer "no".');
  console.log('6. Progression : What number is missing in this progression?');
  console.log('\nExit from brain games type : "exit"');
  const selectGame = () => {
    const answer = readlineSync.question('\nSelect number of game? ');
    if (answer === 'exit') return 'exit';
    console.log('');
    if (answer === '1') return gameEven;
    if (answer === '2') return gameBalance;
    if (answer === '3') return gameCalc;
    if (answer === '4') return gameGcd;
    if (answer === '5') return gamePrime;
    if (answer === '6') return gameProgression;
    console.log('Your answer is incorrect. Please try one more time.');
    return selectGame();
  };
  const selected = selectGame();
  if (selected === 'exit') {
    console.log('Have a nice day, see you later!');
    return;
  }
  selected();
  listGame();
};

export default listGame;
