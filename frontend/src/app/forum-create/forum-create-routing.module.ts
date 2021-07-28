import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForumCreatePage} from './forum-create.page';


const routes: Routes = [
  {
    path: '',
    component: ForumCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumCreatePageRoutingModule { }
