import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home-page/header/header.component';  
import { FooterComponent } from './home-page/footer/footer.component'; 
import { BannerComponent } from './home-page/banner/banner.component'; 
import { SignInComponent } from './home-page/sign-in/sign-in.component'; 
import { TrendingPhonesComponent } from './home-page/trending-phones/trending-phones.component';
import { SearchBarComponent } from './home-page/search-bar/search-bar.component';
import { VendorComponent } from './home-page/vendor/vendor.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  
    FooterComponent,
    BannerComponent,
    SignInComponent,
    TrendingPhonesComponent,
    SearchBarComponent,
    VendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
