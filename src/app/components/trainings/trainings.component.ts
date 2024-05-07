import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/training.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Category } from 'src/app/model/Category.model';

@Component(
{
	selector: 'app-trainings',
	templateUrl: './trainings.component.html',
	styleUrls: ['./trainings.component.css']
})

/**
 * Composant de gestion des formations permettant l'affichage et l'ajout dans le panier de formation
 */
export class TrainingsComponent implements OnInit 
{
	listTrainings : Training[] | undefined; 
	listCategory : Category[] | undefined; 
	error = null

	constructor(private cartService : CartService, private router : Router , private apiservice : ApiService) {  }

	ngOnInit(): void 
	{        
		this.getAllTrainings()
		this.getAllCategory()
	}

	getAllTrainings()
	{
		this.apiservice.getTrainings().subscribe(
		{
		next : (data) => {this.listTrainings = data},
		error : (err) => {this.error = err.message},
		complete : () => {this.error = null}
		})
	}

	getAllCategory()
	{
		this.apiservice.getCategory().subscribe(
		{
		next : (data) => {this.listCategory = data},
		error : (err) => {this.error = err.message},
		complete : () => {this.error = null}
		})
	}

	findTrainingByCat(id:number)
	{
		this.apiservice.getTrainingByCategory(id).subscribe(
			{
			next : (data) => {this.listTrainings = data},
			error : (err) => {this.error = err.message},
			complete : () => {this.error = null}
			})
	}
	

/**
   * Méthode permettant l'ajout d'une formation au panier en utilisant le service dédié
   * @param training 
   */
	onAddToCart(training:Training)
	{
		if(training.quantity > 0) 
		{
			this.cartService.addTraining(training);
			this.router.navigateByUrl('cart');
		}
	}

	
}
