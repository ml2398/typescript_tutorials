//Classes
//Create a class to store the inputted payment data 
//All created classes must use hasFormatter interface
export class payment {
    //create an invoice object based on class template
    constructor(c, d, a) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    //Create a method for this class
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
    ;
}
;
