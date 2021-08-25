import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ComponentsModule} from '../components.module';
import {AchievementPageRoutingModule} from './achievement-routing.module';
import {AchievementPage} from './achievement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AchievementPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [AchievementPage],
})
export class AchievementPageModule {}
