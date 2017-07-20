import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PageHeaderModule } from './../../shared';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        TranslateModule.forRoot(),
        PageHeaderModule
    ],
    declarations: [AdminComponent]
})
export class AdminModule { }

