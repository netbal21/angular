import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from './../../shared';
import {FirmwareComponent} from "./firmware.component";
import {FirmwareRoutingModule} from "./firmware-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FirmwareRoutingModule,
        PageHeaderModule
    ],
    declarations: [FirmwareComponent]
})
export class FirmwareModule { }

