import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-hardware',
    templateUrl: './hardware.component.html',
    styleUrls: ['./hardware.component.scss'],
    animations: [routerTransition()]
})
export class HardwareComponent implements OnInit {
    constructor() { }

    ngOnInit() {

    }
}
