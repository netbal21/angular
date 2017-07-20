import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from './../../shared';
import {TranslateModule} from "@ngx-translate/core";
import {PayGroupComponent} from "./payGroups.component";
import {PayGroupRoutingModule} from "./payGroups-routing.module";

@NgModule({
    imports: [
        CommonModule,
        PayGroupRoutingModule,
        TranslateModule.forRoot(),
        PageHeaderModule
    ],
    declarations: [PayGroupComponent]
})
export class PayGroupModule { }

