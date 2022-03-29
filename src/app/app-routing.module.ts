import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'newuser',component:NewUserComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) }, 
  { path: 'loans', loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule) },
  {path:"**",component:PageNotFoundComponent} 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
