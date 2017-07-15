import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PageHeaderModule } from './../../shared';

import {
    ChangePasswordComponent,
    AvatarComponent
} from '../profile/components';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        PageHeaderModule,
        StatModule
    ],
    declarations: [
        ProfileComponent,
        ChangePasswordComponent,
        AvatarComponent
    ]
})
export class ProfileModule { }
