import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-learningmgtplatform',
  templateUrl: './learningmgtplatform.page.html',
  styleUrls: ['./learningmgtplatform.page.scss'],
})
export class LearningmgtplatformPage implements OnInit {

  constructor(private router: Router) { }
  isSchoolShowing = true;

  ngOnInit() {
  }

  redirect(cat: string) {
    if (cat == "Forum") {
      this.router.navigate(['./forum/']);
    }
    else if (cat == "Class") {
      this.router.navigate(['./class/']);
    }
    else if (cat == "JourneyPlanner") {
      this.router.navigate(['./journey-planner/'])
    }
  }

}
