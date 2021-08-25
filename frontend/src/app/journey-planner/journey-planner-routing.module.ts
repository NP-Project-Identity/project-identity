import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JourneyPlannerCreatorPage} from './creator/journey-planner-creator.page';
import {JourneyPlannerPage} from './journey-planner.page';

const routes: Routes = [
  {
    path: 'new',
    component: JourneyPlannerCreatorPage,
  },
  {
    path: '',
    component: JourneyPlannerPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneyPlannerPageRoutingModule {}
