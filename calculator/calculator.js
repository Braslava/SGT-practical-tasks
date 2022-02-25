// Hometask (Week 3):
// Implement the calculator using the  JavaScript, which asks user to enter:
// 1) Number 1
// 2) Number 2
// 3) The operation (+,-,* or /);
// 4) Show the result or inform the user if the operation provided is not correct

const calculatorForm = document.querySelector('.calculator');
const resultDisplay = document.querySelector('.result');

calculatorForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const firstNum = calculatorForm.querySelector('#first-number').value;
	const secondNum = calculatorForm.querySelector('#second-number').value;
	const operator = calculatorForm.querySelector('#operation').value;
	if (!['+', '-', '*', '/'].includes(operator)) {
		alert('Wrong operator input!');
		return;
	}

	let result;

	switch (operator) {
		case '+':
			result = firstNum + secondNum;
			break;
		case '-':
			result = firstNum - secondNum;
			break;
		case '*':
			result = firstNum * secondNum;
			break;
		case '/':
			result = firstNum / secondNum;
			break;
		default:
			alert('Sorry, something went wrong');
	}

	console.log(result);
	if (result) {
		resultDisplay.innerText = `result: ${firstNum} ${operator} ${secondNum} = ${result}`;
	}
});
