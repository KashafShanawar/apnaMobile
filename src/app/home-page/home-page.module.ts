import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { BannerComponent } from './banner/banner.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TrendingPhonesComponent } from './trending-phones/trending-phones.component';
import { BrandComponent } from './brand/brands.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    MainComponent,
    BannerComponent,
    SearchBarComponent,
    TrendingPhonesComponent,
    BrandComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomePageModule { }
