import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-firmware',
    templateUrl: './firmware.component.html',
    styleUrls: ['./firmware.component.scss'],
    animations: [routerTransition()]
})
export class FirmwareComponent implements OnInit {
    constructor() { }

    ngOnInit() {

    }
}
