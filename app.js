const buttons = document.querySelector('.buttons');
const valuePreview = document.querySelector('.value-preview');
const operationPreview = document.querySelector('.operation-preview');
const MAX_VALUE = 999999999999999;

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
      arr[4] = arr[4].replace('.', '');
      arr[5] += '.';
      arr[7] = arr[7].replace('.', '');
      arr[8] += '.';
      arr[10] = arr[10].replace('.', '');
      arr[11] += '.';
      break;
    case 16:
      arr[0] += '.';
      arr[2] = arr[2].replace('.', '');
      arr[3] += '.';
      arr[5] = arr[5].replace('.', '');
      arr[6] += '.';
      arr[8] = arr[8].replace('.', '');
      arr[9] += '.';
      arr[11] = arr[11].replace('.', '');
      arr[12] += '.';
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
    case 15:
      arr[0] = arr[0].replace('.', '');
      arr[2] += '.';
      arr[3] = arr[3].replace('.', '');
      arr[5] += '.';
      arr[6] = arr[6].replace('.', '');
      arr[8] += '.';
      arr[9] = arr[9].replace('.', '');
      arr[11] += '.';
      arr[12] = arr[12].replace('.', '');
      break;
  }
}

function isNumber(value) {
  return isNaN(value) ? false : true;
}

buttons.addEventListener('click', (e) => {
  const { localName, textContent, classList } = e.target;

  const button = localName.includes('button');
  const hasComma = numbers.join('').includes(',');
  const hasMinusSign = numbers[0] && numbers[0].includes('-');

  let lastNumber = numbers[numbers.length - 1];

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
        numbers = ['0'];
        operand2 = undefined;
        equalSign = undefined;

        operationPreview.textContent = `${operand1} ${operator}`;
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
      if (
        numbers[0] === undefined ||
        operationPreview.textContent.includes(equalSign)
      ) {
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
      equalSign = undefined;

      if (isNaN(operand1)) {
        operand1 = value;
      }

      if (plus) {
        if (
          operator &&
          isNumber(value) &&
          !operationPreview.textContent.includes(equalSign)
        ) {
          operand1 += value;
        }

        operator = '+';
      }

      if (minus) {
        if (
          operator &&
          isNumber(value) &&
          !operationPreview.textContent.includes(equalSign)
        ) {
          operand1 -= value;
        }

        operator = '-';
      }

      if (times) {
        if (
          operator &&
          isNumber(value) &&
          !operationPreview.textContent.includes(equalSign)
        ) {
          operand1 *= value;
        }

        operator = '*';
      }

      if (divide) {
        if (operand1 && value === 0) {
          operationPreview.textContent = `${operand1} ${operator}`;
          valuePreview.style.fontSize = '1.945rem';
          valuePreview.textContent = 'Não é possível dividir por zero';
          return;
        }

        if (
          operator &&
          isNumber(value) &&
          !operationPreview.textContent.includes(equalSign)
        ) {
          operand1 /= value;
        }

        operator = `/`;
      }

      if (operand1 > MAX_VALUE) {
        operand1 = new Intl.NumberFormat('pt-BR', { notation: 'scientific' }).format(operand1);
      } else {
        operand1 = operand1.toString();

        if (operand1.length > 15) {
          if (operand1.includes('-')) {
            operand1 = operand1.slice(0, 17);
          } else {
            operand1 = operand1.slice(0, 16);
          }
        }

        operand1 = new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 15 }).format(operand1);
      }
      
      valuePreview.textContent = operand1;
      operand1 = parseFloat(operand1.replaceAll('.', '').replace(',', '.'));
      operationPreview.textContent = `${operand1} ${operator}`;
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

        if (operand1 > MAX_VALUE) {
          operand1 = new Intl.NumberFormat('pt-BR', { notation: 'scientific' }).format(operand1);
        }

        operationPreview.textContent = `${operand1} ${operator} ${operand2} ${equalSign}`;

        operand1 = parseFloat(operand1);

        if (operator === '+') {
          operand1 += operand2;
        }

        if (operator === '-') {
          operand1 -= operand2;
        }

        if (operator === '*') {
          operand1 *= operand2;
        }

        if (operator === '/') {
          if (operand2 === 0) {
            valuePreview.style.fontSize = '1.945rem';
            valuePreview.textContent = 'Não é possível dividir por zero';
            return;
          }

          operand1 /= operand2;
        }

        if (operand1 > MAX_VALUE) {
          operand1 = new Intl.NumberFormat('pt-BR', { notation: 'scientific' }).format(operand1);
        } else {
          operand1 = operand1.toString();
  
          if (operand1.length > 15) {
            if (operand1.includes('-')) {
              operand1 = operand1.slice(0, 17);
            } else {
              operand1 = operand1.slice(0, 16);
            }
          }
  
          operand1 = new Intl.NumberFormat('pt-BR', { maximumSignificantDigits: 15 }).format(operand1);
        }
        
        valuePreview.textContent = operand1;

        operand1 = parseFloat(operand1.replaceAll('.', '').replace(',', '.'));
      }
    }

    if (cancel) {
      if (operationPreview.textContent.includes(equalSign)) {
        numbers = ['0'];
        valuePreview.textContent = numbers[0];
        operand1 = undefined;
        operator = undefined;
        operand2 = undefined;
        equalSign = undefined;
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
      operand2 = undefined;
      equalSign = undefined;
      operationPreview.textContent = '';
    }
    console.log(numbers)
    let operationLength = operationPreview.textContent
    operationPreview.style.fontSize = '1.8rem';

    if (operationLength.length >= 29) {
      operationPreview.style.fontSize = '1.7rem';
    } 

    if (operationLength.length >= 31) {
      operationPreview.style.fontSize = '1.6rem';
    }

    if (operationLength.length >= 33) {
      operationPreview.style.fontSize = '1.38rem';
    }
    
    let valueLength = valuePreview
      .textContent
      .split('')
      .join('')
      .replaceAll('.', '')
      .replace(',', '')
      .replace('-', '');

    switch (valueLength.length) {
      case 10:
        valuePreview.style.fontSize = '4.28rem';
        break;
      case 11:
        valuePreview.style.fontSize = '3.94rem';
        break;
      case 12:
        valuePreview.style.fontSize = '3.65rem';
        break;
      case 13:
        valuePreview.style.fontSize = '3.28rem';
        break;
      case 14:
        valuePreview.style.fontSize = '3.08rem';
        break;
      case 15:
        valuePreview.style.fontSize = '2.89rem';
        break;
      default:
        valuePreview.style.fontSize = '4.5rem';
        break;
    }

    let fontSize = parseFloat(valuePreview.style.fontSize.replace('rem', ''));

    if (valuePreview.textContent.includes('-')) {
      switch (valueLength.length) {
        case 10:
          valuePreview.style.fontSize = `${fontSize - 0.2}rem`;
          break;
        case 11:
          valuePreview.style.fontSize = `${fontSize - 0.17}rem`;
          break;
        case 12:
          valuePreview.style.fontSize = `${fontSize - 0.15}rem`;
          break;
        case 13:
          valuePreview.style.fontSize = `${fontSize - 0.12}rem`;
          break;
        case 14:
          valuePreview.style.fontSize = `${fontSize - 0.11}rem`;
          break;
        case 15:
          valuePreview.style.fontSize = `${fontSize - 0.09}rem`;
          break;
      }
    }
   
    if (valuePreview.textContent.includes(',')) {
      switch (valueLength.length) {
        case 10:
          valuePreview.style.fontSize = `${fontSize + 0.22}rem`;
          break;
        case 11:
          valuePreview.style.fontSize = `${fontSize + 0.33}rem`;
          break;
        case 12:
          valuePreview.style.fontSize = `${fontSize + 0.28}rem`;
          break;
        case 13:
          valuePreview.style.fontSize = `${fontSize + 0.35}rem`;
          break;
        case 14:
          valuePreview.style.fontSize = `${fontSize + 0.3}rem`;
          break;
        case 15:
          valuePreview.style.fontSize = `${fontSize + 0.27}rem`;
          break;
      }

      if (valuePreview.textContent.includes('-')) {
        switch (valueLength.length) {
          case 10:
            valuePreview.style.fontSize = `${fontSize + 0.16}rem`;
            break;
          case 11:
            valuePreview.style.fontSize = `${fontSize + 0.13}rem`;
            break;
          case 12:
            valuePreview.style.fontSize = `${fontSize + 0.1}rem`;
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
        }
      }

      if (valuePreview.textContent.slice(1, 4).includes('.')) {
        switch (valueLength.length) {
          case 10:
            valuePreview.style.fontSize = `${fontSize + 0.19}rem`;
            break;
          case 11:
            valuePreview.style.fontSize = `${fontSize + 0.16}rem`;
            break;
          case 12:
            valuePreview.style.fontSize = `${fontSize + 0.13}rem`;
            break;
          case 13:
            valuePreview.style.fontSize = `${fontSize + 0.23}rem`;
            break;
          case 14:
            valuePreview.style.fontSize = `${fontSize + 0.19}rem`;
            break;
          case 15:
            valuePreview.style.fontSize = `${fontSize + 0.18}rem`;
            break;
        }
      }

      if (
        valuePreview.textContent.includes('-') &&
        valuePreview.textContent.slice(2, 5).includes('.')
      ) {
        switch (valueLength.length) {
          case 10:
            valuePreview.style.fontSize = `${fontSize - 0.03}rem`;
            break;
          case 11:
            valuePreview.style.fontSize = `${fontSize - 0.03}rem`;
            break;
          case 12:
            valuePreview.style.fontSize = `${fontSize - 0.03}rem`;
            break;
          case 13:
            valuePreview.style.fontSize = `${fontSize + 0.09}rem`;
            break;
          case 14:
            valuePreview.style.fontSize = `${fontSize + 0.08}rem`;
            break;
          case 15:
            valuePreview.style.fontSize = `${fontSize + 0.07}rem`;
            break;
        }
      }

      if (valuePreview.textContent.slice(5, 8).includes('.')) {
        switch (valueLength.length) {
          case 10:
            valuePreview.style.fontSize = `${fontSize}rem`;
            break;
          case 11:
            valuePreview.style.fontSize = `${fontSize}rem`;
            break;
          case 12:
            valuePreview.style.fontSize = `${fontSize}rem`;
            break;
          case 13:
            valuePreview.style.fontSize = `${fontSize + 0.11}rem`;
            break;
          case 14:
            valuePreview.style.fontSize = `${fontSize + 0.09}rem`;
            break;
          case 15:
            valuePreview.style.fontSize = `${fontSize + 0.09}rem`;
            break;
        }
      }

      if (
        valuePreview.textContent.includes('-') &&
        valuePreview.textContent.slice(6, 9).includes('.')
      ) {
        switch (valueLength.length) {
          case 10:
            valuePreview.style.fontSize = `${fontSize - 0.2}rem`;
            break;
          case 11:
            valuePreview.style.fontSize = `${fontSize - 0.17}rem`;
            break;
          case 12:
            valuePreview.style.fontSize = `${fontSize - 0.15}rem`;
            break;
          case 13:
            valuePreview.style.fontSize = `${fontSize - 0.02}rem`;
            break;
          case 14:
            valuePreview.style.fontSize = `${fontSize - 0.02}rem`;
            break;
          case 15:
            valuePreview.style.fontSize = `${fontSize - 0.01}rem`;
            break;
        }
      }

      if (valuePreview.textContent.slice(9, 12).includes('.')) {
        switch (valueLength.length) {
          case 10:
            valuePreview.style.fontSize = `${fontSize - 0.17}rem`;
            break;
          case 11:
            valuePreview.style.fontSize = `${fontSize - 0.15}rem`;
            break;
          case 12:
            valuePreview.style.fontSize = `${fontSize - 0.13}rem`;
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
        }
      }

      if (
        valuePreview.textContent.includes('-') &&
        valuePreview.textContent.slice(10, 13).includes('.')
      ) {
        switch (valueLength.length) {
          case 10:
            valuePreview.style.fontSize = `${fontSize - 0.36}rem`;
            break;
          case 11:
            valuePreview.style.fontSize = `${fontSize - 0.3}rem`;
            break;
          case 12:
            valuePreview.style.fontSize = `${fontSize - 0.27}rem`;
            break;
          case 13:
            valuePreview.style.fontSize = `${fontSize - 0.12}rem`;
            break;
          case 14:
            valuePreview.style.fontSize = `${fontSize - 0.11}rem`;
            break;
          case 15:
            valuePreview.style.fontSize = `${fontSize - 0.09}rem`;
            break;
        }
      }

      if (valuePreview.textContent.slice(13).includes('.')) {
        switch (valueLength.length) {
          case 10:
            valuePreview.style.fontSize = `${fontSize}rem`;
            break;
          case 11:
            valuePreview.style.fontSize = `${fontSize}rem`;
            break;
          case 12:
            valuePreview.style.fontSize = `${fontSize}rem`;
            break;
          case 13:
            valuePreview.style.fontSize = `${fontSize - 0.1}rem`;
            break;
          case 14:
            valuePreview.style.fontSize = `${fontSize - 0.09}rem`;
            break;
          case 15:
            valuePreview.style.fontSize = `${fontSize - 0.07}rem`;
            break;
        }
      }

      if (
        valuePreview.textContent.includes('-') &&
        valuePreview.textContent.slice(14).includes('.')
      ) {
        switch (valueLength.length) {
          case 10:
            valuePreview.style.fontSize = `${fontSize}rem`;
            break;
          case 11:
            valuePreview.style.fontSize = `${fontSize}rem`;
            break;
          case 12:
            valuePreview.style.fontSize = `${fontSize}rem`;
            break;
          case 13:
            valuePreview.style.fontSize = `${fontSize - 0.21}rem`;
            break;
          case 14:
            valuePreview.style.fontSize = `${fontSize - 0.19}rem`;
            break;
          case 15:
            valuePreview.style.fontSize = `${fontSize - 0.16}rem`;
            break;
        }
      }
    }
  }
});
