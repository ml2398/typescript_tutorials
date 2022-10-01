//explicit types
var character;
var age;
var choice;
//age = 'luigi';
age = 30;
choice = true;
//arrays
var ninjas = [];
ninjas.push('Michael');
ninjas = ['hello', 'mario'];
//union types
var mixed = [];
mixed.push('hello');
mixed.push(2);
//mixed.push(true);
console.log(mixed);
var uid;
//objects
var ninjaOne;
ninjaOne = {
    name: 'Michael',
    age: 24
};
var ninjaTwo = {
    name: 'Michael',
    age: 24,
    choice: true
};
console.log(ninjaTwo);
