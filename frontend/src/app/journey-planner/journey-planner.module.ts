import {CommonModule} from '@angular/common';
import {NgModule, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ComponentsModule} from '../components.module';
import {JourneyPlannerService} from '../services/journey-planner.service';
import {JourneyPlannerCreatorPage} from './creator/journey-planner-creator.page';
import {JourneyPlannerPageRoutingModule} from './journey-planner-routing.module';
import {JourneyPlannerPage} from './journey-planner.page';
import {JourneyPlan} from './models/journey-plan';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourneyPlannerPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [JourneyPlannerPage, JourneyPlannerCreatorPage],
})
export class JourneyPlannerPageModule implements OnInit {
  public completedJourneyPlans: number[] = [];

  constructor(private _journeyPlannerService: JourneyPlannerService) {}

  ngOnInit() {
    this._journeyPlannerService.addJourneyPlan(
      new JourneyPlan(
        0,
        'Web Development Fundamentals',
        'Study up on the basics of web development for HTML, CSS, and JavaScript.',
        [],
      ),
    );
  }

  removeJourneyPlan(id: number) {
    this._journeyPlannerService.removeJourneyPlan(id);
  }
}
