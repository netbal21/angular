import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-payGroups',
    templateUrl: './payGroups.component.html',
    styleUrls: ['./payGroups.component.scss'],
    animations: [routerTransition()]
})
export class PayGroupComponent implements OnInit {
    constructor() { }

    ngOnInit() {

    }
}
