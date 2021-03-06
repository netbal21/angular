import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesInfoComponent } from "./devices-info.component";

const routes: Routes = [
    { path: '', component: DevicesInfoComponent }
];

@NgModule( {
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
} )
export class DeviceInfoComponentRoutingModule { }
