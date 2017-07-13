import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlankPageComponent } from './device-register.component';

const routes: Routes = [
    { path: '', component: BlankPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlankPageRoutingModule { }
