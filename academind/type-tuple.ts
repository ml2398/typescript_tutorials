console.log('Your code goes here');

//Add an 'object type representation' to specifically assign data types to properties
//Better practice to let TS infer data type on its own 
const person: {
    name: string;
    age: number;
    hobbies: string[];
} = {
    name: 'Michael',
    age: 24,
    hobbies: ['Sports', 'Coding'] //array of strings data type
}

console.log(person.name);

//loop through each hobby in person object
for (const hobby of person.hobbies) {
    console.log(hobby);
    console.log(hobby.toUpperCase()); // no error as hobby is of type string
    //console.log(hobby.map()); //error since 'map' does not work on strings
}

//arrays with multiple data types
let favActivity: any[];
favActivity = ['Sports', 1];

//Tuple is a TS only data type which is an array with set types and length
const person2: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];//Tuple type assignment
} = {
    name: 'Michael',
    age: 24,
    hobbies: ['Sports', 'Coding'], //array of strings data type
    role: [2, 'student']
}

for (const role of person2.role) {
    console.log(role);
}

//.push() function is the only exception and still works with tuples
person2.role.push('sportsplayer');

for (const role of person2.role) {
    console.log(role);
}





