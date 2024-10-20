import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './home-page/sign-in/sign-in.component';
import { VendorComponent } from './vendor-page/vendor/vendor.component';
import { MobileComponent } from './mobile-page/mobile/mobile.component';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'vendor/:vendorName', component: VendorComponent },
  { path: 'mobile/:id', component: MobileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
