console.log('Your code goes here');

//Add an 'object type representation' to specifically assign data types to properties
//Better practice to let TS infer data type on its own 
const person:{
    name: string;
    age: number;
} = {
    name: 'Michael',
    age: 24
}

console.log(person.name);