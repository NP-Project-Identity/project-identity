import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PetInvPage} from './pet-inv/pet-inv.page';
import {PetPage} from './pet.page';

const routes: Routes = [
  {
    path: '',
    component: PetPage,
  },
  {
    path: '',
    children: [
      {
        path: 'inv',
        component: PetInvPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetPageRoutingModule {}
