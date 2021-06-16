import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TriumpsPage } from './triumps.page';

const routes: Routes = [
  {
    path: '',
    component: TriumpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TriumpsPageRoutingModule {}
