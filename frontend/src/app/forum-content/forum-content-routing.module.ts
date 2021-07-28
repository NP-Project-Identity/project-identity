import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForumContentPage} from './forum-content.page';


const routes: Routes = [
  {
    path: '',
    component: ForumContentPage
  },
  {
    path: '',
    children: [
      {
        path: 'comment',
        loadChildren: () =>
          import('../forum-comment/forum-comment.module').then(m => m.ForumCommentPageModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumContentPageRoutingModule { }
