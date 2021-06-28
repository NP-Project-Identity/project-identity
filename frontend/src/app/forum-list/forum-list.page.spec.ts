import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {ForumListPage} from './forum-list.page';

describe('ForumListPage', () => {
  let component: ForumListPage;
  let fixture: ComponentFixture<ForumListPage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ForumListPage],
        imports: [IonicModule.forRoot(), RouterModule.forRoot([])],
      }).compileComponents();

      fixture = TestBed.createComponent(ForumListPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }),
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
