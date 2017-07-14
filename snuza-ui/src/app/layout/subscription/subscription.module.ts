import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionComponentRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';

@NgModule({
  imports: [
    CommonModule,
      SubscriptionComponentRoutingModule
  ],
  declarations: [SubscriptionComponent]
})
export class SubscriptionModule { }
