// script.js
// const display = document.getElementById("display");

// function appendToDisplay(input){
//     display.value += input;
// }
// function clearDisplay(){
//     display.value = "";
// }
// function deleteChar(){
//     display.value = display.value.slice(0 , -1);
// }
// function calculate(){
//     try{
//         display.value = eval(display.value);
//     }
//     catch(error){
//         display.value = "Error";
//     }
// }



// let display = document.getElementById("display");

// function appendNumber(number) {
//   display.value += number;
// }

// function appendOperator(operator) {
//   if (operator === 'sqrt') {
//     display.value += 'Math.sqrt(';
//   } else if (operator === 'pi') {
//     display.value += Math.PI;
//   } else if (operator === 'e') {
//     display.value += Math.E;
//   } else if (operator === 'sin') {
//     display.value += 'Math.sin(';
//   } else if (operator === 'cos') {
//     display.value += 'Math.cos(';
//   } else if (operator === 'tan') {
//     display.value += 'Math.tan(';
//   } else if (operator === 'ln') {
//     display.value += 'Math.log(';
//   } else if (operator === 'log') {
//     display.value += 'Math.log10(';
//   } else if (operator === '^') {
//     display.value += '**';
//   } else {
//     display.value += operator;
//   }
// }

// function clearDisplay() {
//   display.value = '';
// }

// function deleteChar() {
//   display.value = display.value.slice(0, -1);
// }

// function calculate() {
//   try {
//     display.value = eval(display.value);
//   } catch (e) {
//     display.value = "Error";
//   }
// }




const display = document.getElementById("display");

function appendNumber(number) {
  display.value += number;
}

function appendOperator(operator) {
  if (operator === 'sqrt') {
    appendFunction('Math.sqrt');
  } else if (operator === 'pi') {
    appendConstant(Math.PI);
  } else if (operator === 'e') {
    appendConstant(Math.E);
  } else if (operator === 'sin') {
    appendFunction('Math.sin');
  } else if (operator === 'cos') {
    appendFunction('Math.cos');
  } else if (operator === 'tan') {
    appendFunction('Math.tan');
  } else if (operator === 'ln') {
    appendFunction('Math.log');
  } else if (operator === 'log') {
    appendFunction('Math.log10');
  } else if (operator === '^') {
    appendPowerOperator();
  } else {
    display.value += operator;
  }
}

function appendFunction(func) {
  display.value += func;
}

function appendConstant(constant) {
    display.value += constant;
  }

function appendPowerOperator() {
  display.value += '**';
}

function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(display.value);
    if (isFinite(result)) {
      display.value = result;
    } else {
      throw new Error('Math Error');
    }
  } catch (error) {
    display.value = 'Error';
  }
}



