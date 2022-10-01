//Interacting with DOM
var anchor = document.querySelector('a');
//check if dom element exists without TS
// if (anchor) {
//     console.log(anchor.href); 
// };
console.log(anchor.href);
// TS contains special types for each DOM element
//Accessing form
//const form = document.querySelector('form')!; which form?
//accesses form by class, but what type? use typecasting
var form = document.querySelector('.new-item-form');
//console.log(form.children);
//Acessing data from form input fields by its id
var type = document.querySelector('#type'); //use # to indicate id
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
//Add an event listener to log out the inputted data on submit
//callback function
form.addEventListener('submit', function (e) {
    e.preventDefault(); //inbuit function to prevent default page refresh on submit
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber //By default value returns a string
    );
});
//Classes
//Create a class to store the inputted payment data 
var invoice = /** @class */ (function () {
    //create an invoice object based on class template
    function invoice(c, d, a) {
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
    invoice.prototype.format = function () {
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    ;
    return invoice;
}());
;
//Instantiate class and creat an object 
var invOne = new invoice('mario', 'work on website', 250);
var invTwo = new invoice('luigi', 'work on website', 300);
//create an array to store all invoices of type invoices only
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
//Cycle through each invoice object the invoices array
invoices.forEach(function (inv) {
    console.log(inv.client, inv.amount, inv.format());
});
//console.log(invoices);
