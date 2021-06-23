import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {SafeentryCheckinPage} from './check-in/check-in.safeentry.page';
import {SafeentryPageRoutingModule} from './safeentry-routing.module';
import {SafeentryPage} from './safeentry.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SafeentryPageRoutingModule
  ],
  declarations: [SafeentryCheckinPage, SafeentryPage]
})
export class SafeentryPageModule {}
