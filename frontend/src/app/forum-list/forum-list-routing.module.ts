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
        path: 'quiz',
        loadChildren: () =>
          import('../quiz/quiz.module').then(m => m.QuizPageModule),
      },
      {
        path: '-1',
        redirectTo: 'quiz',
        pathMatch: 'full',
      },
      {
        path: 'create',
        loadChildren: () =>
          import('../forum-create/forum-create.module').then(m => m.ForumCreatePageModule),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('../forum-content/forum-content.module').then(
            m => m.ForumContentPageModule,
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumListPageRoutingModule { }
