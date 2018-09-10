import readlineSync from 'readline-sync';

export const hello = () => {
	console.log("Welcome to the Brain Games!");
	console.log("");
	const actual = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${actual}!`);
}