import {NgModule}     from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AvatarFileUpload} from './uploadAvatar.component';

const routes: Routes = [
    { path: '', component: AvatarFileUpload }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FileUploadRoutingModule {}
