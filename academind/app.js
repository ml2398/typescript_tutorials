//TS has an 'unknown' type
var userInput;
var userName;
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
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
;
generateError('An error occurred!', 500);
