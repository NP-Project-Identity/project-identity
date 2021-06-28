import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForumListPage} from './forum-list.page';

const routes: Routes = [
  {
    path: '',
    component: ForumListPage,
  },
  {
    path: '',
    children: [
      {
        path: 'create',
        component: ForumListPage /*WIP*/,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumListPageRoutingModule {}
