import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DeviceRegisterComponentRoutingModule} from './device-register-routing.module';
import {DeviceRegisterComponent} from './device-register.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule.forRoot(),
        DeviceRegisterComponentRoutingModule
    ],
    declarations: [DeviceRegisterComponent]
})
export class DeviceRegisterModule {
}
