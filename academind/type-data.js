console.log('Your code goes here');
//Data Types
/* function add (n1, n2) {
   //JS reads n1 as a string and then adds n1 and n2 both as strings
   return n1+n2;
}

const number1 = '5';
const number2 = 2.8;

const result = add(number1, number2);
console.log(result); */
//In TS
//add a data type in the function definition using ':'
function add(n1, n2, showResult) {
    /*This is a purely JS function which can be used to validate input during runtime
    but typescript picks up the errors during development and creates more robust code */
    /*if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect Input');
    }*/
    //check if showResult is true
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return console.log(n1 * n2);
    }
}
//JS Uses dynamic types resolved at runtime whereas TS using static types set during development
//in JS and TS all numbers are floats by default so 5 is 5.0
var number1 = 5;
var number2 = 2.8;
var printResult = false;
add(number1, number2, printResult);
