import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { MobileComponent } from './mobile/mobile.component';
import { MobileService } from './services/mobile.service';

@NgModule({
  declarations: [
    MobileComponent 
  ],
  imports: [
    CommonModule 
  ],
providers: [MobileService]
})
export class MobilePageModule {}

