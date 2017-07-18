import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarFileUpload} from './uploadAvatar.component';
import {FileUploadRoutingModule} from './uploadAvatar-routing.module';
import {FileUploadModule} from 'snuza-ui/../primeng/components/fileupload/fileupload';
import {GrowlModule} from 'snuza-ui/../primeng/components/growl/growl';
import {ButtonModule} from 'snuza-ui/../primeng/components/button/button';
import {TabViewModule} from 'snuza-ui/../primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'snuza-ui/../primeng/components/codehighlighter/codehighlighter';

@NgModule({
    imports: [
        CommonModule,
        FileUploadRoutingModule,
       FileUploadModule,
        GrowlModule,
        ButtonModule,
        TabViewModule,
        CodeHighlighterModule
    ],
    declarations: [
        AvatarFileUpload
    ]
})
export class AvatarUploadModule {}
