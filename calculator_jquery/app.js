let num1 = '';
let num2 = '';
let operator = '';
let total = '';

function handleNumberClick(number) {
	if (num1 === '') {
		num1 = number;
	} else {
		num2 = number;
	}
	displayValue(number);
}

function handleOperatorClick(operatorValue) {
	if (operator === '') {
		operator = operatorValue;
	} else {
		handleTotal();
		operator = operatorValue;
	}
}

$(document).ready(function () {
	$('button').on('click', function (e) {
		let btnValue = e.target.innerHTML;
		if (btnValue >= '0' && btnValue <= '9') {
			handleNumberClick(btnValue);
		} else if (btnValue === 'AC') {
			displayValue(0);
		} else {
			handleOperatorClick(btnValue);
		}
	});
});

function displayValue(value) {
	$('.result').text(value);
}

function handleTotal() {
	switch (operator) {
		case '+':
			total = +num1 + +num2;
			displayValue(total);
			break;
		case '-':
			total = +num1 - +num2;
			displayValue(total);
			break;
		case 'x':
			total = +num1 * +num2;
			displayValue(total);
			break;
		case '÷':
			total = +num1 / +num2;
			displayValue(total);
			break;
		case '=':
			//total = +num1 + +num2;
			displayValue(total);
			break;
		case '.':
			total = num1 + '.' + num2;
			displayValue(total);
			break;
		case 'AC':
			total = 0;
			displayValue(total);
			break;
	}
}
