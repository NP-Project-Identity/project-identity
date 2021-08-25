import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LearningmgtplatformPage} from './learningmgtplatform.page';

const routes: Routes = [
  {
    path: '',
    component: LearningmgtplatformPage,
  },
  {
    path: 'forum',
    redirectTo: '/forum',
    pathMatch: 'full',
  },
  {
    path: 'class',
    redirectTo: '/class',
    pathMatch: 'full',
  },
  {
    path: 'journey-planner',
    redirectTo: '/journey-planner',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LearningmgtplatformPageRoutingModule {}
