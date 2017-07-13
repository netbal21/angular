import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './device-register-routing.module';
import { BlankPageComponent } from './device-register.component';

@NgModule({
  imports: [
    CommonModule,
    BlankPageRoutingModule
  ],
  declarations: [BlankPageComponent]
})
export class BlankPageModule { }
