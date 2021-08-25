import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ComponentsModule} from '../components.module';
import {LearningmgtplatformPageRoutingModule} from './learningmgtplatform-routing.module';
import {LearningmgtplatformPage} from './learningmgtplatform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningmgtplatformPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [LearningmgtplatformPage],
})
export class LearningmgtplatformPageModule {}
