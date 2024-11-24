// Import a local (built-in) module
const path = require('path');
//  Download and Import a third-party module
const colors = require('colors');
//  Custom module
const calculator = require('./calculator.js');

// Addition
let num1 = 10;
let num2 = 15;

// Substaraction
let num3 = 30;
let num4 = 20;

// Multiplication
let num5 = 40;
let num6 = 3;

// Division
let num7 = 400;
let num8 = 100;
let num9 = 2;
console.log(colors.blue('Current file:',path.basename(__filename)));
console.log(colors.red(calculator.add(num1, num2)));
console.log(colors.yellow(calculator.substract(num3, num4)));
console.log(colors.green(calculator.multiply(num5, num6)));
console.log(colors.white(calculator.division(num7, num8)));