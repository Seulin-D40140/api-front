import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Training } from '../model/training.model';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { Traininadd } from '../model/traininadd.model';
import { Category } from '../model/Category.model';
import { Customer } from '../model/customer.model';
import { Observable, catchError } from 'rxjs';
import { Commande } from '../model/commande';
import { OrderTraining } from '../model/orderTraining';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  trainingmodif : Training = new Training ( 0 ,"" , "" , 0 , 1)
  addBool = false
  listUsers : User[] | undefined;
  
  constructor(private http:HttpClient) { }

  public getTrainings()
  {
    return this.http.get<Training[]>(environment.host+"/trainings")
  }

  public getTraining( id : number)
  {
    return this.http.get<Training>(environment.host+"/trainings/"+id)
  }

  public getUsers()
  { 
    return this.http.get<User[]>(environment.host+"/users")
  }

  public deleteTrainingAdmin(id : number)
  {
    return this.http.delete<Training>(environment.host+"/trainings/"+id)
  }

  public addTrainingAdmin(training : Traininadd)
  {
    return this.http.post<Training>(environment.host+"/trainings" ,training)
  }

  public modifTrainingAdmin(id : number , training : Training)
  {
    return this.http.put<Training>(environment.host+"/trainings/"+id , training)
  }
  
  public getCategory()
  {
    return this.http.get<Category[]>(environment.host+"/categories")
  }

  public getTrainingByCategory(idcat : number)
  {
    return this.http.get<Training[]>(environment.host+"/trainingsCat/"+idcat)
  }

  public postCustomer(customer : Customer)
  { 
    this.http.post<Customer>(environment.host+"/customer" , customer).subscribe();
  }

  public postOrder( commande : Commande)
  {
    this.http.post<Commande>(environment.host+"/order" , commande).subscribe();
  }

  public postOrderTraining ( orderTraining : OrderTraining)
  {
    this.http.post<OrderTraining>(environment.host+"/orderTraining" , orderTraining).subscribe();
  }
}
