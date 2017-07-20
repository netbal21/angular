import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PayGroupComponent} from "./payGroups.component";

const routes: Routes = [
    { path: '', component: PayGroupComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayGroupRoutingModule { }
