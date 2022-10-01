//any type
let age: any;
age = 25;
age = true;
age = 'hello';

age = {
    name: 'luigi',
};

console.log(age);


let mixed: any[] = [];

mixed.push('hello');
mixed.push(1);
mixed.push(true);

console.log(mixed);

let ninja: {
    name: any;
    age: any;
} = {
    name: 'Michael',
    age: 'age'
    //interests: [sport],
};















