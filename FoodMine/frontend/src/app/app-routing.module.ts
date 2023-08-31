import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/gaurds/auth.guard';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { PaypalButtonComponent } from './components/paypal-button/paypal-button.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'food/:id' , component:FoodPageComponent},
  {path:'cart-page', component:CartPageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'paypal',component:PaypalButtonComponent},
  {path:'checkout',component:CheckoutPageComponent,canActivate:[AuthGuard]},
  {path:'payment',component:PaymentPageComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
