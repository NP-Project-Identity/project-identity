import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PetPage} from './pet.page';


const routes: Routes = [
  {
    path: '',
    component: PetPage
  },
  {
    path: '',
    children: [
      {
        path: 'inv',
        loadChildren: () =>
          import('../pet-inv/pet-inv.module').then(m => m.PetInvPageModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetPageRoutingModule { }
