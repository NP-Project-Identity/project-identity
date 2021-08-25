import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {LearningmgtplatformPage} from './learningmgtplatform.page';

describe('LearningmgtplatformPage', () => {
  let component: LearningmgtplatformPage;
  let fixture: ComponentFixture<LearningmgtplatformPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LearningmgtplatformPage],
        imports: [IonicModule.forRoot()],
      }).compileComponents();

      fixture = TestBed.createComponent(LearningmgtplatformPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
