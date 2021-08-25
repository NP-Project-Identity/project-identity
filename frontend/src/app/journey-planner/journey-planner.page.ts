import {Component} from '@angular/core';
import {JourneyPlannerService} from '../services/journey-planner.service';
import {JourneyPlan} from './models/journey-plan';

@Component({
  selector: 'app-journeyplanner',
  templateUrl: './journey-planner.page.html',
  styleUrls: ['./journey-planner.page.scss'],
})
export class JourneyPlannerPage {
  public journeyPlans: ReadonlyArray<JourneyPlan> = [];

  constructor(private _journeyPlannerService: JourneyPlannerService) {}

  ionViewWillEnter() {
    this.journeyPlans = this._journeyPlannerService.getJourneyPlans() ?? [];
  }
}
