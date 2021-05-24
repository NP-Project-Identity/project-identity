import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafeentryPageRoutingModule } from './safeentry-routing.module';

import { SafeentryCheckinPage } from './check-in.safeentry.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SafeentryPageRoutingModule
  ],
  declarations: [SafeentryCheckinPage],
  exports: [SafeentryCheckinPage]
})
export class SafeentryPageModule {}
