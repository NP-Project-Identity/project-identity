import {JourneyPlanStep} from './journey-plan-step';

export class JourneyPlan {
  public completionPercentage: number;

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public steps: JourneyPlanStep[],
  ) {
    let completedCount = 0;
    let totalCount = 0;

    for (const step of this.steps) {
      if (step.completed) completedCount++;

      totalCount++;
    }

    if (!steps.length) this.completionPercentage = 0;
    else
      this.completionPercentage = Math.floor(
        (completedCount / totalCount) * 100,
      );
  }
}
