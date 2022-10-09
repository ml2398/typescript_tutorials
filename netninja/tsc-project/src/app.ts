//import necessary files
import {invoice} from './classes/invoice.js'//import the JS file not TS file
import { listTemplate } from './classes/listTemplate.js';
import {payment} from './classes/payment.js'
import { hasFormatter } from "./interfaces/hasformatter.js";


//Interacting with DOM
const anchor = document.querySelector('a')!;
console.log(anchor.href);

//Accessing form
//accesses form by class, but what type? use typecasting
const form = document.querySelector('.new-item-form') as HTMLFormElement;


//Acessing data from form input fields by its id
const type = document.querySelector('#type') as HTMLSelectElement; //use # to indicate id
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new listTemplate(ul);


//Add an event listener to process the inputted data on submit
//callback function
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();//inbuit function to prevent default page refresh on submit

    //create a tuple to pass in data into invoice/payment objects
    let values: [string, string, number]; 
    values = [tofrom.value, details.value, amount.valueAsNumber];

    //Check whether entered data is an invoice or payment and store the data in 
    //an object of class payment or invoice, both using the hasformatter interface structure
    let doc: hasFormatter;
    if (type.value === 'invoice') {
        doc = new invoice(...values);// spread operator passes in values one at a time
    } else {
        doc = new payment(...values);
    };

    list.render(doc, type.value, 'end');

    //console.log(doc);

    /*
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber //By default value returns a string
    );
    */
});




















