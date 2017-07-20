import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceInfoComponentRoutingModule } from './devices-info-routing.module';
import {DevicesInfoComponent} from "./devices-info.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forRoot(),
        DeviceInfoComponentRoutingModule
    ],
    declarations: [DevicesInfoComponent]
})
export class DeviceInfoModule { }
