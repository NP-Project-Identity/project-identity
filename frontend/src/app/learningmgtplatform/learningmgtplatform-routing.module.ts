import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LearningmgtplatformPage } from './learningmgtplatform.page';

const routes: Routes = [
  {
    path: '',
    component: LearningmgtplatformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningmgtplatformPageRoutingModule {}
