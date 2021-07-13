import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClassPage} from './class.page';


const routes: Routes = [
  {
    path: '',
    component: ClassPage
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../class-list/class-list.module').then(
        m => m.ClassListPageModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassPageRoutingModule { }
