import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './home-page/header/header.component';  
import { FooterComponent } from './home-page/footer/footer.component'; 
import { BannerComponent } from './home-page/banner/banner.component'; 
import { SignInComponent } from './home-page/sign-in/sign-in.component'; 
import { TrendingPhonesComponent } from './home-page/trending-phones/trending-phones.component';
import { SearchBarComponent } from './home-page/search-bar/search-bar.component';
import { BrandComponent} from './home-page/brand/brands.component';
import { VendorComponent } from './vendor-page/vendor/vendor.component';
import { HttpClientModule } from '@angular/common/http';
import { VendorService } from './vendor-page/services/vendor.service';
import { MobilePageModule } from './mobile-page/mobile-page.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  
    FooterComponent,
    BannerComponent,
    SignInComponent,
    TrendingPhonesComponent,
    SearchBarComponent,
    BrandComponent,
    VendorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MobilePageModule
  ],
  providers: [VendorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
