// main.js
const factorial = require('./utils.js');

const number = 5; // Change this number to calculate the factorial of a different number
try {
    const result = factorial(number);
    console.log(`The factorial of ${number} is ${result}`);
} catch (error) {
    console.error(error.message);
}
