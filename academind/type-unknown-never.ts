//TS has an 'unknown' type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Michael';

//TS does not allow 'unknown' type variables to be assigned to
//type specific variables without pre-checking;
userName = userInput; 

//valid
if (typeof userInput === 'string') {
    userName = userInput;
}


//TS has a 'never' type in functions
//the script is broken to throw the error before the function completes so it will never return
//From code quality perspective, set return type never
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}; 
};

generateError('An error occurred!', 500);