// Hometask (Week 3):
// Implement the calculator using the  JavaScript, which asks user to enter:
// 1) Number 1
// 2) Number 2
// 3) The operation (+,-,* or /);
// 4) Show the result or inform the user if the operation provided is not correct

const startButton = document.querySelector('.start-btn');
const clickerButton = document.querySelector('.clicker-btn');
const resultDisplay = document.querySelector('.result');

const startGame = () => {
	clickerButton.disabled = false;
	clickerButton.addEventListener('click', () => {
		counter++;
		console.log(counter);
		resultDisplay.innerText = counter;
	});
	setTimeout(() => {
		clickerButton.disabled = true;
		console.log('game ended');
	}, 6000);
};

let counter = 0;
startButton.addEventListener('click', startGame);
