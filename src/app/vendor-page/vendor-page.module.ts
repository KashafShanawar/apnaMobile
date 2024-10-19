import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './vendor/vendor.component';
import { VendorService } from './services/vendor.service';



@NgModule({
  declarations: [
    VendorComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [VendorService]
})
export class VendorPageModule { }
