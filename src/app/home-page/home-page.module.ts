import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { BannerComponent } from './banner/banner.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TrendingPhonesComponent } from './trending-phones/trending-phones.component';
import { VendorComponent } from './vendor/vendor.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    MainComponent,
    BannerComponent,
    SearchBarComponent,
    TrendingPhonesComponent,
    VendorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
