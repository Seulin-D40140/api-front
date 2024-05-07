import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CustomerComponent } from './components/customer/customer.component';
import { OrderComponent } from './components/order/order.component';
import { ConnetionComponent } from './components/connetion/connetion.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './components/admin.guard';
import { FormTrainingAdminComponent } from './components/form-training-admin/form-training-admin.component';

const routes: Routes = [
    { path : 'admin' , component : AdminComponent,
      canActivate : [AdminGuard]
    },
    { path : 'formadm' , component : FormTrainingAdminComponent,
      canActivate : [AdminGuard]
    },
    { path : 'trainings', component : TrainingsComponent },
    { path : 'admin' , component : AdminComponent},
    { path : 'connection', component : ConnetionComponent},
    { path : 'cart' , component : CartComponent },
    { path : 'order' , component : OrderComponent},
    { path : 'customer' , component : CustomerComponent},
    { path : 'formadm' , component : FormTrainingAdminComponent},
    
    { path : '' , redirectTo : 'trainings', pathMatch : 'full' },
    { path: '404', component: NotFoundComponent},
    { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
