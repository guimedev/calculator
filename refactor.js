const buttons = document.querySelector('.buttons');
const valuePreview = document.querySelector('.value-preview');
const operationPreview = document.querySelector('.operation-preview');

let numbers = ['0'];
let value;
let operator;
let operand1;
let operand2;

const [ zero ] = numbers;

valuePreview.textContent = zero;

function addDot(arr) {
  switch (arr.length) {
    case 4:
      arr[0] += '.';
      break;
    case 5:
      arr[0] = arr[0].replace('.', '');
      arr[1] += '.';
      break;
    case 6:
      arr[1] = arr[1].replace('.', '');
      arr[2] += '.';
      break;
    case 7:
      arr[0] += '.';
      arr[2] = arr[2].replace('.', '');
      arr[3] += '.';
      break;
    case 8:
      arr[0] = arr[0].replace('.', '');
      arr[1] += '.';
      arr[3] = arr[3].replace('.', '');
      arr[4] += '.';
      break;
    case 9:
      arr[1] = arr[1].replace('.', '');
      arr[2] += '.';
      arr[4] = arr[4].replace('.', '');
      arr[5] += '.';
      break;
    case 10:
      arr[0] += '.';
      arr[2] = arr[2].replace('.', '');
      arr[3] += '.';
      arr[5] = arr[5].replace('.', '');
      arr[6] += '.';
      break;
    case 11:
      arr[0] = arr[0].replace('.', '');
      arr[1] += '.';
      arr[3] = arr[3].replace('.', '');
      arr[4] += '.';
      arr[6] = arr[6].replace('.', '');
      arr[7] += '.';
      break;
    case 12:
      arr[1] = arr[1].replace('.', '');
      arr[2] += '.';
      arr[4] = arr[4].replace('.', '');
      arr[5] += '.';
      arr[7] = arr[7].replace('.', '');
      arr[8] += '.';
      break;
    case 13:
      arr[0] += '.';
      arr[2] = arr[2].replace('.', '');
      arr[3] += '.';
      arr[5] = arr[5].replace('.', '');
      arr[6] += '.';
      arr[8] = arr[8].replace('.', '');
      arr[9] += '.';
      break;
    case 14:
      arr[0] = arr[0].replace('.', '');
      arr[1] += '.';
      arr[3] = arr[3].replace('.', '');
      arr[4] += '.';
      arr[6] = arr[6].replace('.', '');
      arr[7] += '.';
      arr[9] = arr[9].replace('.', '');
      arr[10] += '.';
      break;
    case 15:
      arr[1] = arr[1].replace('.', '');
      arr[2] += '.';
      arr[4] = arr[3].replace('.', '');
      arr[5] += '.';
      arr[7] = arr[6].replace('.', '');
      arr[8] += '.';
      arr[10] = arr[9].replace('.', '');
      arr[11] += '.';
      break;
  }
}

function removeDot(arr) {
  switch (arr.length) {
    case 3:
      arr[0] = arr[0].replace('.', '');
      break;
    case 4:
      arr[1] = arr[1].replace('.', '');
      arr[0] += '.';
      break;
    case 5:
      arr[2] = arr[2].replace('.', '');
      arr[1] += '.';
      break;
    case 6:
      arr[0] = arr[0].replace('.', '');
      arr[3] = arr[3].replace('.', '');
      arr[2] += '.';
      break;
    case 7:
      arr[1] = arr[1].replace('.', '');
      arr[0] += '.';
      arr[4] = arr[4].replace('.', '');
      arr[3] += '.';
      break;
    case 8:
      arr[2] = arr[2].replace('.', '');
      arr[1] += '.';
      arr[5] = arr[5].replace('.', '');
      arr[4] += '.';
      break;
    case 9:
      arr[0] = arr[0].replace('.', '');
      arr[3] = arr[3].replace('.', '');
      arr[2] += '.';
      arr[6] = arr[6].replace('.', '');
      arr[5] += '.';
      break;
    case 10:
      arr[1] = arr[1].replace('.', '');
      arr[0] += '.';
      arr[4] = arr[4].replace('.', '');
      arr[3] += '.';
      arr[7] = arr[7].replace('.', '');
      arr[6] += '.';
      break;
    case 11:
      arr[2] = arr[2].replace('.', '');
      arr[1] += '.';
      arr[5] = arr[5].replace('.', '');
      arr[4] += '.';
      arr[8] = arr[8].replace('.', '');
      arr[7] += '.';
      break;
    case 12:
      arr[0] = arr[0].replace('.', '');
      arr[3] = arr[3].replace('.', '');
      arr[2] += '.';
      arr[6] = arr[6].replace('.', '');
      arr[5] += '.';
      arr[9] = arr[9].replace('.', '');
      arr[8] += '.';
      break;
    case 13:
      arr[1] = arr[1].replace('.', '');
      arr[0] += '.';
      arr[4] = arr[4].replace('.', '');
      arr[3] += '.';
      arr[7] = arr[7].replace('.', '');
      arr[6] += '.';
      arr[10] = arr[10].replace('.', '');
      arr[9] += '.';
      break;
    case 14:
      arr[2] = arr[2].replace('.', '');
      arr[1] += '.';
      arr[5] = arr[4].replace('.', '');
      arr[4] += '.';
      arr[8] = arr[7].replace('.', '');
      arr[7] += '.';
      arr[11] = arr[10].replace('.', '');
      arr[10] += '.';
      break;
  }
}

buttons.addEventListener('click', (e) => {
  const { 
    localName, 
    textContent,
    classList
  } = e.target;

  const button = localName.includes('button');

  const [ firstNumber ] = numbers;
  
  const hasComma = numbers.join('').includes(',');

  if (firstNumber) {
    const hasMinusSign = firstNumber.includes('-');
  }
  
  let lastNumber = numbers[numbers.length -1]; 

  if (button) {
    const number = classList.contains('number');
    const comma = classList.contains('comma');
    const del = classList.contains('del');
    const plusMinus = classList.contains('plus-minus');
    const operators = classList.contains('operators');
    const plus = classList.contains('plus');
    const divide = classList.contains('divide');
    const clear = classList.contains('clear');

    if (number) {
      if (numbers.length < 15) {
        numbers.push(textContent)
      }

      if (firstNumber === zero) {
        numbers.shift();
      } 
      
      if (!hasComma) {
        addDot(numbers);
      }
    }

    if (comma) {
      if (!hasComma && numbers.length < 15) {
        numbers[numbers.length - 1] += ',';
      }
    }

    if (plusMinus) {
      if (firstNumber !== zero && !hasMinusSign) {
        numbers[0] = '-' + firstNumber;
      } else {
        numbers[0] = firstNumber.replace('-', '');
      }
    }

    if (del) {
      if (numbers.length === 1 && !hasComma) {
        numbers[0] = zero;
      } else {
        if (!lastNumber.includes(',')) {
          numbers.pop();
        } else {
          numbers[numbers.length - 1] = lastNumber.replace(',', '');
        }

        if (!hasComma) {
          removeDot(numbers);
        }
      }
    }

    value = numbers.join('');

    valuePreview.textContent = value;

    value = parseFloat(value.replaceAll('.', '').replace(',', '.'));
    
    if (operators) {
      if (isNaN(operand1)) {
        operand1 = value;
      }
      
      if (plus) {
        if (operator && isNumber(value)) {
          operand1 += value;
        } 
          
        operator = '+';
      }

      if (divide) {
        if (operator && isNumber(value)) {
          operand1 /= value;
        }
          
        operator = `/`;
      }

      operationPreview.textContent = `${operand1} ${operator}`;
      valuePreview.textContent = operand1;
      numbers = [];
    }

    if (clear) {
      numbers = [ zero ];
      valuePreview.textContent = zero;
      operand1 = undefined;
      operator = undefined;
      operationPreview.textContent = '';
    }
  }
})


function isNumber(value) {
  return isNaN(value) ? false : true;
}


