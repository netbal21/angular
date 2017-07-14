import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRegisterComponentRoutingModule } from './device-register-routing.module';
import { DeviceRegisterComponent } from './device-register.component';

@NgModule({
  imports: [
    CommonModule,
    DeviceRegisterComponentRoutingModule
  ],
  declarations: [DeviceRegisterComponent]
})
export class DeviceRegisterModule { }
