//Classes
//Create a class to store the inputted payment data 
export class invoice {
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
};