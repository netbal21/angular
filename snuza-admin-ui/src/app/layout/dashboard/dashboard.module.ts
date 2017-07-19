import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { DashboardComponent } from './dashboard.component';
import {PageHeaderModule} from "../../shared/modules/page-header/page-header.module";
import {DashboardRoutingModule} from "./dashboard-routing.module";


@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        DashboardRoutingModule,
        PageHeaderModule

    ],
    declarations: [
        DashboardComponent,

    ]
})
export class DashboardModule { }
