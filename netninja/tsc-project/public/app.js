//import necessary files
import { invoice } from './classes/invoice.js'; //import the JS file not TS file
import { listTemplate } from './classes/listTemplate.js';
import { payment } from './classes/payment.js';
//Interacting with DOM
const anchor = document.querySelector('a');
console.log(anchor.href);
//Accessing form
//accesses form by class, but what type? use typecasting
const form = document.querySelector('.new-item-form');
//Acessing data from form input fields by its id
const type = document.querySelector('#type'); //use # to indicate id
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
//Add an event listener to process the inputted data on submit
//callback function
form.addEventListener('submit', (e) => {
    e.preventDefault(); //inbuit function to prevent default page refresh on submit
    //Check whether entered data is an invoice or payment and store the data in 
    //an object of class payment or invoice, both using the hasformatter interface structure
    let doc;
    if (type.value === 'invoice') {
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    ;
    list.render(doc, type.value, 'end');
    console.log(doc);
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber //By default value returns a string
    );
});
