import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceInfoComponentRoutingModule } from './devices-info-routing.module';
import {DevicesInfoComponent} from "./devices-info.component";

@NgModule({
    imports: [
        CommonModule,
        DeviceInfoComponentRoutingModule
    ],
    declarations: [DevicesInfoComponent]
})
export class DeviceInfoModule { }
