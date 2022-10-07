//import interface from 'hasformatter' file
import { hasFormatter } from "../interfaces/hasformatter.js";


//Classes
//Create a class to store the inputted payment data 
//All created classes must use hasFormatter interface
export class payment implements hasFormatter {
    readonly recipient: string;
    private details: string;
    public amount: number;

    //create an invoice object based on class template
    constructor(c: string, d: string, a:number) {
        
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }

    //Create a method for this class
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    };
};