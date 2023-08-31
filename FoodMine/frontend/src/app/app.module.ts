import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule } from 'ng-starrating';
import {HttpClientModule,  HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { TagsComponent } from './components/tags/tags.component';
import { FoodPageComponent } from './components/food-page/food-page.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { TitleComponent } from './components/title/title.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputContainerComponent } from './components/input-container/input-container.component';
import { InputValidationComponent } from './components/input-validation/input-validation.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { DefaultButtonComponent } from './components/default-button/default-button.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { OrderItemsListComponent } from './components/order-items-list/order-items-list.component';
import { MapComponent } from './components/map/map.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { PaypalButtonComponent } from './components/paypal-button/paypal-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    TitleComponent,
    NotFoundComponent,
    LoginPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    RegisterPageComponent,
    LoadingComponent,
    CheckoutPageComponent,
    OrderItemsListComponent,
    MapComponent,
    PaymentPageComponent,
    PaypalButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RatingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
