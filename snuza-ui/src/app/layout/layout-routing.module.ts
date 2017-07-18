import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'device-register', loadChildren: './device-register/device-register.module#DeviceRegisterModule' },
            { path: 'devices-info', loadChildren: './devices-info/devices-info.module#DeviceInfoModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'avatar', loadChildren: './profile/components/uploadAvatar/uploadAvatar.module#AvatarUploadModule' },
            { path: 'changePass', loadChildren: './profile/components/changePassword/changePassword.module#ChangePasswordModule' },
        ]
    }
];

@NgModule( {
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
} )
export class LayoutRoutingModule { }
