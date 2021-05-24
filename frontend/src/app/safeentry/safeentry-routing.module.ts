import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SafeentryCheckinPage } from './check-in.safeentry.page';

const routes: Routes = [
  {
    path: 'check-in/:venueId',
    component: SafeentryCheckinPage,
  },
  {
    path: 'check-in/:venueId/:tenantId',
    component: SafeentryCheckinPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafeentryPageRoutingModule {}
