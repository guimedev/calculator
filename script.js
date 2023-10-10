const buttons = document.querySelector('.buttons');
const valuePreview = document.querySelector('.value-preview');
const operationPreview = document.querySelector('.operation-preview');

let numericBtnValues = ['0']; 
let value = null; 
let operator = null;
let operand1 = null; 
let operand2 = null; 

const staticFontSize = 40;
let responsiveFontSize = 0;
const lengthLimit = 10;

valuePreview.textContent = numericBtnValues[0];

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

buttons.addEventListener('click', e => {
  const tagBtn = e.target.tagName.toLowerCase().includes('button');
  const btn = e.target;
  const btnContent = btn.textContent;

  if (tagBtn) {
    const number = btn.classList.contains('number');
    const comma = btn.classList.contains('comma');
    const plusMinus = btn.classList.contains('plus-minus');

    const operators = btn.classList.contains('operators');
    const plus = btn.classList.contains('plus');
    const minus = btn.classList.contains('minus');
    const times = btn.classList.contains('times');
    const divide = btn.classList.contains('divide');
    const equals = btn.classList.contains('equals');
    
    const del = btn.classList.contains('del');
    const cancel = btn.classList.contains('cancel');
    const clear = btn.classList.contains('clear');

    if (number) {
      if (operator) {
        if (operator === '=') {
          numericBtnValues = ['0'];
          operand1 = null;
          operand2 = null;
          operationPreview.textContent = '';
        }

        operator = null; 
      }

      if (numericBtnValues[0] === '0' && !numericBtnValues.join('').includes(',')) {
        numericBtnValues.shift();
      }

      if (numericBtnValues.length < 15) {
        numericBtnValues.push(btnContent);

        if (!numericBtnValues.join('').includes(',')) {
          addDot(numericBtnValues);
        }
      }
    }

    if (comma) {
      if (!numericBtnValues.join('').includes(',') && numericBtnValues.length < 15) {
        numericBtnValues[numericBtnValues.length - 1] += ',';
      }
    }

    if (del) {
      if (operator) {
        return;
      }

      if (numericBtnValues.length === 1 && !numericBtnValues.join('').includes(',')) {
        numericBtnValues[0] = '0';
      } else {
        if (numericBtnValues[numericBtnValues.length - 1].includes(',')) {
          numericBtnValues[numericBtnValues.length - 1] = numericBtnValues[numericBtnValues.length - 1].replace(',', '');
        } else {
          numericBtnValues.pop();
    
          if (!numericBtnValues.join('').includes(',')) {
            removeDot(numericBtnValues);
          }
        }
      }
    }

    valuePreview.textContent = numericBtnValues.join('');

    value = Number(numericBtnValues.join('').replaceAll('.', '').replace(',', '.'));

    if (plusMinus) {
      if (operationPreview.textContent.includes('=')) {
        valuePreview.textContent = operand1.toLocaleString(undefined, { maximumFractionDigits: 15 });
        return;
      }

      if (operator) {
        value = operand1;
        operator = null;
      }
      
      if (value !== 0) {
        value *= -1;
      }
      
      valuePreview.textContent = value.toLocaleString(undefined, { maximumFractionDigits: 15 });
      
      value = String(value)

      if (value.includes('.')) {
        value = value.replace('.', ',');
      }
      
      
      if (value.includes('-')) {
        value = value.replace('-', '');
        numericBtnValues = value.split(''); 
        numericBtnValues[0] = '-' + numericBtnValues[0];
      } else {
        numericBtnValues = value.split('');
      }
    }

    if (operators) {
      operand2 = 0;

      if (plus) {
        operator = '+';
        
        if (!operand1) {
          operand1 = value;
        } else if (operationPreview.textContent.includes('+') && value !== 0) {
          operand1 += value;   
        }
      }

      if (minus) {
        operator = '-';

        if (!operand1) {
          operand1 = value;
        } else if (operationPreview.textContent.includes('-') && value !== 0) {
          operand1 -= value;   
        }
      }

      if (times) {
        operator = '*';

        if (!operand1) {
          operand1 = value;
        } else if (operationPreview.textContent.includes('*') && value !== 0) {
          operand1 *= value;   
        }
      }

      if (divide) {
        operator = '/';

        if (!operand1) {
          operand1 = value;
        } else if (operationPreview.textContent.includes('/') && value !== 0) {
          operand1 /= value;   
        }
      }

      operationPreview.textContent = `${operand1} ${operator}`;
      valuePreview.textContent = operand1.toLocaleString(undefined, { maximumFractionDigits: 15 });

      numericBtnValues = ['0'];
    }

    if (equals) {
      operator = '=';

      if (!operand2) {
        if (value) {
          operand2 = value;
        } else {
          operand2 = operand1;
        }
      }

      if (operationPreview.textContent.includes('+')) {
        operationPreview.textContent = `${operand1} + ${operand2} ${operator}`;

        operand1 += operand2;
      } else if (operationPreview.textContent.includes('*')) {
        operationPreview.textContent = `${operand1} * ${operand2} ${operator}`;

        operand1 *= operand2;
      } else if (operationPreview.textContent.includes('/')) {
        operationPreview.textContent = `${operand1} / ${operand2} ${operator}`;

        operand1 /= operand2;
      } else if (operationPreview.textContent.includes('-')) {
        operationPreview.textContent = `${operand1} - ${operand2} ${operator}`;

        operand1 -= operand2;
      }

      valuePreview.textContent = operand1.toLocaleString(undefined, { maximumFractionDigits: 15 });

      numericBtnValues = ['0'];
    }

    if (cancel) {
      if (operationPreview.textContent.includes('=')) {
        numericBtnValues = ['0'];
        value = null;
        operand1 = null;
        operand2 = null;
        operator = null;
        valuePreview.textContent = numericBtnValues.join('');
        operationPreview.textContent = '';
      } else {
        numericBtnValues = ['0']; 
        valuePreview.textContent = numericBtnValues.join('');
      }
    }

    if (clear) {
      numericBtnValues = ['0'];
      value = null;
      operand1 = null;
      operand2 = null;
      operator = null;
      valuePreview.textContent = numericBtnValues.join('');
      operationPreview.textContent = '';
    }


    let correction = numericBtnValues[0].includes('-') 
      ?  1 : 0;
    

    if (numericBtnValues.length > lengthLimit) { 
      responsiveFontSize = Math.floor(staticFontSize * lengthLimit / numericBtnValues.length - correction) + 1;
      
      valuePreview.style.fontSize = `${responsiveFontSize}px`;

    } else if (String(value).split('').length > lengthLimit) {
      responsiveFontSize = Math.floor(staticFontSize * lengthLimit / String(value).split('').length) + 1;
      
      valuePreview.style.fontSize = `${responsiveFontSize}px`;

    } else if (String(operand1).split('').length > lengthLimit) {
      responsiveFontSize = Math.floor(staticFontSize * lengthLimit / String(operand1).split('').length) + 1;
      
      valuePreview.style.fontSize = `${responsiveFontSize}px`;

    } else {
      valuePreview.style.fontSize = `${staticFontSize}px`;
    }
  }
});