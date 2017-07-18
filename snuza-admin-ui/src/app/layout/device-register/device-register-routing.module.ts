import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceRegisterComponent } from './device-register.component';

const routes: Routes = [
    { path: '', component: DeviceRegisterComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DeviceRegisterComponentRoutingModule { }
