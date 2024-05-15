import { Customer } from "./customer.model";

export class Commande {
    amount : number;
    customer : Customer;

    constructor(amount : number , customer : Customer){
        this.customer = customer;
        this.amount = amount;
    }
}