import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from 'src/app/model/commande';
import { Customer } from 'src/app/model/customer.model';
import { OrderTraining } from 'src/app/model/orderTraining';
import { Training } from 'src/app/model/training.model';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

/**
 * Composant de gestion du récapitulatif d'une commande + validation
 */
export class OrderComponent implements OnInit {
	dateOrder : Date = new Date();
	customer : Customer | undefined;
	constructor(public cartService : CartService, private router : Router , public apiService : ApiService) { }

	ngOnInit(): void {
    this.customer = this.cartService.getCustomer();
	}

	/**
	 * Méthode appelé en cas de validation d'une commande
	 * si user confirme alors l'appli est remise dans son état initial
	 */
	onOrder(){
		if(this.customer != null)
			{
				let commande : Commande = new Commande(this.cartService.getAmount() , this.customer);
				this.apiService.postOrder(commande);
				this.cartService.getCart()?.forEach((value , key) => {
					this.apiService.postOrderTraining(new OrderTraining(value.id , value.quantity , value.unprice , commande))
				})
			}
		console.log(this.cartService.getCustomer())
		if(confirm("Aujourd'hui c'est gratuit, merci de votre visite :)")){
			
			this.cartService.clearLocalStorage();
			this.router.navigateByUrl('');
		}
	}
}
