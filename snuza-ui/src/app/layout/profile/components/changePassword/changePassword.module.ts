import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChangePasswordComponent} from "./changePassword.component";
import {ChangePasswordRoutingModule} from "./changePassword-routing.module";



@NgModule({
    imports: [
        CommonModule,
        ChangePasswordRoutingModule
    ],
    declarations: [ChangePasswordComponent]
})
export class ChangePasswordModule { }
