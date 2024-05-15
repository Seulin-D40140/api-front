import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { ApiService } from './api.service';

@Injectable(
	{
		providedIn: 'root'
	})
export class UserService {

	isAdmin = false
	isConnected = false

	constructor(private apiservice : ApiService) { }


	getUser() : User
	{
	let user = localStorage.getItem('user');
	if(user)  return  JSON.parse(user);
	return new User("","",[""]);
	}

	saveUser(user : User) 
	{
	localStorage.setItem('user',JSON.stringify(user));
	}

	verifUserExist(user : User)
	{
		let users = this.apiservice.listUsers
		console.log(users)

		users?.forEach(u=> 
		{	
			if( u.name === user.name && u.password === user.password)
			{
				this.isConnected = true
			}
		})
	}

	deconnection()
	{
		this.isAdmin = false
		this.isConnected = false
	}
}
