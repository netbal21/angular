import {Component} from '@angular/core';
import {Message} from 'snuza-ui/../primeng/components/common/api';

@Component({
    selector: 'app-uploadavatar',
    templateUrl: './uploadAvatar.html'
})
export class AvatarFileUpload {

    msgs: Message[];

    uploadedFiles: any[] = [];

    onUpload(event) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    /*onBasicUpload(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    }

    onBasicUploadAuto(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
    }*/
}
