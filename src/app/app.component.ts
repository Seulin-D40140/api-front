import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public usersevice : UserService , private apiservice : ApiService) {  }
  title = 'trainings-front-app';

  resetAddBool()
	{
    this.apiservice.getTrainings()
	  this.apiservice.addBool = false
	}
}
