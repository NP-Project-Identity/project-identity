import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForumPage} from './forum.page';

const routes: Routes = [
  {
    path: '',
    component: ForumPage,
  },
  {
    path: '',
    children: [
      {
        path: ':id/:id',
        loadChildren: () =>
          import('../forum-list/forum-list.module').then(
            m => m.ForumListPageModule,
          ),
      },
      {
        path: ':id',
        redirectTo: '/forum',
        pathMatch: 'full',
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumPageRoutingModule {}
