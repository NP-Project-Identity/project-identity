import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ComponentsModule} from '../components.module';
import {ClassPageRoutingModule} from './class-routing.module';
import {ClassPage} from './class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ClassPage],
})
export class ClassPageModule {}
