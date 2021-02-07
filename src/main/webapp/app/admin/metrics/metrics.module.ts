import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VereinsSponsorenSharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [VereinsSponsorenSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent],
})
export class MetricsModule {}
