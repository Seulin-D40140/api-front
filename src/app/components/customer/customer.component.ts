import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { CartService } from 'src/app/services/cart.service';


@Component(
{
	selector: 'app-customer',
	templateUrl: './customer.component.html',
	styleUrls: ['./customer.component.css']
})

/**
 * Composant de gestion d'un client en le récupérant directement s'il existe déjà via le service
 * le tout pouvant être modifié à l'aide d'un formulaire
 */
export class CustomerComponent implements OnInit 
{  
	myForm : FormGroup;

	constructor(public cartService : CartService, private router : Router , private formbuilder : FormBuilder) 
	{  
		let customer = this.cartService.getCustomer()
		this.myForm = this.formbuilder.group(
			{
				name: [customer.name , Validators.required],
				firstName: [customer.firstName , Validators.required],
				address: [customer.address , [Validators.required, Validators.minLength(25)]],
				phone: [customer.phone , [Validators.required, Validators.maxLength(10)]],
				email: [customer.email , [Validators.required , Validators.pattern('[a-z0-9.@]*')]]
			})
	}

	ngOnInit(): void {  }

	/**
	 * Méthode de validation du formulaire client en le sauvegardant dans le service
	 * avant de renvoyer vers le composant de gestion du récap de la commande
	 * @param customer 
	 */
	onSaveCustomer(form : FormGroup)
	{
		if(form.valid)
			{
				this.cartService.saveCustomer(new Customer(form.value.name , form.value.firstName , 
									form.value.address , form.value.phone , form.value.email))
			}
		this.router.navigateByUrl('order');
	}
}
