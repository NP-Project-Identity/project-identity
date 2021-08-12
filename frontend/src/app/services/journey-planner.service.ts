import {Injectable} from '@angular/core';
import {JourneyPlan} from '../journey-planner/models/journey-plan';

@Injectable({
  providedIn: 'root'
})
export class JourneyPlannerService {

  constructor() {
    this._journeyPlannerDB = [];
  }

  private _journeyPlannerDB: JourneyPlan[]

  getJourneyPlans(): ReadonlyArray<JourneyPlan> {
    return this._journeyPlannerDB;
  }

  addJourneyPlan(journeyPlan: JourneyPlan) {
    console.log('Adding plan: ', journeyPlan);
    this._journeyPlannerDB.push(
      Object.assign(
        {},
        journeyPlan,
        {
          id: this._journeyPlannerDB.length ? this._journeyPlannerDB.length : 0,
        },
      )
    );
    console.log('Plan list:', this._journeyPlannerDB)
  }

  removeJourneyPlan(id: number) {
    this._journeyPlannerDB.splice(
      this._journeyPlannerDB.findIndex(v => v.id === v.id),
      0,
    );
  }
}
