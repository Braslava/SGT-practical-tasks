$(document).ready(function () {
	let result = 0;
	let prevEntry = 0;
	let operation = null;
	let currentEntry = '0';

	updateDisplay(result);
	$('.key').on('click', function (e) {
		let buttonPressed = e.target.innerHTML;
		console.log(buttonPressed);

		if (buttonPressed === 'C') {
			result = 0;
			currentEntry = '0';
		} else if (buttonPressed === 'CE') {
			currentEntry = '0';
		} else if (buttonPressed === '.') {
			currentEntry += '.';
		} else if (isNumber(buttonPressed)) {
			if (currentEntry === '0') currentEntry = buttonPressed;
			else currentEntry = currentEntry + buttonPressed;
		} else if (isOperator(buttonPressed)) {
			prevEntry = parseFloat(currentEntry);
			operation = buttonPressed;
			currentEntry = '';
		} else if (buttonPressed === '=') {
			currentEntry = operate(prevEntry, currentEntry, operation);
			operation = null;
		}

		if (currentEntry === '' || !currentEntry) {
			return;
		}
		updateDisplay(currentEntry);
	});
});

function updateDisplay(value) {
	let displayValue = value.toString();
	$('.result').html(displayValue.substring(0, 12));
}

function isNumber(value) {
	return !isNaN(value);
}

function isOperator(value) {
	return value === '÷' || value === '*' || value === '+' || value === '-';
}

function operate(a, b, operation) {
	a = parseFloat(a);
	b = parseFloat(b);
	console.log(a, b, operation);
	if (operation === '+') return a + b;
	if (operation === '-') return a - b;
	if (operation === '*') return a * b;
	if (operation === '÷') return a / b;
}

// abither logic that somehow did not work

// let num1 = '';
// let num2 = '';
// let operator = '';
// let total = '';

// function handleNumberClick(number) {
// 	if (num1 === '') {
// 		num1 = number;
// 	} else {
// 		num2 = number;
// 	}
// 	displayValue(number);
// }

// function handleOperatorClick(operatorValue) {
// 	if (operator === '') {
// 		operator = operatorValue;
// 	} else {
// 		handleTotal();
// 		operator = operatorValue;
// 	}
// }

// $(document).ready(function () {
// 	$('button').on('click', function (e) {
// 		let btnValue = e.target.innerHTML;
// 		if (btnValue >= '0' && btnValue <= '9') {
// 			handleNumberClick(btnValue);
// 		} else if (btnValue === 'AC') {
// 			displayValue(0);
// 		} else {
// 			handleOperatorClick(btnValue);
// 		}
// 	});
// });

// function displayValue(value) {
// 	$('.result').text(value);
// }

// function handleTotal() {
// 	switch (operator) {
// 		case '+':
// 			total = +num1 + +num2;
// 			displayValue(total);
// 			break;
// 		case '-':
// 			total = +num1 - +num2;
// 			displayValue(total);
// 			break;
// 		case 'x':
// 			total = +num1 * +num2;
// 			displayValue(total);
// 			break;
// 		case '÷':
// 			total = +num1 / +num2;
// 			displayValue(total);
// 			break;
// 		case '=':
// 			//total = +num1 + +num2;
// 			displayValue(total);
// 			break;
// 		case '.':
// 			total = num1 + '.' + num2;
// 			displayValue(total);
// 			break;
// 		case 'AC':
// 			total = 0;
// 			displayValue(total);
// 			break;
// 	}
// }
