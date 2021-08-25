import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ForumCommentPage} from './forum-comment/forum-comment.page';
import {ForumContentPage} from './forum-content.page';

const routes: Routes = [
  {
    path: '',
    component: ForumContentPage,
  },
  {
    path: '',
    children: [
      {
        path: 'comment',
        component: ForumCommentPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumContentPageRoutingModule {}
