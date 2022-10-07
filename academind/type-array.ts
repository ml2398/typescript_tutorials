console.log('Your code goes here');

//Add an 'object type representation' to specifically assign data types to properties
//Better practice to let TS infer data type on its own 
const person =  {
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


