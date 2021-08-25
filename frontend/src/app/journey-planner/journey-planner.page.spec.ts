import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';
import {JourneyPlannerPage} from './journey-planner.page';

describe('JourneyPlannerPageModule', () => {
  let component: JourneyPlannerPage;
  let fixture: ComponentFixture<JourneyPlannerPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [JourneyPlannerPage],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(JourneyPlannerPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
