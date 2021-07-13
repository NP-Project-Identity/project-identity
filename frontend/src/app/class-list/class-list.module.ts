import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ComponentsModule} from '../components.module';
import {ClassListPageRoutingModule} from './class-list-routing.module';
import {ClassListPage} from './class-list.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ClassListPage]
})
export class ClassListPageModule { }
