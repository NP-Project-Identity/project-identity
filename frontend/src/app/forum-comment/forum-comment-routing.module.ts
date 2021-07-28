import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumCommentPage } from './forum-comment.page';

const routes: Routes = [
  {
    path: '',
    component: ForumCommentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumCommentPageRoutingModule {}
