import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from './../../shared';
import {HardwareComponent} from "./hardware.component";
import {HardwareRoutingModule} from "./hardware-routing.module";

@NgModule({
    imports: [
        CommonModule,
        HardwareRoutingModule,
        PageHeaderModule
    ],
    declarations: [HardwareComponent]
})
export class HardwareModule { }

