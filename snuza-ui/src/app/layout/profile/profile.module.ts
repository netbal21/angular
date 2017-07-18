import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { PageHeaderModule } from './../../shared';

import {FileUploadModule} from 'snuza-ui/../primeng/components/fileupload/fileupload';
import {GrowlModule} from 'snuza-ui/../primeng/components/growl/growl';
import {ButtonModule} from 'snuza-ui/../primeng/components/button/button';
import {TabViewModule} from 'snuza-ui/../primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'snuza-ui/../primeng/components/codehighlighter/codehighlighter';

import {
    ChangePasswordComponent,
    AvatarComponent,
    AvatarFileUpload
} from '../profile/components';
import { StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        PageHeaderModule,
        StatModule,
        FileUploadModule,
        GrowlModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
    ],
    declarations: [
        ProfileComponent,
        ChangePasswordComponent,

    ]
})
export class ProfileModule { }
