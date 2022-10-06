"use strict";
exports.__esModule = true;
exports.invoice = void 0;
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
exports.invoice = invoice;
;
