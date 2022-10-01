// function signature
//example1
var greeting;
greeting = function (name, greeting) {
    console.log("".concat(name, " says ").concat(greeting));
};
greeting('Luigi', 'hello');
//example2
var calc;
calc = function (num1, num2, action) {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
    ;
};
//example3
var logDetails;
logDetails = function (ninja) {
    console.log("".concat(ninja.name, " is ").concat(ninja.age, " years old"));
};
logDetails({ name: 'ninjo', age: 24 });
