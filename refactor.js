const buttons = document.querySelector('.buttons');
const valuePreview = document.querySelector('.value-preview');
const operationPreview = document.querySelector('.operation-preview');

let numbers = ['0'];
let value;
let operator;
let operand1;
let operand2;
let equalSign;

valuePreview.textContent = numbers[0];

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

function isNumber(value) {
  return isNaN(value) ? false : true;
}

buttons.addEventListener('click', (e) => {
  const { 
    localName, 
    textContent,
    classList
  } = e.target;

  const button = localName.includes('button');
  const hasComma = numbers.join('').includes(',');
  const hasMinusSign = numbers[0] && numbers[0].includes('-');
  
  let lastNumber = numbers[numbers.length -1]; 

  if (button) {
    const number = classList.contains('number');
    const comma = classList.contains('comma');
    const del = classList.contains('del');
    const plusMinus = classList.contains('plus-minus');
    const operators = classList.contains('operators');
    const plus = classList.contains('plus');
    const divide = classList.contains('divide');
    const times = classList.contains('times');
    const minus = classList.contains('minus');
    const clear = classList.contains('clear');
    const cancel = classList.contains('cancel');
    const equals = classList.contains('equals');

    if (number) {
      if (isNumber(operand2)) {
        numbers = [ '0' ];
        operand2 = undefined;
        equalSign = undefined;
      }

      if (numbers[0] === '0') {
        numbers.shift();
      } 

      if (numbers.length < 15) {
        numbers.push(textContent);

        if (!hasComma) {
          addDot(numbers);
        }
      }
    }

    if (comma) {
      if (!hasComma && numbers.length < 15) {
        numbers[numbers.length - 1] += ',';
      }
    }

    if (plusMinus) {
      if (numbers[0] === undefined || operationPreview.textContent.includes(equalSign)) { 
        return;
      }

      if (numbers[0] !== '0' && !hasMinusSign) {
        numbers[0] = '-' + numbers[0];
      } else {
        numbers[0] = numbers[0].replace('-', '');
      }
    }

    if (del) {
      if (numbers[0] === undefined || equalSign) {
        return;
      }

      if (numbers.length === 1 && !hasComma) {
        numbers[0] = '0';
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
      operand2 = undefined;

      if (isNaN(operand1)) {
        operand1 = value;
      }
      
      if (plus) {
        if (operator && isNumber(value) && !operationPreview.textContent.includes(equalSign)) {
          operand1 += value;
        } 
          
        operator = '+';
      }

      if (minus) {
        if (operator && isNumber(value) && !operationPreview.textContent.includes(equalSign)) {
          operand1 -= value;
        } 
          
        operator = '-';
      }

      if (times) {
        if (operator && isNumber(value) && !operationPreview.textContent.includes(equalSign)) {
          operand1 *= value;
        } 
          
        operator = '*';
      }

      if (divide) {
        if (operator && isNumber(value) && !operationPreview.textContent.includes(equalSign)) {
          operand1 /= value;
        }
          
        operator = `/`;
      }

      operationPreview.textContent = `${operand1} ${operator}`;

      operand1 = operand1.toLocaleString(undefined, { maximumSignificantDigits: 14 }); 

      valuePreview.textContent = operand1;

      operand1 = parseFloat(operand1.replaceAll('.', '').replace(',', '.'));

      numbers = [];
    }

    

    if (equals) {
      if (isNaN(operand2) && isNumber(operand1)) {
        if (isNaN(value)) {
          operand2 = operand1;
        } else {
          operand2 = value;
        }
      }

      if (isNumber(operand2)) {
        equalSign = '=';

        if (operator === '+') {
          operationPreview.textContent = `${operand1} ${operator} ${operand2} ${equalSign}`;
          operand1 += operand2;
        }

        if (operator === '-') {
          operationPreview.textContent = `${operand1} ${operator} ${operand2} ${equalSign}`;
          operand1 -= operand2;
        }

        if (operator === '*') {
          operationPreview.textContent = `${operand1} ${operator} ${operand2} ${equalSign}`;
          operand1 *= operand2;
        }

        if (operator === '/') {
          operationPreview.textContent = `${operand1} ${operator} ${operand2} ${equalSign}`;
          operand1 /= operand2;
        }

        operand1 = operand1.toLocaleString(undefined, { maximumSignificantDigits: 14 });

        valuePreview.textContent = operand1;

        operand1 = parseFloat(operand1.replaceAll('.', '').replace(',', '.'));
      } 
    }

    if (cancel) {
      if (operationPreview.textContent.includes(equalSign)) {
        numbers = ['0'];
        valuePreview.textContent = numbers[0];
        operand1 = undefined;
        operand2 = undefined;
        operationPreview.textContent = '';
      } else {
        numbers = ['0'];
        valuePreview.textContent = numbers[0];
      }
    }

    if (clear) {
      numbers = ['0'];
      valuePreview.textContent = numbers[0];
      operand1 = undefined;
      operator = undefined;
      operationPreview.textContent = '';
    }

    let valueLength = valuePreview.textContent.split('');
    valueLength = valueLength.join('').replaceAll('.', '').replace(',', '').replace('-', '');

    if (valueLength.length > 15) {
      valuePreview.style.justifyContent = 'center';
      valuePreview.style.fontSize = '1.4rem';

      numbers = ['0'];
      operator = undefined;
      operand1 = undefined;
      operand2 = undefined;
      equalSign = undefined;

      operationPreview.textContent = '';
      valuePreview.textContent = 'Ops! valor maior do que o permitido :/';
    } else {
      valuePreview.style.justifyContent = 'flex-end';

      if (valuePreview.textContent.includes('-')) {
        switch (valueLength.length) {
          case 10:
            valuePreview.style.fontSize = '3.79rem';
            break;
          case 11:
            valuePreview.style.fontSize = '3.5rem';
            break;
          case 12:
            valuePreview.style.fontSize = '3.25rem';
            break;
          case 13:
            valuePreview.style.fontSize = '2.94rem';
            break;
          case 14:
            valuePreview.style.fontSize = '2.76rem';
            break;
          case 15:
            valuePreview.style.fontSize = '2.6rem';
            break;
          default:
            valuePreview.style.fontSize = '4rem';
            break;
        }
      } else {
        switch (valueLength.length) {
          case 11:
            valuePreview.style.fontSize = '3.65rem';
            break;
          case 12:
            valuePreview.style.fontSize = '3.38rem';
            break;
          case 13:
            valuePreview.style.fontSize = '3.05rem';
            break;
          case 14:
            valuePreview.style.fontSize = '2.86rem';
            break;
          case 15:
            valuePreview.style.fontSize = '2.69rem';
            break;
          default:
            valuePreview.style.fontSize = '4rem';
            break;
        }
      }

      if (valuePreview.textContent.includes(',')) {
        let fontSize = parseFloat(valuePreview.style.fontSize.replace('rem', ''));

        if (valuePreview.textContent.includes('.')) {
          if (valuePreview.textContent.slice(1, 4).includes('.')) {
            switch (valueLength.length) {
              case 11:
                valuePreview.style.fontSize = `${fontSize + 0.16}rem`;
                break;
              case 12:
                valuePreview.style.fontSize = `${fontSize + 0.13}rem`;
                break;
              case 13:
                valuePreview.style.fontSize = `${fontSize + 0.21}rem`;
                break;
              case 14:
                valuePreview.style.fontSize = `${fontSize + 0.18}rem`;
                break;
              case 15:
                valuePreview.style.fontSize = `${fontSize + 0.16}rem`;
                break;
              default:
                valuePreview.style.fontSize = '4rem';
                break;
            }
          }
  
          if (valuePreview.textContent.slice(5, 8).includes('.')) {
            switch (valueLength.length) {
              case 10:
                valuePreview.style.fontSize = `${fontSize - 0.02}rem`;
                break;
              case 11:
                valuePreview.style.fontSize = `${fontSize}rem`;
                break;
              case 12:
                valuePreview.style.fontSize = `${fontSize}rem`;
                break;
              case 13:
                valuePreview.style.fontSize = `${fontSize + 0.1}rem`;
                break;
              case 14:
                valuePreview.style.fontSize = `${fontSize + 0.09}rem`;
                break;
              case 15:
                valuePreview.style.fontSize = `${fontSize + 0.08}rem`;
                break;
              default:
                valuePreview.style.fontSize = '4rem';
                break;
            }
          }

          if (valuePreview.textContent.slice(9, 12).includes('.')) {
            switch (valueLength.length) {
              case 10:
                valuePreview.style.fontSize = `${fontSize - 0.18}rem`;
                break;
              case 11:
                valuePreview.style.fontSize = `${fontSize - 0.13}rem`;
                break;
              case 12:
                valuePreview.style.fontSize = `${fontSize - 0.11}rem`;
                break;
              case 13:
                valuePreview.style.fontSize = `${fontSize}rem`;
                break;
              case 14:
                valuePreview.style.fontSize = `${fontSize}rem`;
                break;
              case 15:
                valuePreview.style.fontSize = `${fontSize}rem`;
                break;
              default:
                valuePreview.style.fontSize = '4rem';
                break;
            }
          }

          if (valuePreview.textContent.slice(13).includes('.')) {
            console.log(valueLength.length)
            switch (valueLength.length) {
              case 13:
                valuePreview.style.fontSize = `${fontSize - 0.1}rem`;
                break;
              case 14:
                valuePreview.style.fontSize = `${fontSize - 0.09}rem`;
                break;
              case 15:
                valuePreview.style.fontSize = `${fontSize - 0.08}rem`;
                break;
              default:
                valuePreview.style.fontSize = '4rem';
                break;
            }
          }
        } else {
          switch (valueLength.length) {
            case 11:
              valuePreview.style.fontSize = `${fontSize + 0.31}rem`;
              break;
            case 12:
              valuePreview.style.fontSize = `${fontSize + 0.26}rem`;
              break;
            case 13:
              valuePreview.style.fontSize = `${fontSize + 0.32}rem`;
              break;
            case 14:
              valuePreview.style.fontSize = `${fontSize + 0.28}rem`;
              break;
            case 15:
              valuePreview.style.fontSize = `${fontSize + 0.25}rem`;
              break;
            default:
              valuePreview.style.fontSize = '4rem';
              break;
          }
        }
      }
    }

    console.log(valueLength.length)
  }
})





