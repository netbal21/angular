import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirmwareComponent} from "./firmware.component";


const routes: Routes = [
    { path: '', component: FirmwareComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirmwareRoutingModule { }
