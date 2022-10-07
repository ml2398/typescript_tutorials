//Interfaces
//Interaces set out the structure of objects defined in the future as an inPerson type
interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
};

const me: isPerson = {
    name: 'Max',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log('I spent', amount);
        return amount;
    }
};

import {invoice} from './invoice.js'//import the JS file not TS file

//Interacting with DOM
const anchor = document.querySelector('a')!;

//check if dom element exists without TS
// if (anchor) {
//     console.log(anchor.href); 
// };

console.log(anchor.href);
// TS contains special types for each DOM element

//Accessing form
//const form = document.querySelector('form')!; which form?

//accesses form by class, but what type? use typecasting
const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

//Acessing data from form input fields by its id
const type = document.querySelector('#type') as HTMLSelectElement; //use # to indicate id
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//Add an event listener to log out the inputted data on submit
//callback function
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();//inbuit function to prevent default page refresh on submit

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber //By default value returns a string
    );
});

//Classes
//Create a class to store the inputted payment data 
/*class invoice {
    //Access modifiers
    //By default, class properties and public
    readonly client: string;//Can't modify outside or inside class 
    private details: string;//Can't be accessed outside class
    public amount: number;

    //create an invoice object based on class template
    constructor(c: string, d: string, a:number) {
        //this refers to the object instance created by the constructor 
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    //Can set type and create constructor all in one using the below code
    //Only works if access modifiers are given
    //When creating a new instace the values are assigned to the properties
    // constructor (
    //     readonly clients: string,
    //     private details: string,
    //     public amount: number,
    // ) {};

    //Create a method for this class
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    };
};*/

//Instantiate class and creat an object 
const invOne = new invoice('mario', 'work on website', 250);
const invTwo = new invoice('luigi', 'work on website', 300);

//create an array to store all invoices of type invoices only
let invoices: invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

//Cycle through each invoice object the invoices array
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});

//console.log(invoices);









