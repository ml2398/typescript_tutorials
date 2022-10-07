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
//Becomes just like a JS value with no specific type
//Not recommended since negates all TS benefits
let favActivity: any[];
let anyVar = any;
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

//.push() function is the only excception and still works with tuples
person2.role.push('sportsplayer');

for (const role of person2.role) {
    console.log(role);
}

//Enums
//Enums is TS only
//Enums short for enumerate and assign labels to numbers
//Great for cases needing a readable label with an assigned value
enum Role {ADMIN, READ_ONLY, AUTHOR};

//ADMIN = 0, READ_ONLY = 1, AUTHOR = 2
//Can assign your own values to each label, even strings

const person3 = {
    name: 'Michael',
    age: 24,
    hobbies: ['Sports', 'Coding'], //array of strings data type
    role: Role.ADMIN
};

for (const role of person3.role) {
    console.log(role);
}

if (person3.role === Role.ADMIN) {
    console.log('enum works');
}

