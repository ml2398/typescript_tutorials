//explicit types
let character: string; 
let age: number;
let choice: boolean;

//age = 'luigi';
age = 30;
choice = true;

//arrays
let ninjas: string[] = [];
ninjas.push('Michael');
ninjas = ['hello', 'mario'];

//union types
let mixed: (string|number)[] = [];

mixed.push('hello');
mixed.push(2);
//mixed.push(true);
console.log(mixed);

let uid: string|number;

//objects
let ninjaOne: object;
ninjaOne = {
    name: 'Michael',
    age: 24
};

let ninjaTwo: {
    name: string;
    age: number;
    choice: boolean;
} = {
    name: 'Michael',    
    age: 24,
    choice: true
};

console.log(ninjaTwo);

















