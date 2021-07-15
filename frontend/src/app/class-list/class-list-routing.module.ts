import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClassListPage} from './class-list.page';


const routes: Routes = [
  {
    path: '',
    component: ClassListPage
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
        path: ':id',
        component: ClassListPage
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassListPageRoutingModule { }
