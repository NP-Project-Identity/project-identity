import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetInvPage } from './pet-inv.page';

const routes: Routes = [
  {
    path: '',
    component: PetInvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetInvPageRoutingModule {}
