import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearningmgtplatformPageRoutingModule } from './learningmgtplatform-routing.module';

import { LearningmgtplatformPage } from './learningmgtplatform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearningmgtplatformPageRoutingModule
  ],
  declarations: [LearningmgtplatformPage]
})
export class LearningmgtplatformPageModule {}
