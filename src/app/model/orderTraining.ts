import { Commande } from "./commande";

export class OrderTraining {
    id : number;
    quantity : number;
    unitaryPrice : number;
    commande : Commande;

    constructor(id:number , quantity:number , unitaryPrice:number , commande:Commande) {
        this.id = id;
        this.quantity = quantity;
        this.unitaryPrice = unitaryPrice;
        this.commande = commande;
    }
};