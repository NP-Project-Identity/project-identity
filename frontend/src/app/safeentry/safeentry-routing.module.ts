import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SafeentryCheckinPage} from './check-in/check-in.safeentry.page';
import {SafeentryHistoryPage} from './history/history.safeentry.page';
import {SafeentryPage} from './safeentry.page';

const routes: Routes = [
  {
    path: '',
    component: SafeentryPage,
  },
  {
    path: 'check-in/:venueId',
    component: SafeentryCheckinPage,
  },
  {
    path: 'check-in/:venueId/:tenantId',
    component: SafeentryCheckinPage,
  },
  {
    path: 'history',
    component: SafeentryHistoryPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafeentryPageRoutingModule {}
