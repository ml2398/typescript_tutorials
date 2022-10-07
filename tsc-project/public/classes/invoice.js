//Classes
//Create a class to store the inputted payment data 
//All created classes must use hasFormatter interface
export class invoice {
    //create an invoice object based on class template
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    //Create a method for this class
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
    ;
}
;
