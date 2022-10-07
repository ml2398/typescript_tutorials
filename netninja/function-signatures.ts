// function signature
//example1
let greeting: (a: string, b: string) => void;
greeting = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
};

greeting('Luigi', 'hello');

//example2
let calc: (a:number, b:number, c: string) => number;
 calc = (num1: number, num2: number, action: string) => {
    if (action === 'add') {
        return num1 + num2;
    } else {
        return num1 - num2;
    };
 };

//example3
let logDetails: (obj: {name: string, age: number}) => void;

//type alias
type person = {name: string, age: number};

logDetails = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};

logDetails({name: 'ninjo', age: 24});





