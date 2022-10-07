 //Literals type
 //A TS only type which in which the type is the literal value of what is defined
  
const num = 2.5; //num is a literal

//Function accepts a third parameter to specify what type the result should be
function combine (n1: number | string , n2: number | string, resultConversion: 'as-number' | 'as-text') {
//result conversion is a literal
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    } else {
        result = n1.toString() + ' ' + n2.toString();
    };

    if (resultConversion === 'as-text') {
        result.toString();
    } else {
        +result; //converts valid input to a number, else returns NaN
    }
    
    console.log(result);
}; 

combine(5, 6, 'as-number');

combine('Michael', 'Lewis', 'as-text');

