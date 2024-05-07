import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , FormBuilder, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component(
	{
		selector: 'app-connetion',
		templateUrl: './connetion.component.html',
		styleUrls: ['./connetion.component.css']
	})
	
export class ConnetionComponent implements OnInit {

	error = null
	myForm : FormGroup;

	constructor(public userservice : UserService , private router : Router ,
				private apiservice : ApiService ,  private formbuilder : FormBuilder,
				private cartservice : CartService) 
	{  
		let user = this.userservice.getUser()
		this.myForm = this.formbuilder.group(
			{
				password: [user.password , Validators.required],
				email: [user.email , [Validators.required , Validators.pattern('[a-z0-9.@]*')]]
			})
	}

	ngOnInit( ): void 
	{
		this.getAllUsers()
	}

	

	onSaveUser(form : FormGroup)
	{
		this.userservice.verifUserExist(new User(form.value.email , form.value.password , [""]))
		if(this.userservice.isConnected)
		{
			this.router.navigateByUrl(this.isCartEmpty());
		}
		if(form.valid)
		{
			this.userservice.saveUser(new User(form.value.email , form.value.password , [""]))
		}
	}

	getAllUsers()
	{
		this.apiservice.getUsers().subscribe(
		{
		next : (data) => {this.apiservice.listUsers = data},
		error : (err) => {this.error = err.message},
		complete : () => {this.error = null}
		})
	}

	isCartEmpty()
	{
		let route : string = "trainings"
		if( this.cartservice.getcart2().size > 0)
		{
			route = "cart"
		}
		return route
	}
}
