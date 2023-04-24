"use strict";
//classes 
class Invoice {
    //objects
    //client,details,amount - properties
    //read it from outside and inside the class but we cant change it
    // readonly client:string;
    //private - cant access this property outside the class itself
    // private details:string;
    // public amount:number;
    //to pass in values
    //c,d,a = values
    // constructor(c:string,d:string,a:number){
    //     // this.client = c;
    //     // this.details = d;
    //     // this.amount = a;
    // }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        //string which is formatting the properties
        //this.details - access private property
        return `${this.client} owes ${this.amount} for ${this.details} `;
    }
}
//instantiate a class and create an object based on it
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// console.log(invOne);
// console.log(invTwo);
// let invoices:string[] = [];
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invoices)
// invOne.client = 'YOSHI';
// invTwo.amount = 500;
console.log(invOne, invTwo);
invoices.forEach(inv => {
    //error - beacuse it is readonly
    // inv.cleint = 'something else'
    console.log(inv.client, inv.amount, inv.format());
});
//classes -all properties are public by default
//acess modifier - modify how a user could access those properties
//public - change and read value inside and outside the class
//private  change and read inside the class
//readonly - read it inside and outside the class but not change value
