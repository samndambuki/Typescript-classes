//classes 
class Invoice{
    //objects
    //client,details,amount - properties
    client:string;
    details:string;
    amount:number;

    //to pass in values
    //c,d,a = values
    constructor(c:string,d:string,a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        //string which is formatting the properties
        return `${this.client} owes ${this.amount} for ${this.details} `
    }
}

//instantiate a class and create an object based on it
const invOne = new Invoice('mario','work on the mario website',250);
const invTwo = new Invoice('luigi','work on the luigi website',300);

console.log(invOne);
console.log(invTwo);

// let invoices:string[] = [];
let invoices:Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices)


invOne.client = 'YOSHI';
invTwo.amount = 500;
console.log(invOne,invTwo);


