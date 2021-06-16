import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TriumpsPageRoutingModule } from './triumps-routing.module';

import { TriumpsPage } from './triumps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TriumpsPageRoutingModule
  ],
  declarations: [TriumpsPage]
})
export class TriumpsPageModule {}
