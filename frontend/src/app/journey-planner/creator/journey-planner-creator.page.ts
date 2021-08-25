import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {JourneyPlannerService} from 'src/app/services/journey-planner.service';
import {JourneyPlan} from '../models/journey-plan';

@Component({
  selector: 'app-journeyplannercreatorpage',
  templateUrl: './journey-planner-creator.page.html',
  styleUrls: ['./journey-planner-creator.page.scss'],
})
export class JourneyPlannerCreatorPage {
  journeyPlanModel = new JourneyPlan(0, 'New Journey Plan', '', []);

  constructor(
    private _journeyPlannerService: JourneyPlannerService,
    private _navController: NavController,
  ) { }

  onSubmit() {
    this._journeyPlannerService.addJourneyPlan(this.journeyPlanModel);
    this._navController.back();
  }
}
