import { Component, OnInit } from '@angular/core';
import { Traininadd } from 'src/app/model/traininadd.model';
import { Training } from 'src/app/model/training.model';
import { User } from 'src/app/model/user';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component(
{
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit 
{
	
	newTraining : Training = new Training( 0,"","",0,0)
	listTrainingsAdmin : Training[] | undefined;  
	error = null

	constructor( public apiservice : ApiService , public cartservice : CartService) { }

	ngOnInit(): void 
	{
	this.getAllTrainingsAdmin()
	}

	getAllTrainingsAdmin()
	{
		this.apiservice.getTrainings().subscribe(
		{
			next : (data) => {this.listTrainingsAdmin = data},
			error : (err) => {this.error = err.message},
			complete : () => {this.error = null}
		})
	}

	deleteTrainings(id : number)
	{
		this.apiservice.deleteTrainingAdmin(id).subscribe(
		{
			next : () => {this.getAllTrainingsAdmin()},
			error : (err) => {this.error = err.message},
			complete : () => {this.error = null}
		})
	}

	isAdd()
	{
		this.apiservice.addBool = true
	}

	recupIdTraining(training : Training)
	{
		this.apiservice.trainingmodif = training
	}
}
